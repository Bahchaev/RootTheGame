const Combinatorics = require('js-combinatorics');
const fractionList = [
    {
        fullName: `Маркиза де Коте`,
        name: 'Коты',
        weight: 10
    },
    {
        fullName: `Подземное герцогство`,
        name: 'Кроты',
        weight: 8
    },
    {
        fullName: `Крылатая династия`,
        name: 'Птицы',
        weight: 7
    },
    {
        fullName: `Бродяга (первый)`,
        name: 'Енот',
        weight: 5
    },
    {
        fullName: `Речное братство`,
        name: 'Выдры',
        weight: 5
    },
    {
        fullName: `Лесной союз`,
        name: 'Мыши',
        weight: 3
    },
    {
        fullName: `Вороний заговор`,
        name: 'Вороны',
        weight: 3
    },
    {
        fullName: `Бродяга (второй)`,
        name: 'Енот 2',
        weight: 2
    },
    {
        fullName: `Культ пресмыкающихся`,
        name: 'Ящерицы',
        weight: 2
    }
];
const playersWeight = new Map([
    [2, 17],
    [3, 18],
    [4, 21],
    [5, 25],
    [6, 28]
]);
let playersNumbers; // количество игроков
let fractionMinWeight; // минимальный общий вес фракций
let deletedFractions = []; // фракции, которыми не хотим играть
let wannaPlayFractions = []; // желаемые фракции
let wannaPlayFractionsWeight = 0; // вес желаемых фракций
let fractionListForRandomization = [];
let listOfFractionSet = [];

//содадим список оставшихся фракций
let nonDeletedFractions = fractionList.map(fraction => fraction.fullName);

//вывод список фракций из списка list
function showList(phrase, list) {
    console.log(phrase);
    list.forEach(function (fraction) {
        //console.log(` - ${fraction}`)

        if (Array.isArray(fraction)) {
            console.log(` - ${fraction.join(": ")}`)
        } else {
            console.log(` - ${fraction}`)
        }

    });
}

//задание количество игроков
function setPlayersNumbers(N) {
    playersNumbers = N;
    fractionMinWeight = playersWeight.get(playersNumbers);
}

//какими фракциями НЕ хотим играть? Удалим нежделательные фракции из списка
function deleteFractions(...deletedFractionKeys) {

    //функция проверка на удалённость
    const isDeleted = (fraction) => deletedFractionKeys.find(
        (key) => (key === fraction.name || key === fraction.fullName)
    ) !== undefined;

    //сформируем лист удалённых фракций
    deletedFractions = fractionList
        .filter((fraction) => isDeleted(fraction))
        .map((fraction) => fraction.fullName);

    //сформируем лист оставшихся фракций
    nonDeletedFractions = fractionList
        .filter((fraction) => !isDeleted(fraction))
        .map((fraction) => fraction.fullName);
}

//какими фракциями хотим играть обязательно?
function getWannaPlayFractions(...fractions) {
    wannaPlayFractions = [];
    wannaPlayFractionsWeight = 0;

    if (fractions.length > playersNumbers) {
        return console.log(`Количество желаемых фракций больше чем количество игроков`)
    }

    fractions.forEach(function (fraction) {
        fractionList.forEach(function (key) {
            if (key.fullName === fraction || key.name === fraction) {

                if (deletedFractions.includes(key.fullName)) {
                    console.log(`Желаемая фракция "${fraction}" находится в списке удалённых фракций`);
                } else {
                    wannaPlayFractions.push(key.fullName);
                    wannaPlayFractionsWeight += key.weight
                }
            }
        });
    });

    if (wannaPlayFractions.includes(`Бродяга (второй)`) && !wannaPlayFractions.includes(`Бродяга (первый)`)) {
        wannaPlayFractions[wannaPlayFractions.indexOf(`Бродяга (второй)`)] = `Бродяга (первый)`
    }
}

//тасование Фишера-Йетса (тру перетасовка для массивов).
function shuffle(arr) {
    let result = arr.concat();
    let j, temp;
    for (let i = result.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = result[j];
        result[j] = result[i];
        result[i] = temp;
    }
    return result;
}

