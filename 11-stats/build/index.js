"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var MatchedResults;
(function (MatchedResults) {
    MatchedResults["HomeWin"] = "H";
    MatchedResults["AwayWin"] = "A";
    MatchedResults["Draw"] = "D";
})(MatchedResults || (MatchedResults = {}));
let manUnitedWins = 0;
for (let match of reader.data) {
    if ((match[1] === 'Man United' && match[5] === MatchedResults.HomeWin) || (match[2] === 'Man United' && match[5] === MatchedResults.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`Number of Man Wins : ${manUnitedWins}`);
