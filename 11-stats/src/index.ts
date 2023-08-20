import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader'
// import { MatchResult } from './MatchResult'


const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()



// console.log(`Number of Man Wins : ${manUnitedWins}`)
