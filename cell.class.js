'use strict';

class Cell {
    _content = '';
    id;
    _sum;

    constructor(content, id) {
        this._content = content;
        this.id = id;
    }

    set content(val) {
        this._content = val;
    }

    get content() {
        return this._content;
    }

    get sum() {
        return _sum;
    }

    onfocus() {
        // can be edit the cell
    }

    onBlur(cells) {
        // calculate the cell
        // checking if the value valid 

        if (this._content.startsWith('=')) {
            const subStr = this._content.substring(1, this._content.length);

            if (UTILS.checkStrIncludesOnlyNumbers(subStr)) {
                this._sum = eval(subStr);
                return this._sum;
            } else {
                // need to parse the id to their values
                let tmpSum = 0;
                const breakContent = subStr.split('+');

                breakContent.forEach(item => {
                    if (!Number.isNaN(item)) {
                        tmpSum += item;
                    } else {
                        tmpSum += UTILS.getCellSumById(cells, item);
                    }
                });
                this._sum = tmpSum;
                return this._sum
            }
        } else {
            this._sum = _content;
            return this._sum;
        }
    }

}