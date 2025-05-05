// var d = new Date()
// document.write(d.getFullYear(), '-', d.getMonth(), '-',  d.getDate(), '-', d.getMinutes(), '-', d.getSeconds(), '-', d.getDay())


// var bd = new Date
// var day = [1, 2, '...', 11]
// var month = ["january", "february", "march", "june"]
// var year = [2000, 2001, 2002, 2003]
// document.write("<br>" + year[3], '-', month[3], '-', day[3])

// var clock = new Date
// document.write("<br>" + "<br>" + clock.getHours(), '-', clock.getMinutes(), '-', clock.getSeconds())


// var x = [12, 432, 15, 11, 32432, 123, 454, 100]
// var checkAge = x.filter(adult);

// function adult(age) {
//     return age >= 30
// }

// console.log(adult(age))


// RGB -  ფერის რენდომ დაგენერირება
var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
var rgb = "rgb(" + r + "," + g + "," + b + ")"
console.log(rgb);

// unmaned function, who has no name and no variable
(() => {
    var x = [12, 4341, 15, 98, "hello world"];
    i = 0;
    while(i < x.length){
        console.log(x[i]);
        i++;
    }

})();

// გადაამომწმებს რომელი ელენემტია მასივში 30ზე მეტი ან ტოლი და true/falseით გამოიტანს შედეგს
var arry = [12, 4341, 15, 98, 30, 145, 69, 9, 8];
for(i = 0; i < arry.length; i++ ) {
    var adult = 30
    var checkAge = adult < arry[i]
    if(adult >= 30) {
        console.log(checkAge)
    }
}

// ეს კოდი კი უშუალოდ იმ ციფრებს გამოიტანს რომლებიც 30ზე მეტინი არიან ან ტოლი
// .filter მეთოდი
var arry = [12, 4341, 15, 98, 30, 145, 69, 9, 8];

var result = arry.filter((x) => {
    return x >=30;
    // returnში ვუწერთ პირობას რომლის დაკმაყოფილების შემთხვევაშიც გამოიტანს შესაბამის შედეგს 
});
console.log(result);

// every მეთოდი, გადაამოწმებს ყველა ელემენტს მასივში და თუ წაყენებული პირობას დააკმაყოფილებს გამოიტანს შედეგს
// წაყენებულ პირობაში ყველა ელემენტს გადაამოწმებს და გამოიტანს true/false 
// გაწერილ პირობას ადარებს ყველა ელემენტს
var arry = [12, 4341, 15, 98, 30, 145, 69, 9, 8];
var result = arry.every(function myFunction(num) {
    return num >= 40;
}); 
console.log(result);

// some იგივენაირად მუშაობს როგორს every, მაგრამ თუკი ერთმა ელემენტმაც დააკმაყოფილა პირობა გამიტანს true/false შედეგს
var arry = [12, 4341, 15, 98, 30, 145, 69, 9, 8];
var result = arry.some(function myFunction(num) {
    return num >= 1000;
});
console.log(result);

console.log("hello world")

// every და some ფუნქციის მაგსვასი ალგორითმი
var arry = [12, 4341, 15, 98, 30, 145, 69, 9, 8];
function all(arr) {

    for(ind = 0; ind < arr.length; ind++) {
        var number = 10000;
        var checkAge = number > arry[i];
        if(checkAge === true){
            console.log(true)
        } else if(checkAge === false) {
            console.log(false)
        }

    }
}
all(arry)
// failed

// map და foreach მეთოდები
// map- მეთოდი მოცემული მასივიდან კრეფს ელემენტებს/ და ამ 
// map-ს გადაეცემა ორი პარამეტრი
// მასივის სახელiი.map() ფრჩხილებში იწერება ფუნქცია(function ragaca(name1, name2) მაპს ფუნქციაში გადაეცემა ორი პარამეტრი)
// პირველი პარამტერს გადაეცემა მასივების ელემენტები მონაცემებად
// მეორე პარამეტრს კი მათი რიგითობის აღმნიშვნელი ციფრები/ 0და ზევით
var arry = [12, 4341, 15, 98, 30, 145, 69, 9, 8];
    arry.map(function fnct(value, index) {
            console.log(value, index);
            
    });

 
    console.log("hello world");

// map ახალ მასივს ქმნის რომლის გამოყენებაც შეგვიძლია სამომავლოდ
// forEach კი ახალ მასივად არ გარდაიქმნება 
var arry = [12, 4341, 15, 98, 30, 145, 69, 9, 8];
var doubleArry = arry.map(function double(first, second) {
    console.log(second, first);
});
console.log("hello world");

