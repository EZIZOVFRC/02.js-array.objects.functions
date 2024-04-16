// ----------TASK1---------LOOPS
// function hesabla() {
//     let number = parseInt(prompt('Eded Daxil Edin'));
//     let bolme = number % 100;
//     let yuzluk = (number - bolme) / 100;
//     let teklik = bolme % 10;
//     let onluq = (bolme - teklik) / 10;

//     let cem = yuzluk + onluq + teklik;
//     let hasil = yuzluk * onluq * teklik;
//     let orta = cem / 3;
    
//     console.log(cem, hasil, orta);
// }

// hesabla();

// -------------------TASK2---LOOPS---------
// function bolenler(number) {
//     for (let i = 1; i <= number / 2; i++) {
//         if (number % i == 0) {
//             console.log(i);
//         }
//     }
// }

// let number = parseInt(prompt('Eded Daxil Edin'));
// bolenler(number);

// -----------TASK3--------LOOPS-----

// function bolenler(number) {
//     let counter=0
//     for (let i = 1; i <= number / 2; i++) {
//         if (number % i == 0) {
//             counter++
//         }
//     }
//     console.log(counter);
// }

// let number = parseInt(prompt('Eded Daxil Edin'));
// bolenler(number);

// -----------------task4--------loops-----
// let array=[0,1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < array.length; i++) {
//     let square=array[i]*array[i]
//     console.log(`${array[i]}x${array[i]}=${square}`);
// }


// -----------------task5--------loops-----
// let array=[0,1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < array.length; i++) {
//     let square=array[i]**2
//     let kub=array[i]**3
//     console.log(`${array[i]} ${square} ${kub}`);
// }

// --------------TASK6------LOOPS
// function bolenler(number) {
//     for (let i = 2; i <=number/2; i++) {
//         if (number % i === 0) {
//            return false
//         }
//     }
//     return true
// }
// for (let i= 2; i <100; i++) {
//     if (bolenler(i)) {
//         console.log(i);
//     }
    
// }

// --------------------TASK7----LOOPS---------TEK CUT CEM
// let tekler=0
// let cutler= 0
// for (let i = 1; i < 100; i++) {
//     if (i%2==1) {
//         tekler+=i
//     }
//     else{
//         cutler+=i
//     }
        
//     }
//     console.log(tekler,cutler);



// -----------------ARRAYS===TASK1==========


// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//   ];
// let orta_skor=[]
// for (let i = 0; i < students.length; i++) {
//     let cem=0
//     for (let j = 0; j < students[i].scores.length; j++) {
//         cem+=students[i].scores[j]
        
//       }
//       let orta=cem/3
//       orta_skor.push(orta)
    
// }
//   console.log(orta_skor);

// ----------------arrays---------task2------------
// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
//   ];
//   let newArr=[]
//   for (let i = 0; i < webTechs.length; i++) {
//     if (webTechs[i].length>4) {
//         newArr.push(webTechs[i])
//     }
    
//   }
//   console.log(newArr);

// -------------------ARRAYS-------------TASK3

// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
// let sum =0
//   for (let i = 0; i < products.length; i++) {
//     sum+=products[i].price
//   }
//  let orta=sum/products.length
//   console.log(sum,orta);

// -------------------ARRAYS TASK 4--------------

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
// let a_baslayan_biten=[]

// for (let i = 0; i < countries.length; i++) {
//     if (countries[i][0]=='A' && countries[i][countries[i].length-1]=='a') {
//         a_baslayan_biten.push(countries[i])
//     }
    
// }
// console.log(a_baslayan_biten);


// ------------------------ARRAYS TASK 5-------------------

// function bolenler(number) {
//     let counter=0
//     for (let i = 1; i <= number / 2; i++) {
//         if (number % i == 0) {
//             counter++
//         }
//     }
//     console.log(counter);
// }

// let number = parseInt(prompt('Eded Daxil Edin'));
// bolenler(number);

// ARRAYS TASK 6-------------------

