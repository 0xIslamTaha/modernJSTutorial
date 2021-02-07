class coffeShop {
    name;
    drinks = [];
    drinkMenu = {
        coffee: 5,
        orange: 8,
        colla: 3,
        water: 4,
    }
    totalCost = 0;

    constructor(name) {
        this.name = name;
    }

    isDrinkAavialbe(drink){
        return Object.keys(this.drinkMenu).includes(drink);
    }

    orderDrink(drink){
       if (this.isDrinkAavialbe(drink)){
           this.drinks.push(drink);
           return drink;
       }
       return null;
    }

    checkPlease() {
        for (let drink of this.drinks) {
            this.totalCost += this.drinkMenu[drink]
        }
        return [this.name, this.totalCost];
    }


}

let mickey = new coffeShop('Mickey');
if (mickey.isDrinkAavialbe('pepsi')){
    mickey.orderDrink('pepsi');
} else {
    mickey.orderDrink('colla')
}
mickey.orderDrink('coffee')
console.log(mickey.checkPlease())


let batoot = new coffeShop('Batoot');
batoot.orderDrink('colla');
batoot.orderDrink('orange');
console.log(batoot.checkPlease());

export default coffeShop;
