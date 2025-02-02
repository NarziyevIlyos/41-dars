// jingalak qavs bilan obyekt yaratish

const objectPerson = {
  firstName: "Alisher",
  lastName: "Egamberdiyev",
  age: 20,
  profession: "talaba",
  method: () => console.log(`Salom, men ${lastName} ${firstName} bo'laman.`),
};

// obyektning tanasini ( { ... } ) ya'ni  ekranga chiqarish, buning uchun obyektning boshini, ya'ni nomini console.logga yozish kerak
// bunda obyektdagi barcha xossalar (= xususiyatlar = sifatlar) va ularning qiymatlari chiqariladi
console.log(objectPerson);
/** 
Result:
    
    {
        firstName: 'Alisher',
        lastName: 'Egamberdiyev',
        age: 20,
        profession: 'talaba',
        method: [Function: method]
    }
*/

// Agar obyektning faqat xossalari kerak bo'lsa, u holda quyidagi kodni yozish kerak:
// Object.keys(objectPerson)
// Yuqoridagi kodning o'qilishi:
// Obyektni (= Object) ichiga kirib (= Object.), uning xossalarini (= keys) ol

console.log(Object.keys(objectPerson)); // [ 'firstName', 'lastName', 'age', 'profession', 'method' ]

// Agar obyektning faqat qiymatlari kerak bo'lsa, u holda quyidagi kodni yozish kerak:
// Object.(objectPerson)
// Yuqoridagi kodning o'qilishi:
// Obyektni (= Object) ichiga kirib (= Object.), uning xossalarini (= keys) ol

console.log(Object.values(objectPerson)); // result: [ 'Alisher', 'Egamberdiyev', 20, 'talaba', [Function: method] ]

// obyektga qo'shimcha xossa kiritish

objectPerson.isMarried = false;

console.log(objectPerson);

/** 
 * {
        firstName: 'Alisher',
        lastName: 'Egamberdiyev',
        age: 20,
        profession: 'talaba',
        method: [Function: method],
        isMarried: false
    }
*/

// Reference data type'ni ochib beruvchi misollar

console.log("objectPerson2 obyektining ekranga chiqishi");
const objectPerson2 = {
  firstName: "Akbar",
  lastName: "Berdiyev",
  age: 28,
  profession: "oshpaz",
  method: () => console.log(`Salom, men ${lastName} ${firstName} bo'laman.`),
};

console.log(
  "objectPerson3 o'zgaruvchisiga objectPerson2 o'zgaruvchisining qiymati ya'ni obyekti berildi"
);
const objectPerson3 = objectPerson2;

console.log("objectPerson3 obyektining ekranga chiqishi");
console.log(objectPerson3);

/**
 * result:
 * {
        firstName: 'Akbar',
        lastName: 'Berdiyev',
        age: 28,
        profession: 'oshpaz',
        method: [Function: method]
    }
 */

// objectPerson2 obyekti bilan objectPerson3 obyektining tengligini solishtirish
console.log(objectPerson2 == objectPerson3); // true

/**
 * Nega teng chiqdi, chunki objectPerson2 bilan objectPerson3 o'zgaruvchilari o'zida heap xotiradan joy olgan ayni bir obyektning takrorlanmas ID manzilini QIYMAT sifatida saqlamoq
 * O'zgaruvchilarning nomi xar hil bo'lishi mumkin, ammo ular o'zida shu obyektning heap xotiradagi manzilni saqlamoqda, shuning uchun ular teng chiqadi.
 */

// Bu xuddi bitta yuk saqlanadigan ombordan foydalanayotgan ikkita savdogarga o'xshaydi. Agar birinchi savdogar ushbu omborga yangi bir mahsulot olib kelgan bo'lsa, ikkinchi savdogarda ham ushbu mahsulotni sotish imkoniyati mavjud.
// Agar ombordan ikkinchi savdogar ma'lum bir mahsulotni butunlay olib chiqib sotsa, har ikki sadogarda ham ushbu mahsulotni sotish imkoniyati bo'lmaydi.

// masalan:

console.log("objectPerson3'ga add() metodi qo'shildi");
objectPerson3.add = (a, b) => a + b;

console.log("objectPerson3'ning ekranga chiqishi");
console.log(objectPerson3);
console.log("objectPerson2'ning ekranga chiqishi");
console.log(objectPerson2);

/**
 * Natija
 * Har ikki objectPerson2 va objectPerson3 obyektlari tanasida add xossasi bor
 */

