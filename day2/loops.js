var array = ['India','China','Japan','Shri Lanka'];

for(var i = 0 ; i < array.length; i++){
  console.log('data - '+array[i]);
  document.write('<br/>data'+array[i]);
}

var loopObj = {
  name : 'android',
  value : 'Marshmallow'
};

for (var prop in loopObj) {
  if (loopObj.hasOwnProperty(prop)) {
    console.log('Property - '+prop +' Value - ' +loopObj[prop]);
  }
}

for(var data of array){
  console.log('Data is - '+data);
}
