let productName= "Naushniki";
let priceProduct = 150.00;
let discount =10;
let raiting = 4.5;
let available = true;

let finallyPrice = priceProduct - (priceProduct*discount)/100;

let availableInStore = available ? " isAvailable" : "notAvailable";

console.log("===Kartochka tovara");
console.log("Nazvznie: " + productName);
console.log("Price: " + priceProduct+"$");
console.log("skidka:" + discount +"%");
console.log("cena so skidkoy: " +finallyPrice +"$");
console.log("reyting: " + raiting + " iz 5");
console.log("Type of price variable: "+ typeof priceProduct);
console.log("type of available variable: " +typeof available);

