Car.prototype.height = 1400
Car.prototype.carName = 'BMW'
Car.prototype.lang = 4900

function Car(color, owner) {
    this.color = color
    this.owner = owner
}

var car = new Car('red','huang')
var car1 = new Car('green', 'haonan')
console.log(car)