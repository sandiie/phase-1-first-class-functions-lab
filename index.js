;const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};

const drivers = ['driver1', 'driver2', 'driver3', 'driver4'];

console.log(returnFirstTwoDrivers(drivers)); 
console.log(returnLastTwoDrivers(drivers)); 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] ;

function createFareMultiplier (int) {
    return function(fare=5) {
        return fare * int;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray);
}
 