//получение массива объектов для рандомизации
function getFractionListForRandomization() {
    fractionListForRandomization = nonDeletedFractions.filter((fraction) => !wannaPlayFractions.includes(fraction));

    //проверка на двух енотов (если нет первого енота, но есть второй, то второй енот становится первым)
    //если есть оба енота, но свободных слотов - 1, то второй енот удаляется из списка
    if (fractionListForRandomization.includes(`Бродяга (второй)`)) {
        if (!fractionListForRandomization.includes(`Бродяга (первый)`)) {
            fractionListForRandomization[fractionListForRandomization.indexOf(`Бродяга (второй)`)] = `Бродяга (первый)`
        }
        if (fractionListForRandomization.includes(`Бродяга (первый)`) && playersNumbers - wannaPlayFractions.length <= 1) {
            fractionListForRandomization.splice(fractionListForRandomization.indexOf(`Бродяга (второй)`), 1)
        }
    }
}


//создадим список с комбинациями фракций
function getListOfFractionSet() {

    //получение сочетания из массива array размерностью size
    function calculateCombinations(array, size) {
        let arr = [];
        let a;
        const combination = Combinatorics.combination(array, size);
        while (a = combination.next()) arr.push(a);
        return arr
    }

    let neededPlayersNumber = playersNumbers - wannaPlayFractions.length;   //сколько фракций нужно добрать с учетом количества желаемых фракций

    listOfFractionSet = calculateCombinations(fractionListForRandomization, neededPlayersNumber);   // получим комбинации всевозможных фракций

    listOfFractionSet = listOfFractionSet.filter(fractionSet => {   // отфильтруем варианты фракций по условию веса
        let fractionSetWeight = wannaPlayFractionsWeight;

        fractionSet.forEach(fraction => {
            fractionSetWeight += fractionList.find(element => element.fullName === fraction).weight;
        });

        return (fractionSetWeight >= fractionMinWeight)
    });

    listOfFractionSet.map(fractionSet => fractionSet.unshift(wannaPlayFractions))
}

function choiceFractionSet(N) {
    if (N > listOfFractionSet.length-1) {
        console.log(`Не правильный номер набора. Пожалуйста, введите цифру от 0 до ${listOfFractionSet.length-1}`)
    } else {
        console.log(`Вы выбрали следующий набор фракций: ${listOfFractionSet[N].join(', ')}`);
        console.log(`Великий рандом распределил вас следующим образом:`);
        let arr = shuffle(listOfFractionSet[N]);
        for (let i = 0; i < playersNumbers; i++) {
            console.log(`Игрок №${i + 1}: фракция "${arr[i]}"`)
        }
    }
}

//Рандомная игра для N человек:
function getRandomGame(N) {
    setPlayersNumbers(N);
    deletedFractions = []; // фракции, которыми не хотим играть
    wannaPlayFractions = []; // желаемые фракции
    getFractionListForRandomization();
    console.log(`Великий рандом распределил вас следующим образом:`);
    let arr = shuffle(fractionListForRandomization);
    for (let i = 0; i < playersNumbers; i++) {
        console.log(`Игрок №${i + 1}: фракция "${arr[i]}"`)
    }
}

//Ручные настройки игры игры:
function getSettingGame() {
    setPlayersNumbers(3);
    console.log(`Количетсво игроков: ${playersNumbers}, Минимальный общий вес фракций: ${fractionMinWeight}`);

    deleteFractions(`Вороны`);
    showList(`Удалённые фракции: `, deletedFractions);
    showList(`Оставшиеся фракции: `, nonDeletedFractions);

    getWannaPlayFractions(`Коты`, `Вороны`);
    showList(`Желаемые фракции: `, wannaPlayFractions);

    getFractionListForRandomization();
    showList(`Список фракция для рандомизации: `, fractionListForRandomization);

    getListOfFractionSet();
    showList(`Выберите набор фракций: `, Array.from(listOfFractionSet.entries()));

    choiceFractionSet(13)
}

//getSettingGame();
getRandomGame(5)


















