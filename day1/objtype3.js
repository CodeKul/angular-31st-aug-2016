var myObj = {
  name : 'android',
  price : 10000,
  toString : function(){
    return '\n Name - '+this.name +' \n Price - '+this.price;
  },
  setName : function(name){
    this.name = name;
  },
  getName : function(){
    return this.name;
  }
};

var myObj2 = {
    showData : function(){
        console.log('Obj2 Name - '+myObj.getName());;
    }
};

console.log(myObj.toString());
myObj2.showData();
