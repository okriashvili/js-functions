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
    console.log(first, second);
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
var results = numbers.reduceRight(function(left, right){
    return left - right;

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
var num = [12, 4341, 15, 98, 30, 145, 69, 9, 8];

var sortireba = num.sort(function(a, b){

return a-b;

});
console.log(sortireba);














