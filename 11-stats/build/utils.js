"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const splitDate = dateString.
        split('/')
        .map((value) => {
        return parseInt(value);
    });
    return new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
};
exports.dateStringToDate = dateStringToDate;
