import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharacterCollection'

const numbersCollection = new NumbersCollection([-4, 77, 0 , 3, 56, -3])
const sorter = new Sorter(numbersCollection)
const charactersCollection = new CharactersCollection('XXayugayfwe')
sorter.sort()
const sorter2 = new Sorter(charactersCollection)
sorter2.sort()
// console.log(numbersCollection.data)
console.log(charactersCollection.data)

