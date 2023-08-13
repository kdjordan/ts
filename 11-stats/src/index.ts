import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from './MatchResult'

const reader = new CsvFileReader('football.csv')
reader.read()

console.log(reader.data[0][0])


let manUnitedWins = 0

for (let match of reader.data) {
  if ((match[1] === 'Man United' && match[5] === MatchResult.HomeWin) || (match[2] === 'Man United' && match[5] === MatchResult.AwayWin))
  {
    manUnitedWins++
  }
}

// console.log(`Number of Man Wins : ${manUnitedWins}`)
