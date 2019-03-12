let rabbit = {};
rabbit.speak = function(line) {
   console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive");


function calcDamage(damage, defense, toughness = 0){
   return damage * (1 - Math.min(20, Math.max( defense / 5, defense - damage / (toughness / 4 + 2)))/25);
}

// console.log(calcDamage(5, 20, 8));

function random(num){
   let random = Math.random()
   console.log(random);
   return Math.floor(random * num); 
}

console.log(random(10));