// let sentence=prompt('Cumle daxil et!')
// function spaces(sentence) {
//     let counter=0
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i]===' ') {
//             counter++
//         }
//     }
//     return console.log(`Bosluq sayi ${counter}`);
// }
// spaces(sentence)\


// ---------------------FUNCTIONS TASK1=========

// function  printFullName(name,surname) {
//     let fullname='I\'m'+' ' + name+ ' ' + surname
//     return fullname
// }
// console.log(printFullName('Ferec','Ezizov'));

// ---------------------FUNCTIONS TASK2=========
// let eded=parseInt(prompt('Eded daxil et'))
// function square(number) {
//     return number**2
// }
// console.log(square(eded));

// // ---------------------FUNCTIONS TASK3=========

// function toplama(a,b) {
//     return a+b
// }

// function cixma(a,b) {
//     return a-b
// }

// function vurma(a,b) {
//     return a*b
// }
// function bolme(a,b) {
//     return a/b
// }

// console.log(toplama(2, 3)); // 5
// console.log(vurma(2, 3)); //6
// console.log(cixma(2, 3)); //-1
// console.log(bolme(2, 3)); // 0,666666

// // ---------------------FUNCTIONS TASK4=========

// function calculator(a,b,callback) {
//     return callback(a,b)

// }
// function toplama(a,b) {
//     return a+b
// }

// function cixma(a,b) {
//     return a-b
// }

// function vurma(a,b) {
//     return a*b
// }
// function bolme(a,b) {
//     return a/b
// }

// console.log(calculator(5,4,bolme));

// // ---------------------FUNCTIONS TASK5=========
// let array=[1,3,45,6,2]
// const getSum = (array) =>{
//     let sum=array[0]+array[array.length-1]
//     return sum
// }
// console.log(getSum(array));

// // ---------------------FUNCTIONS TASK6=========

// let array=[1,3,45,6,2]

// function sum(array) {
//     let sum=0
//     for (let i = 0; i < array.length; i++) {
//         sum+=array[i]
        
//     }
//     return sum
// }
// console.log(sum(array));

// // ---------------------FUNCTIONS TASK7=========

// let array=[1,3,45,6,2]

// function max(array) {
//     let max = Math.max(...array)
//     return max
// }
// console.log(max(array));

// // ---------------------FUNCTIONS TASK8=========
// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];

// function findSalary(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].salary>60000) {
//             console.log(array[i]);
//         }
        
//     }
// }

// findSalary(employees)

// // ---------------------FUNCTIONS TASK9=========
// 9) verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın

// let array=[1,3,45,6,2]
// function finder(arr,number) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(number)) {
//             console.log('Element Tapildi');
//             return
//         }
//         else{
//             console.log('Element arrayda yoxdur');
//             return
//         }
//     }
// }

// finder(array,22)


// // ---------------------FUNCTIONS TASK10=========

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// function space(sentence) {
//     let counter=0
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i]==' ') {
//             counter++
//         }
//     }
//     return counter
// }
// console.log(space(sampleNews));

// // ---------------------FUNCTIONS TASK11=========
// 11. Daxil edilən iki arrayi birləşdirən funksiya yazın.

// let arr1=[13,35,87]
// let arr2=[33,45,86]
// function contact(arr1,arr2) {
//     return arr1.concat(arr2)
// }
// console.log(contact(arr1,arr2));


// TASK 12 FUNCTIONS
// 12. Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
// let repeated=[]
// function repeat(a,b) {
//     for (let i = 0; i < a; i++) {
//         repeated.push(b)
        
//     }
//     return repeated
// }

// console.log(repeat(20,3));


// // ---------------------FUNCTIONS TASK13=========

// let arr = [33, 45, 86, 12, 32];

// function replacer(array, move, to) {
//     let a = array[to];
//     array[to] = array[move];
//     array[move] = a;
//     return array;
// }

// console.log(replacer(arr, 2, 0));
// ---------------------------FUNCTION TASK 14 LAST 

// function range(from,to) {
//     let range=[]
//     for (let i = from; i <= to; i++) {
//        range.push(i)
//     }
//     return range
// }

// console.log(range(20,30));