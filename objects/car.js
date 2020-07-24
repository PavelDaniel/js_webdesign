
var car = {
    make: 'Chevy',
    model: 'Bel Air',
    color: 'red',
    passengers: 2,
    mileage: 0,
    tank: 0,
    maxTank: 70,
    consumption: 6,

    // umple rezervorul (comanda)
    fillTank: function(quantity) {
        // umplem rezervorul
        this.tank = this.tank + quantity
        // dam afara surplusul
        if (this.tank > this.maxTank) {
            this.tank = this.maxTank
        }
    },

    // conduce masina (comanda)
    drive: function(distance) {
        // creste numarul de km parcursi
        this.mileage += distance
        // calculam consumul pe distanta (regula de 3 simpla)
        var comsumptionPerDistance = distance * this.consumption / 100
        // scandem din rezervor consumul
        this.tank -= comsumptionPerDistance
    },

    // intreba care este distanta pana cand se goleste rezervorul
    // si o returneaza (intrebare)
    distanceToEmpty: function() {
        // regula de 3 simpla:
        return Math.round(this.tank * 100 / this.consumption)
    }
}

car.fillTank(70)
car.drive(100)
car.drive(150)
car.drive(700)
car.drive(100)
car.drive(50)
car.fillTank(50)

car.mileage = 151

console.log(car)

document.write("Mai poti parcurge " + car.distanceToEmpty() + " km")
