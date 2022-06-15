#!/usr/bin/env node
/* forEach */

const cities = [
    "Montevideo",
    "Maldonado",
    "San Jose",
    "Las Piedras"
]

cities.forEach(function(city, index){
    console.log(index, city)
})
