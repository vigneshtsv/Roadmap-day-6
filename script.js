//example
// class Car{
//     constructor(brand,color){
//     this.brand = brand;    //key = value //c(brand => obj(brand) //audi
//     this.color = color;    //block
//     }
// }
// var obj = new Car("audi","block");
// console.log(obj.color);
// console.log(obj.brand);

//!example of constructor and class and this

// class Person{
//     constructor(names,age,gender,salary){
//         this.names = names;
//         this.age = age;
//         this.gender= gender;
//         this.salary = salary;
//     }
// }
// const obj =  new Person("vignesh",25,"male",5000)
// console.log(obj.names);
// console.log(obj.age);
// console.log(obj.gender);
// console.log(obj.salary);

//!class
// class Car{
//     constructor(brand,model,color,year){
//       this.brand = brand;
//       this.model = model;
//       this.color = color;
//       this.year = year;
//     }
// }
// var car1 = new Car("Hyndai","1504","black",1998);
// var car2 = new Car("audi","a9","white",2000);
// var car3 = new Car("tata","nano","red",2013);
// var car4 = new Car("bmw","s8","white",2009);

// console.log(`All the car brands are
// "car1": ${car1.brand};
// "car2": ${car2.brand};
// "car3": ${car3.brand};
// "car4": ${car4.brand}`)

// //!class with methods
// class Car{
//   drive(){
//     console.log("driving the car")
//   }
//   break(){
//     console.log("applying the break")
//   }
// }
// const car1 = new Car();

// car1.drive();
// car1.break();

//!set and get example:-
// const users = {
//   set name(n) {
//     console.log("setting a name" + " " + n);
//     this._name = n;
//   },
//   get name() {
//     console.log("getting a name");
//     return this._name;
//   },
// };
// users.name = "john";
// console.log(users.name);

//!example using class and methods:-
// class Car{
//  constructor(power){
//   this.power = this._power;
//  }
//  set power(n){
//       console.log(`setting up the power: ${this._power =n}`);  //n = 400
//  }
//  get power(){
//       console.log(`getting the power: ${this._power}hp`); //400hp
//  }
// }
// var car1 = new Car(400);
// console.log(car1.power);

