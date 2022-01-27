/**
 * Ryan Monaghan
 *  Codecademy JS Objects Lesson
 *  01/27/2022
 *  Meal Maker
 *  TASK: As a frequent diner, you love trying out new restaurants and experimenting with different foods.
 *  However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big,
 *  and you want an easier way to be able to figure out what you are going to eat.
 *
 *  In this project, I'll use JavaScript to randomly create a three-course meal based on what is available on a menu.
 *  We can keep running it until we are satisfied with the generated meal!
 */




const menu = {
    _courses: {
      appetizers:[],
      mains:[],
      desserts:[],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
     get mains() {
      return this._courses.mains;
    },
     get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
    },
    set mains(mains) {
    this._courses.mains = mains;
    },
    set desserts(desserts) {
    this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length)
      return dishes[randomIndex];
    },
  
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} the price is ${totalPrice}.`;
    }
  };
  
  
  menu.addDishToCourse('appetizers','salad', 4.00);
  menu.addDishToCourse('appetizers','wings', 4.50);
  menu.addDishToCourse('appetizers','fries', 5.00);
  
  menu.addDishToCourse('mains','steak', 10.00);
  menu.addDishToCourse('mains','salmon', 7.75);
  menu.addDishToCourse('mains','tofu', 11.20);
  
  menu.addDishToCourse('desserts','macaron', 2.00);
  menu.addDishToCourse('desserts','ice cream', 5.00);
  menu.addDishToCourse('desserts','bubble tea', 3.25);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  