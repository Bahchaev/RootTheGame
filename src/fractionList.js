import React, {useEffect, useState} from 'react';

const FractionList = new Map();
FractionList.set('Маркиза де Коте', 10)
    .set(`Подземное герцогство`, 8)
    .set(`Крылатая династия`, 7)
    .set(`Бродяга 1`, 5)
    .set(`Речное братство`, 5)
    .set(`Лесной союз`, 3)
    .set(`Вороний заговор`, 3)
    .set(`Бродяга 2`, 2)
    .set(`Культ пресмыкающихся`, 2);

export default FractionList