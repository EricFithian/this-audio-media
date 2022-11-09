const eric = {
    firstName: "Eric",
    lastName: "Fithian",
    greeting: function() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}. Nice to meet you!`)
    }
}

eric.greeting();

// const batman = {
//     alias: "Batman",
//     secretIdentity: "Bruce Wayne",
//     money: 100000000,
//     health: 100,
//     power: 30,
//     damage(num) {
//         this.health = this.health - num;
//         // "After losing " + num + " health"
//         // console.log("Health left: " + this.health)
//         console.log(`After losing ${num} health, ${this.alias} still has ${this.health} left`)
//         if(this.health < 0) console.log(`${this.alias} is dead and lost`)
//     },
//     changeInMoney(num) {
//         this.money += num;
//         console.log(this.money)
//     }
// }

// const superman = {
//     alias: "Superman",
//     secretIdentity: "Clark Kent",
//     money: 3400000,
//     health: 100,
//     power: 30,
//     damage(num) {
//         this.health = this.health - num;
//         console.log(`After losing ${num} health, ${this.alias} still has ${this.health} left`);
//         if(this.health < 0) console.log(`${this.alias} is dead and lost`)
//     }
// }

class Superhero {
    constructor(alias, secretIdentity, money, health, power=30) {
        this.alias = alias;
        this.secretIdentity = secretIdentity;
        this.money = money;
        this.health = health;
        this.power = power;
    }

    damage(num) {
        this.health = this.health - num;
        // "After losing " + num + " health"
        // console.log("Health left: " + this.health)
        console.log(`After losing ${num} health, ${this.alias} still has ${this.health} left`)
        if(this.health < 0) console.log(`${this.alias} is revealed to be ${this.secretIdentity} and is now dead after losing`)
    }

    changeInMoney(num) {
        this.money += num;
        console.log(this.money)
    }
}

const batman = new Superhero('Batman', 'Bruce Wayne', 100000000, 100, 30);
const superman = new Superhero('Superman', 'Clark Kent', 3000000, 100, 30);
console.log(batman);
console.log(superman);

let turn;
const randomNum = Math.random();

if(randomNum > 0.5) turn = 'batman';
else turn = 'superman'

while(superman.health > 0 && batman.health > 0) {
    if(turn === 'batman') {
        superman.damage(Math.floor(Math.random() * batman.power));
        turn = 'superman';
    } else {
        batman.damage(Math.floor(Math.random() * superman.power));
        turn = 'batman'
    }
}

batman.changeInMoney(-234567)