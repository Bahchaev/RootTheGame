import React, {useEffect, useState} from 'react';

const List =  {
    'коты': {
        fullName: `Маркиза де Коте`,
        name: 'Коты',
        weight: 10
    },
    'кроты': {
        fullName: `Подземное герцогство`,
        name: 'Кроты',
        weight: 8
    },
    'птицы': {
        fullName: `Крылатая династия`,
        name: 'Птицы',
        weight: 7
    },
    'енот': {
        fullName: `Бродяга (первый)`,
        name: 'Енот',
        weight: 5
    },
    'выдры': {
        fullName: `Речное братство`,
        name: 'Выдры',
        weight: 5
    },
    'мыши': {
        fullName: `Лесной союз`,
        name: 'Мыши',
        weight: 3
    },
    'вороны': {
        fullName: `Вороний заговор`,
        name: 'Вороны',
        weight: 3
    },
    'енот 2': {
        fullName: `Бродяга (второй)`,
        name: 'Енот 2',
        weight: 2
    },
    'ящерицы': {
        fullName: `Культ пресмыкающихся`,
        name: 'Ящерицы',
        weight: 2
    },
};

const FractionList = new Map(Object.entries(List));

export default FractionList