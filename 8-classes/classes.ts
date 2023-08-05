class Vehicle {
  constructor(public color: string) {}
  // public drive(): void {
  //   console.log('chuga chuga')
  // }
  public honk(): void {
    console.log('beep beep')
  }

}

class Car extends Vehicle {
  constructor(public wheels: number, public color: string){
    super(color)
  }
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
  }
}
const vehicle = new Vehicle('red')
// vehicle.drive()
vehicle.honk()

const car = new Car(4, 'orange')
// car.drive()
car.startDrivingProcess()