// mapით გამოყენებული doubleArry გამოვიყენეთ ახალ მასივად მაგრამ გადაეცა მხოლოდ მისი რიგითობის მონაცემი 
var tripleArry = doubleArry.map(function triple(first, second2) {
    console.log(first, second2);
});


// same works forEach


// reduce და reduceRigth მეთოდი - მასივებს აკლებს/ ამატებს თანმიმდევრობით რ თანმიმდევრობასაც გავუწერთ
// 
var numbers = [1000, 343, 57];
var results = numbers.reduce(function(left, right){
    return left + right;

});
console.log(results)

// Array საკვანძო სიტყვა

// Arry.isArray ამოწმებს არის თუ არა მასივი ჩვენი ცვლადი
// თუ მასივს ცარიელს დავტოვებთ ის მაინც მასივად აღიქმება
var strings = [23, 12312, 1413, "hello world", "gamarjoba"]
var is = Array.isArray(strings)

console.log(is)


// Array.from ელემენტებიდან ქმნის მისივს
var saxeli = "hello";
var masivi = Array.from(saxeli);
console.log(masivi);
masivi.unshift("world");
console.log(masivi);


// sort მეთოდი, კლებადობით ან მეტობით ან გაწერილი პირობის მიხედვით ალაგებს მასივებს
// ცვლადის სახელს ვუწერთ .sort მეთოდს, შემდეგ ვწერთ პირობას თუკი როგორ გვინდა რომ დაალაგდეს იგი
// თუ გვინდა რომ ზრდადობით დავალაგოთ ფუნქციაში უნდა გავუწეროთ ორი არგუმენტი მაგ: a,b
// თუ a - b, a-ს გამოვაკლებთ b-ს იგი დაგალდება ზრდდობით
// ხოლო თუ პირიქით გამოვაკლებთ იგი დალაგდება კლებაოდბით
var num = [12, 4341, 15, 98, 30, 145, 69, 9, 8];
var sortireba = num.sort(function(a, b){
return a - b;
});
console.log(sortireba);



// ვამოწმებთ არის თუ არა ყველა რიცხი მასივში ლუწი
function ricxvebiLuwia(ricxvebi) {
    return ricxvebi.every(function(even) {
        return even % 2 === 0;
    });
}
let ricxvebi = [2, 34, 56, 68, 78, 32, 54, 9];
console.log(ricxvebiLuwia(ricxvebi));

console.log("kai ra");

function areAllEven(numbers) {
    return numbers.every(function(num) {
        return num % 2 === 0;
    });
}
let numbers = [2, 4, 6, 8];
console.log(areAllEven(numbers));

// sort მეთოდი
var rigitoba = [2, 4, 12, 6, 8, 23, 43, 5, 1, 90]; 
rigitoba.sort(function(st, nd) {
    return st - nd;
});
console.log(rigitoba);


// entries მეთოდი იტერაცია მასივში
// entries მეთოდს მოაქვს მასივების რიგითობა და მათი მნიშნვნელობა - ისევე მუშობს როგორც map და foreach მაგრამ ორი მნიშნვნელობა არ ჭირდება  
var rigitoba = [2, 4, 12, 6, 8, 23, 43, 5, 1, 90]; 
for(var nums of rigitoba.entries())
console.log(nums);

// .wtih ელემენტს უცვლის სახელს, გადაეცემა ორი მნიშვნელობა, პირველი ელემენტის რიგითი ნომერი რომელი ელემენტიც გვინდა ჩანაცვლდეს
// და მეორე მნიშვნელბა კი რითიც გვინდა რომ ჩანაცვლდეს 
// მასგავდ მოქმედებს როგორც .replace მაგრამ replace ემუშავენა მხოლოდ სტრინგებს და არა მასივებს
var names = ["giorgi", "nika", "makho", "lasha", "barka"]
names = names.with(4, "barkala")
console.log(names);

// replace ემუშავება მხოლოდ სტრინგებს 
var saxeli = "toro"
axali = saxeli.replace("toro", "nakho")
console.log(axali);


// საკლასო დავალება 1: filter მეთოდიით წამოიღეთ ის რიცხვეი რომლებიც 20ზე ნაკლებია
var g = [12, 32, 1, 45, 6, 3, 21];
var result = g.filter(function(x) {
    return x > 20;
});
console.log(result);



// საკლასო დავალება 2: reduce 
var n = [100, 20, 70];
var sxvaoba = n.reduce(function(st, nd){
    return st - nd
});
console.log(sxvaoba);

// საკლასო დავალება 3: კლებადობით დალაგება
var rigitoba = [2, 4, 12, 6, 8, 23, 43, 5, 1, 90]; 
rigitoba.sort(function(one,two){
    return one - two;
});
console.log(rigitoba);





