function Car(name,price,country) {
  // state -> fileds -> properties -> data
  this.name = name;
  this.price = price;
  this.country = country;
  this.millage = 10;

  // behaviour -> methods -> functions
  this.getName = function () {
    return this.name;
  };

  this.getPrice = function () {
      return this.price;
  };

  this.getCountry = function (){
    return this.country;
  };
};

Car.prototype.toString = function(){
  return '\n Name - '+ this.name + '\n Price - ' + this.price + '\n Country - ' + this.country + '\n Millage - ' + this.millage;
};

var car = new Car('Audi',34.6,'India');
console.log('Name - '+car.getName());
console.log('Price - '+car.getPrice());
console.log('Country - '+car.getCountry());

var carMercedez = new Car('Mercedez',78,'India');
console.log(carMercedez.toString());
