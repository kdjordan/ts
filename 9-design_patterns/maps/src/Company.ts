import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  name: string;
  catchphrase: string;
  location: {
    lat: number,
    lng: number
  }

  constructor() {
    this.name = faker.company.name()
    this.catchphrase = faker.company.catchPhrase()
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.latitude()
    }
  }

  markerContent(): string {
    return `
      Company: ${this.name}<br />
      Catchphrase is ${this.catchphrase}
      `
  }
}