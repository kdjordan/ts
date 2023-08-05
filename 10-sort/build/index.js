"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharacterCollection_1 = require("./CharacterCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([-4, 77, 0, 3, 56, -3]);
numbersCollection.sort();
console.log(numbersCollection);
// const sorter = new Sorter(numbersCollection)
const charactersCollection = new CharacterCollection_1.CharactersCollection('XXayugayfwe');
charactersCollection.sort();
console.log(charactersCollection);
// sorter.sort()
// const sorter2 = new Sorter(charactersCollection)
// sorter2.sort()
// // console.log(numbersCollection.data)
// console.log(charactersCollection.data)
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(2);
linkedList.add(-3);
linkedList.add(0);
linkedList.add(-99);
linkedList.add(56);
linkedList.sort();
linkedList.print();
// const sorter = new Sorter(linkedList)
// sorter.sort()
// linkedList.print()
