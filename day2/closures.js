  function Car(){
    this.name  = 'Audi';
    this.price = 12000;
    this.speed= 0;

    function getName() {
      return this.name;
    };

    function getSpeed(speed) {
      this.speed = speed;
      return this.speed;
    };

    function getPrice() {
      return function() {
        return this.price;
      };
    };

  this.getName = getName;
  this.getSpeed = getSpeed;
  this.getPrice = getPrice;
}

 var car = new Car();
 var name = car.getName();
 console.log('Car Name is - '+name);
 var price = car.getPrice();
 console.log(car.getSpeed(10));
 console.log('Car Price is - '+price);
