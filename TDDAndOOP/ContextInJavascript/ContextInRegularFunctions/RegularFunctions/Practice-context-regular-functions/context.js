function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // ?
// undfined eats fish food

/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // ?
//error
// * Nemo eats fish food
/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // ?
//error
//same as scenario 2?
//  * undefined eats fish food

/********************************* Scenario 4 *********************************/
// nemo.swim(); // ?
// Nemo swimming in the watter

/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // ?
// undefined swims in the water.
// *error
