import coffeShop from './parentClass.js'

class restaurant extends coffeShop {
    foodMenu= {
        pizza: 10,
        pasta: 8
    }
    foods = [];

    orderFood(food){
        if (Object.keys(this.foodMenu).includes(food)){
            this.foods.push(food);
            return food;
        }
        return null;
     }
 
     checkPlease() {
         let [name, drinkCost] = super.checkPlease();
         for (let food of this.foods) {
             this.totalCost += this.foodMenu[food];
         }
         return [this.name, this.totalCost];
     }
     
}

let _3amDahab = new restaurant('3amDahab');
_3amDahab.orderFood('pizza');
_3amDahab.orderDrink('colla');

console.log(_3amDahab.checkPlease());
