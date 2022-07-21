// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    
    receiveDamage(damage) {
        this.health -= damage
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier  {

    receiveDamage(damage) {
        this.health -= damage
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        //attack saxon by viking 
        //viking => random viking does attack
        //saxon => random saxon receives attack
        //if saxon health <= 0 => remove saxon from army

        if(this.saxonArmy.length === 0 || this.vikingArmy.length === 0) return 

        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        console.log(randomSaxon)
        console.log(randomViking)

        
        let result = randomSaxon.receiveDamage(randomViking.strength)
     
        this.saxonArmy.forEach(saxon => {
            if(saxon.health <= 0) {
                this.saxonArmy.pop()
            }
        })

        console.log(randomSaxon)
        console.log(result)

        return result
    }

    saxonAttack() {
        
        if(this.saxonArmy.length === 0 || this.vikingArmy.length === 0) return 

        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        console.log(randomSaxon)
        console.log(randomViking)

        let result = randomViking.receiveDamage(randomSaxon.strength)
     
        this.vikingArmy.forEach(viking => {
            if(viking.health <= 0) {
                this.vikingArmy.pop()
            }
        })

        console.log(randomViking)
        console.log(result)

        return result
    }


    showStatus() {
        if(this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else if(this.vikingArmy.length >= 1 || this.saxonArmy.length >= 1) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}

const war = new War()

let ragnar = new Viking('Ragnar', 120, 60)
let rollo = new Viking('Rollo', 100, 50)
let floki = new Viking('Floki', 145, 40)
let harald = new Viking('Harald', 45, 45)
let bjorn = new Viking('Bjorn', 95, 50)

let saxon1 = new Saxon(100, 25)
let saxon2 = new Saxon(100, 25)
let saxon3 = new Saxon(100, 25)
let saxon4 = new Saxon(100, 25)
let saxon5 = new Saxon(100, 25)

war.addViking(ragnar)
war.addViking(rollo)
war.addViking(floki)
war.addViking(harald)
war.addViking(bjorn)

war.addSaxon(saxon1)
war.addSaxon(saxon2)
war.addSaxon(saxon3)
war.addSaxon(saxon4)
war.addSaxon(saxon5)

console.log(war.saxonArmy)
console.log(war.vikingArmy)

ragnar.battleCry()
rollo.battleCry()
bjorn.battleCry()

war.vikingAttack()
console.log(war.saxonArmy)

war.saxonAttack()
console.log(war.vikingArmy)

war.vikingAttack()
console.log(war.saxonArmy)

war.saxonAttack()
console.log(war.vikingArmy)

war.vikingAttack()
war.vikingAttack()
war.saxonAttack()

console.log(war.showStatus())

war.vikingAttack()
war.saxonAttack()
war.saxonAttack()

console.log(war.showStatus())

war.vikingAttack()
war.vikingAttack()
war.vikingAttack()


console.log(war.showStatus())