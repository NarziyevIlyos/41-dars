//object1 - Avtoulov Obyekti

function CarData(made, brand, year){
    this.made = made;
    this.brand = brand;
    this.year = year;
    this.getInfo = function(){
        console.log(`${this.brand} ${this.made} tomonidan ${this.year}-yilda ishlab chiqarilgan`);
    };
}

let nexia = new CarData("Daewoo", "Nexia", 1997);
console.log(nexia);
nexia.getInfo();

// result: nexia.getInfo(); => TypeError: nexia.getInfo is not a function

//object2 - talabalar obyekti

const CheckStudent = function(firsName, age, grade) {
    this.firsName = firsName;
    this.age = age;
    this.grade = grade;
    this.isPassed = function(){
        return this.grade>60;
    }
}

let Jurabek = new CheckStudent("Jo'rabek", 20, 65);
let Begmurod = new CheckStudent("Begmurod", 19, 50);
console.log("Jurabek => ", Jurabek.isPassed());
console.log("Begmurod => ", Begmurod.isPassed());
      

//object1
let Student = function(name, course){
    this.name = name;
    this.course = course;
    this.introduce = function(){
        console.log("My name is ",this.name, " and I am in course", this.course);
    }
}

let Student1 = new Student("Amir", 3);
console.log(Student1.introduce());

//object3

function Car(brand, speed){
    this.brand = brand;
    this.speed = speed;
    this.slow = function(amount){
        if(amount<speed){
            return speed - amount;
        }else return "Xato, eng katta tezlikdan yuqori darajaga sekinlatib bo'lmaydi"
    }
}

let Damas = new Car("Damas", 90);
console.log(Damas);
console.log(Damas.slow(30)); 

// object4
Number.prototype.kvadrati = function(){
    return this ** 2;
};

let a = 22;
let b = 8;
console.log(`${a} * ${a} = `, a.kvadrati()); 
console.log(`${b} * ${b} = `, b.kvadrati()); 
// result: NaN

//object5

Array.prototype.yigindi = function(){
    let sum = 0;
    for(let i=0; i<this.length; i++){
        sum += this[i];
    }
    return sum;
}

const n = [1,2,3,4,5];
const m = [1,0,3, 6, 4, 9, 12];
let res1 = n.yigindi();
let res2 = m.yigindi();
console.log(`n arrayning yig'indisi = `, res1);
console.log(`m arrayning yig'indisi = `, res2);

// object5

let account = function(acoountNumber, balance){
    this.acoountNumber = acoountNumber;
    this.balance = balance;
    this.deposit = (amount) => balance + amount;
    this.withdraw = (amount) => {
        if(balance>amount){
            return balance - amount;
        }else return "Kechirasiz, hisobingizda yetarli mablag' yo'q"
    };
}

let myAccount = new account("54576878762", 70000000);
console.log(myAccount);
console.log(myAccount.balance);
console.log(myAccount.deposit(7000000));
console.log(myAccount.deposit(100000));
console.log(myAccount.withdraw(80000000));
console.log(myAccount.withdraw(100000));

