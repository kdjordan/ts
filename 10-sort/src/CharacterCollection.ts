export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
  }
  swap(leftIndex: number, rightIndex: number): void {
    let stringArr = this.data.split('')
    
    let leftHand = stringArr[leftIndex]
    stringArr[leftIndex] = stringArr[rightIndex]
    stringArr[rightIndex] = leftHand

    this.data = stringArr.join('')
  }
}