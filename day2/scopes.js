var carName  = 'Audi';
function isIndian(){
    var isIt = true; // local scope

    function isAmerican(){
        var isAm = true;
        isIt = false;
    }

    console.log('Car Name is Scopes- '+global.carName);
    return isIt;
}

isIndian();

bikeName = 'Apache';

console.log('Bike Name - '+bikeName);
