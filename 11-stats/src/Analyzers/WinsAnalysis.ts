import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0

    for (let match of matches) {
      if ((match[1] === this.team && match[5] === MatchResult.HomeWin) || (match[2] === this.team && match[5] === MatchResult.AwayWin))
      {
        wins++
      }
    }

    return `There were ${wins} wins for ${this.team}`
  }
} 