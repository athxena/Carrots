let horseName = "Carrots";
let horseAge = 7;
let isHorseInStable = true;
let horseNickname = "Tomato";
let favoriteTreat = "Pop tarts";
let monthlyBoardingFee = 250;
let monthsBoarded = 3;
let lateFee = monthlyBoardingFee * 1.2;

let visitorMessage = "Welcome! This is " + horseName;
let latePaymentMessage =
    horseName + "'s payment is late. Please pay: $" + lateFee;

console.log(visitorMessage);
console.log(latePaymentMessage);

let horseOne = {
    name: "Carrots",
    nickname: "Tomato",
    favoriteTreat: "Pop Tarts",
    age: 7,
    monthlyBoardingFee: 250,
    isHorseInStable: true,
    color: "Brown",
    mane: "Long",
};

let horseTwo = {
    name: "Lolipop",
    nickname: "Poppy",
    favoriteTreat: "Lettuce",
    age: 67,
    monthlyBoardingFee: 250,
    isHorseInStable: true,
    color: "Pink",
    mane: "Short",
};

let horseThree = {
    name: "Sword",
    nickname: "ShaShing",
    favoriteTreat: "Pizza",
    age: 25,
    monthlyBoardingFee: 250,
    isHorseInStable: true,
    color: "Black",
    mane: "Long",
};

let horses = [horseOne, horseTwo, horseThree];

let horseFour = {
    name: "Fluffy",
    nickname: "Pinky",
    favoriteTreat: "Cotton Candy",
    age: 3,
    monthlyBoardingFee: 250,
    isHorseInStable: true,
    color: "Rainbow",
    mane: "Fluffy",
};

horses.push(horseFour);

horseOne.isHungry = false;
horseTwo.isHungry = true;
horseThree.isHungry = false;
horseFour.isHungry = true;

let horseOneHungryMessage = horseOne.name + " is hungry: " + horseOne.isHungry;
let horseTwoHungryMessage = horseTwo.name + " is hungry: " + horseTwo.isHungry;
let horseThreeHungryMessage =
    horseThree.name + " is hungry: " + horseThree.isHungry;
let horseFourHungryMessage =
    horseFour.name + " is hungry: " + horseFour.isHungry;

console.log(horseOneHungryMessage);
console.log(horseTwoHungryMessage);
console.log(horseThreeHungryMessage);
console.log(horseFourHungryMessage);

let totalStalls = 6;

function stallsAvailable() {
    let available = totalStalls - horses.length;
    console.log("Stalls available: " + available);
}

stallsAvailable();

function latePaymentOwed(horse, monthlyFee) {
    let amountOwed = monthlyFee * 1.2;
    console.log(horse + " owes $" + amountOwed + " if rent is paid late.");
}

latePaymentOwed(horseOne.name, horseOne.monthlyBoardingFee);
latePaymentOwed(horseTwo.name, horseTwo.monthlyBoardingFee);
latePaymentOwed(horseThree.name, horseThree.monthlyBoardingFee);
latePaymentOwed(horseFour.name, horseFour.monthlyBoardingFee);

function getHorseNickname(horse) {
    return horse.nickname;
}

let chosenHorseNickname = getHorseNickname(horseThree);
console.log("The chosen horse's nickname is: " + chosenHorseNickname);
