"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if ((match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) || (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin)) {
                wins++;
            }
        }
        return `There were ${wins} wins for ${this.team}`;
    }
}
exports.WinsAnalysis = WinsAnalysis;