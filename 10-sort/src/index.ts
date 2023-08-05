import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharacterCollection'
import { LinkedList } from './LinkedList'


const numbersCollection = new NumbersCollection([-4, 77, 0 , 3, 56, -3])
numbersCollection.sort()
console.log(numbersCollection)
// const sorter = new Sorter(numbersCollection)
const charactersCollection = new CharactersCollection('XXayugayfwe')
charactersCollection.sort()
console.log(charactersCollection)
// sorter.sort()
// const sorter2 = new Sorter(charactersCollection)
// sorter2.sort()
// // console.log(numbersCollection.data)
// console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(2)
linkedList.add(-3)
linkedList.add(0)
linkedList.add(-99)
linkedList.add(56)
linkedList.sort()
linkedList.print()

// const sorter = new Sorter(linkedList)
// sorter.sort()
// linkedList.print()


