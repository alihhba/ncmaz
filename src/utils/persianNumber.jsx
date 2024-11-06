import React from 'react';

const latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const persianToLatinMap = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const arabicToPersianMap = ['۴', '۵', '۶'];

const persianNumbers = [/۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g, /۰/g];
const latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];
const arabicNumbers = [/٤/g, /٥/g, /٦/g];

function latinToPersian(string) {
    let result = string;

    for (let index = 0; index < 10; index++) {
        result = result.replace(latinNumbers[index], latinToPersianMap[index]);
    }

    return result;
}

function persianToLatin(string) {
    let result = string;

    for (let index = 0; index < 10; index++) {
        result = result.replace(persianNumbers[index], persianToLatinMap[index]);
    }

    return result;
}

function arabicToPersian(string) {
    let result = string;

    for (let index = 0; index < 10; index++) {
        result = result.replace(arabicNumbers[index], arabicToPersianMap[index]);
    }

    return result;
}

export const toPersian = string => {
    if (string === undefined || string === null) {
        string = '';
    }

    string = toString(string);

    return latinToPersian(arabicToPersian(string));
};

export const toLatin = string => {
    if (string === undefined || string === null) {
        string = '';
    }

    return persianToLatin(arabicToPersian(string));
};

const PersianNumber = (props) => {
    let {children = '', withSeparator = false} = props;

    if (withSeparator) {
        return (new Intl.NumberFormat('fa-IR')).format(children);
    }

    if (children === null || children === '') {
        return '';
    }

    if (typeof children !== 'string') {
        children = children.toString();
    }
    return latinToPersian(arabicToPersian(children));
}

export default PersianNumber;