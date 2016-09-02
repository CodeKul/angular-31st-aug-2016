var obj = Object.create(Object.prototype,{
  myFun : {
    value : function(){
      return 'Hi';
    }
  },
  name : {
    writable : true,
    value : 'android'
  },
  price : {
    writable :false,
    value : 123
  }
});

obj.name = 'Apple';
obj.price = 89;
console.log('I am from function - '+obj.myFun());
console.log('My Name is - '+obj.name);
console.log('Car price is -'+obj.price);
