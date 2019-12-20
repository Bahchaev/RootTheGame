/*
Дано:
* В игру играют N человек, 2 <= N <=6
* В игре есть M фракций (см. таблицу. Но она мб будет расширяться при дополнениях)
* Нам нужно сгенерировать случайно комбинации "игрок-фракция" так, чтобы суммарный "вес" соответствовал ограничению.

Варианты использования (частные случаи):
1. нас пятеро, выдай нам случайную партию
2. нас четверо и мы не хотим играть енотом, какие варианты игры возможны? (увидели возможные комбинации), Окей, выбираем (вот этот), распредели среди нас эти фракции
3. Не хотим играть без кошек, или с более чем одним енотом
 */

/*const fractionWeightList = new Map([
    [`Маркиза де Коте`, 10],
    [`Подземное герцогство`, 8],
    [`Крылатая династия`, 7],
    [`Бродяга (первый)`, 5],
    [`Речное братство`, 5],
    [`Лесной союз`, 3],
    [`Вороний заговор`, 3],
    [`Бродяга (второй)`, 2],
    [`Культ пресмыкающихся`, 2]
]);

const playersWeight = new Map([
    [2, 17],
    [3, 18],
    [4, 21],
    [5, 25],
    [6, 28]
]);

let playersNumbers; // количество игроков
let fractionMinWeight; // минимальный общий вес фракций
let deletedFractions; // фракции, которыми не хотим играть
let fractionForGame = [];

//задайте количество игроков
function setPlayersNumbers(N) {
    playersNumbers = N;
    fractionMinWeight = playersWeight.get(playersNumbers);
    console.log(`Количетсво игроков: ${playersNumbers}, Минимальный общий вес фракций: ${fractionMinWeight}`);
    console.log(`----------------------------------------------------------`)
}

//какими фракциями не хотим играть? Удалим нежделательные фракции из списка
function deleteFractions(...fractions) {
    fractions.forEach(function (key) {
        fractionWeightList.delete(key)
    });

    deletedFractions = fractions;
    console.log(`Удалим фракции: ${deletedFractions} `);

    console.log(`Оствшаеся фракции: `);
    for (let fraction of fractionWeightList.keys()) {
        console.log(fraction)
    }
    console.log(`----------------------------------------------------------`)
}

function wannaPlayFractions(...fractions) {
    if (fractions.length > playersNumbers) {
        return console.log(`Количество фракций больше чем количество игроков`)
    }
    fractions.forEach(function (key) {
        fractionForGame.push(key);
        if (deletedFractions.includes(key)) {
            console.log(`фракция "${key}" находится в списке удалённых фракций`);
            fractionForGame.pop(key)
        }
    });
    console.log(`----------------------------------------------------------`)
}

function getRandomFractions() {
    console.log(`Список фракция для игры: ${fractionForGame}`)
}

setPlayersNumbers(3);
deleteFractions(`Бродяга (второй)`, `Лесной союз`, `Культ пресмыкающихся`);
wannaPlayFractions(`Маркиза де Коте`, `Бродяга (первый)`);
getRandomFractions();*/


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
let nonDeletedFractions = []; //выбранные для игры фракции
let fractionListForRandomization = [];

//заполним список оставшихся фракций
fractionList.forEach(function (fraction) {
    nonDeletedFractions.push(fraction.fullName)
});

//вывод список фракций из списка list
function showList(phrase, list) {
    console.log(phrase);
    list.forEach(function (fraction) {
        console.log(` - ${fraction}`)
    });
}

//задание количество игроков
function setPlayersNumbers(N) {
    playersNumbers = N;
    fractionMinWeight = playersWeight.get(playersNumbers);
}

//какими фракциями НЕ хотим играть? Удалим нежделательные фракции из списка
function deleteFractions(...fractions) {
    deletedFractions = [];

    fractions.forEach(function (key) {
        fractionList.forEach(function (fraction) {
            if (key === fraction.name || key === fraction.fullName) {
                deletedFractions.push(fraction.fullName);
            }
        })
    });

    //сформируем лист оставшихся фракций
    nonDeletedFractions = [];
    fractionList.forEach(function (fraction) {
        if (!deletedFractions.includes(fraction.fullName)) {
            nonDeletedFractions.push(fraction.fullName)
        }
    });
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
                wannaPlayFractions.push(key.fullName);
                wannaPlayFractionsWeight += key.weight
            }
        });

        if (deletedFractions.includes(fraction)) {
            console.log(`Желаемая фракция "${fraction}" находится в списке удалённых фракций`);
            wannaPlayFractions.pop(fraction)
        }
    });
}

//тасование Фишера-Йетса (тру перетасовка для массивов).
function shuffle(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

//подсчет веса списка List
function getFullWeight(list) {
    let wannaPlayWeight = 0;

    list.forEach(function (fraction) {
        fractionList.forEach(function (key) {
            if (key.fullName === fraction) {
                wannaPlayWeight += key.weight;
            }
        })
    });

    return wannaPlayWeight
}

//получение массива объектов фракций со свойствами fullName и weight для рандомизации
function getFractionListForRandomization() {
    fractionListForRandomization = [];
    nonDeletedFractions.forEach(function (nonDeletedFraction) {
        if (wannaPlayFractions.length === 0 || !wannaPlayFractions.includes(nonDeletedFraction)) {
            fractionListForRandomization.push(nonDeletedFraction)
        }
    });

    // создадим массив объектов со свойствами fullName и weight из массива fractionListForRandomization
    let arr = [];
    fractionList.forEach(function (fraction) {
        fractionListForRandomization.forEach(function (key) {
            if (key === fraction.fullName) {
                arr.push({
                    fullName: fraction.fullName,
                    weight: fraction.weight
                })
            }
        })
    });
    return arr
}

//создадим массив с комбинациями фракций
function showVariantsOfFractionSet() {
    let arr = getFractionListForRandomization();
    let neededPlayersNumber = playersNumbers - wannaPlayFractions.length; //сколько фракций нужно добрать с учетом количества желаемых фракций

    if (neededPlayersNumber > 0) {
        while (arr.length > 0) {

            for (let i = neededPlayersNumber - 1; i <= arr.length - 1; i++) {
                let sum = wannaPlayFractionsWeight;
                let variants = [];

                for (let j = 0; j < neededPlayersNumber - 1; j++) {
                    sum += arr[j].weight;
                    variants.push(arr[j].fullName)
                }

                sum += arr[i].weight;

                if (sum >= fractionMinWeight) {
                    variants.push(arr[i].fullName);
                    variants = variants.concat(wannaPlayFractions);
                    console.log(`${variants.join(', ')} ---- вес: ${sum}`);
                }
            }
            arr.shift()
        }
    }
}


//Настройки игры:
setPlayersNumbers(4);
deleteFractions(`Енот`, `Енот 2`);
//getWannaPlayFractions(`Коты`, `Бродяга (первый)`);
//getFractionListForRandomization();


//Вывод информации в консоль
console.log(`Количетсво игроков: ${playersNumbers}, Минимальный общий вес фракций: ${fractionMinWeight}`);
//showList(`Удалённые фракции: `, deletedFractions);
//showList(`Оставшиеся фракции: `, nonDeletedFractions);
//showList(`Желаемые фракции: `, wannaPlayFractions);
//showList(`Список фракция для рандомизации: `, fractionListForRandomization);

showVariantsOfFractionSet();











