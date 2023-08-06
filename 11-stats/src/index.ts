import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader('football.csv')

reader.read()

enum MatchedResults {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0

for (let match of reader.data) {
  if ((match[1] === 'Man United' && match[5] === MatchedResults.HomeWin) || (match[2] === 'Man United' && match[5] === MatchedResults.AwayWin))
  {
    manUnitedWins++
  }
}

console.log(`Number of Man Wins : ${manUnitedWins}`)
