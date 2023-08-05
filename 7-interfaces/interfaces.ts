    interface Reportable {  
        summary(): string;
    }
    
    const oldCivic = {
        name: 'civic',
        year: new Date(),
        broken: true,
        summary(): string {
            return `Name is ${this.name}`
        }
    }

    const drink = {
        color: 'brown',
        carbonated: true,
        summary(): string {
            return `my drink is ${this.color} and is ${this.carbonated}`
        }
    }

    const printSummary = (item: Reportable): void => {
        console.log(`${item.summary()}`)
    }   

    printSummary(oldCivic)
    printSummary(drink)