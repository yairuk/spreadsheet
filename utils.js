'use strict';

const UTILS = (function () {

    function getCellSumById(cellsArray, id) {
        return cellsArray.find(cell => cell.id === id).sum;
    }

    function checkStrIncludesOnlyNumbers(str) {
        const regex = new RegExp('^[0-9]+$');
        return regex.test(str);
    }

    return {
        getCellSumById: getCellSumById,
        checkStrIncludesOnlyNumbers: checkStrIncludesOnlyNumbers,
    };
}());