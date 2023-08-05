"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharacterCollection_1 = require("./CharacterCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([-4, 77, 0, 3, 56, -3]);
const sorter = new Sorter_1.Sorter(numbersCollection);
const charactersCollection = new CharacterCollection_1.CharactersCollection('XXayugayfwe');
sorter.sort();
const sorter2 = new Sorter_1.Sorter(charactersCollection);
sorter2.sort();
// console.log(numbersCollection.data)
console.log(charactersCollection.data);