/**
 * @Object o'zida @xossa va @harakatlarni (= metodlarni = funksiyalarni) o'zida saqlovchi quti
 *
 */

// Masalan:

let calculator = {
  name: "Calculator", // name xossasi bor

  // quyida add(), subtract(), multiple(), module() funksiyalari (= Harkatlari = metodlari = usullari) bor
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiple: (a, b) => a * b,
  divide: (a, b) => a / b,
  module: (a, b) => a % b,
};

console.log("calculator.subtract(17, 3) = ", calculator.subtract(17, 3));

/**
 * @object yaratuvchi @funksiya yaratamiz
 */

// funksiya obyektga tashqaridan qiymatlarni olib beradi
function createUser(firstName, lastName, age, profession, ps) {
  // obyekt yaratiladi
  const createObject = {
    //createObject'ning firstName xossasiga
    //createUser funksiyasi tashqaridan firstName parametri yordamida qiymatni olib beryapti
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  return createObject;
}

// endi biz createUser funksiyasidan foydalanib
// juda ko'p foydalanuvchi obyektlarini yaratishimiz mumkin
// Masalan:

let Javohir = createUser("Javohir", 17, 215652121);
let Ali = createUser("Ali", 15, 215652821);
let Muhammad = createUser("Muhammad", 30, 90897654);
let Elchin = createUser("Elchin", 27, 934567988);

console.log(Javohir);
console.log(Ali);
console.log(Muhammad);
console.log(Elchin);

/**
 * Natija:
 *  { firstName: 'Javohir', lastName: 17, age: 215652121 }
    { firstName: 'Ali', lastName: 15, age: 215652821 }
    { firstName: 'Muhammad', lastName: 30, age: 90897654 }
    { firstName: 'Elchin', lastName: 27, age: 934567988 }
 */

/**
    Yuqoridagi funksiyani optimallashtirilgan varianti 2
 */

// funksiya obyektga tashqaridan qiymatlarni olib beradi
function createUser2(firstName, lastName, age, profession, ps) {
  // obyekt yaratiladi va uni darhol return'ga qiymat sifatida beriladi
  return {
    //createObject'ning firstName xossasiga
    //createUser funksiyasi tashqaridan firstName parametri yordamida qiymatni olib beryapti
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
}

let Dono = createUser2("Dono", 67, 21553121);
let Sherbek = createUser2("Sherbek", 25, 207652821);
let Doston = createUser2("Doston", 80, 9089456654);

console.log(Dono);
console.log(Sherbek);
console.log(Doston);

/**
    Yuqoridagi funksiyani optimallashtirilgan varianti 3
 */

// funksiya obyektga tashqaridan qiymatlarni olib beradi
function createUser3(firstName, lastName, age, profession, ps) {
  // obyekt yaratiladi va uni darhol return'ga qiymat sifatida beriladi
  return {
    // createUser3 ning parametrlari tashqaridan kirib kelayotgan qiymatni o'ziga qabul qilib oladi,
    // qaytariluvchi xossa nomlari bilan reateUser3 ning parametr nomlari bir xil,
    // shu bois obyekt tanasida xususiyatlarni yozmasdan to'g'ridan-to'g'ri createUser3 ning parametrlarini xossa sifatida qaytarib yuborsak bo'ladi.
    // chiqishi key : value bo'lib chiqaveradi
    firstName, // firsName = Nimadir
    lastName, // lastName = Nimadir
    age, // age = son
  };
}

let Chori = createUser2("Chori", 20, 21553121);
let Ilhom = createUser2("Ilhom", 32, 207652821);
let Asad = createUser2("Asad", 40, 9089456654);

console.log(Chori);
console.log(Ilhom);
console.log(Asad);

// tanasi bir xil, ammo nomlari har xil bo'lgan obyektlarni taqqoslash
let user1 = createUser2("Name", 100, 1111111111);
let user2 = createUser2("Name", 100, 1111111111);
let user3 = user1;

console.log(user1 == user2); // false
console.log(user3 == user1); // true

/**
     * Nega bunday?
     * har bir obyekt tanasi heap xotiradan alohida joy egallaydi va 
       bu joy manzilini obyekt boshi bo'lgan o'zgaruvchi o'zida saqlaydi.
       
       user1 va user2 o'zgaruvchilari uchun alohida-alohida obyekt ochilgan, 
       bu obyektlarning heap xotiradan joylashuv manzilini user1 va user2 o'zgaruvchilari o'zida qiymat sifatida saqlamoqda.
       manzillar takrorlanmas id'ga (= takrorlanmas songa) ega bo'ladi.
       Demak, user1 va user2 teng emas.

       user3 va user1 o'zgaruvchilari teng, chunki ularning tanasi bir xil, 
       ya'ni dastlab user1 uchun heap xotirada yaratilgan obyektning manzilini 
       qiymat sifatida saqlab turgan user1 o'zgaruvchisi o'z qiymatini user3 o'zgaruvchisiga qiymat sifatida bermoqda.
       Natijada ularning qiymati teng bo'ladi.
     */

/**
 * @this kalit so'zi haqida
 * this (= shu) kalit so'zi shu obyektga ishora qiladi.
 */

const person = {
  firstName: "Bobur",
  lastName: "Jo'rayev",
  age: 25,
  profession: "talaba",
  introduce: function () {
    // obyekt tanasi ichidan name o'zgaruvchisining qiymatini console'ga chiqaradi
    console.log(
      `Assalomu alaykum, men`,
      this.lastName + " " + this.firstName + " bo'laman"
    );
    // shu obyektning butun tanasini ekranga chiqaradi
    console.log(this);
  },
};

//person obyektidagi introduce() metodi ishga tushirilyapti
console.log(person.introduce());

// natija:
/**
        * Assalomu alaykum, men Jo'rayev Bobur bo'laman
        {
        firstName: 'Bobur',
        lastName: "Jo'rayev",
        age: 25,
        profession: 'talaba',
        introduce: [Function: introduce]
        }
     */






/**
 * Function Constructor yaratish umumiy xulosa
 * Function Constructor => ham funksiya hisoblanadi, shu bois
 * @function kalit so'zi yordamida obyekt yaratuvchi funksiya @ELON_QILINADI .
 * @function kalit so'zidan keyin obyekt yaratuvchi @funksiyaning_NOMI yoziladi.
 * @funksiyaning_NOMI dan keyin @funksiya_PARAMETRIni qaubul qiluvchi @guruhlash_operatori () yoziladi.
 * @guruhlash_operatori dan keyin @funksiya_TANASI yoziladi.
 * @funksiya_TANAsi ichida @this kalit so'zidan ( = vazifasi xossa va funksiya qo'shish) foydalanib funksiya parametrlarini va metodlarini (= qaram funksiyalarni) => 
 * @new (= vazifasi yangi bo'sh obyekt yaratish) operatori yordamida yaratilgan @yangi_bush_obyekt ga @QUSHAMIZ .
 * yangi obyekt nomi => @let , @const , @var bilan e'lon qilinadi.
 * yangi obyekt nomidan keyin obyektni qiymat sifatida o'zlashtiruvchi @qiymatni_uzlashtiruvchi operator (=) yoziladi. 
 * @function_constructor yordamida hosil qilingan kod blokini yangi obyekt tanasiga joylashtirish uchun vazifasi yangi obyekt yaratish bo'lgan @NEW operatori yoziladi.
 * @NEW operatori yozilgandan keyin @obyekt_yaratuvchi_funksiya_NOMI yoziladi va shu funksiyani chaqiruvchi @guruhlash_operatori () yoziladi.
 * @guruhlash_operatori () ichiga @qiymatlar yoziladi.
 * keyin bir turdagi obyekt nomlari chaqiriladi.


*/

function functionConstruction(param1, param2, param3){
  this.param1;
  this.param2;
  this.param3;
}
let a = new functionConstruction()

/** @function_constructor yordamida hosil qilingan kod blokini obyekt tanasiga joylashtirish uchun @NEW operatori YANGI bo'sh obyekt yaratadi */
console.log(a); //functionConstruction {}


// MASALAN

function CreateUser(name, age, ps) {
  this.name = name;
  this.age = age;
  this.ps = ps;
}

let Ashur = new CreateUser("Ashur", 23, 5874235);
let Vali = new CreateUser("Vali", 43, 58986235);
let Sherzod = new CreateUser("Sherzod", 40, 554324235);

console.log(Ashur);
console.log(Vali);
console.log(Sherzod);

/**
 * Natija:
 *  CreateUser { name: 'Ashur', age: 23, ps: 5874235 }
    CreateUser { name: 'Vali', age: 43, ps: 58986235 }
    CreateUser { name: 'Sherzod', age: 40, ps: 554324235 }
 */

