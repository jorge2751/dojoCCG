class Card {
    constructor(name, cost) {
        this.name = name,
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost),
        this.power = power,
        this.res = res
    }

    attack(target) {
        if(target instanceof Unit) {
            target.res -= this.power
            return this
        } else {
            console.log( "Target must be a unit!" )
            return this
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, mag) {
        super(name, cost),
        this.stat = stat,
        this.mag = mag,
        this.text = `${mag>0 ? 'Raise' : 'Lower'} the target's ${stat='res' ? 'resilience' : 'power'} by ${Math.abs(mag)}`
    }

    play(target) {
        if(target instanceof Unit) {
            if(this.stat === 'power'){
                target.power += this.mag
                return this
            } else if(this.stat === 'res') {
                target.res += this.mag
                return this
            }
        } else {
            console.log( "Target must be a unit!" )
            return this
        }
    }
}

const redNinja = new Unit('Red Belt Ninja', 3, 3, 4)
const hardAlgo = new Effect('Hard Algorithm', 2, 'res', 3)
hardAlgo.play(redNinja)

const blackNinja = new Unit('Black Belt Ninja', 4, 5, 4)
const premReg = new Effect('Unhandled Promise Rejection', 1, 'res', -2)
premReg.play(redNinja)

const pairPro = new Effect('Pair Programming', 3, 'power', 2)
pairPro.play(redNinja)

redNinja.attack(blackNinja)

const allUnits = [redNinja, blackNinja]
const allEffects = [hardAlgo, premReg, pairPro]
console.table(allUnits)
console.table(allEffects)