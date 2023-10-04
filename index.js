// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers= function (){
   const firstDrivers=drivers.slice(0, 2)
    return firstDrivers
}

const returnLastTwoDrivers= function(){
    const lastDrivers= drivers.slice(2)
    return lastDrivers
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(){
        return integer*5
    }
}

function fareDoubler(integer){
    return integer*2
}

function fareTripler(integer){
    return integer*3
}

function selectDifferentDrivers(arrayOfDrivers, firstTwoDrivers){
    return firstTwoDrivers()
}