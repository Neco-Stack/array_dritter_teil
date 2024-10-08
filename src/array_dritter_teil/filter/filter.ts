import { userArr } from './user';
// mit filter(callback) suche ich nach bestimmten dingen/ elementen in einem array
// ähnlich wie bei map/ forEach() habe ich eine callback function in der ich etwas machen kann und z.B. eine Bedingung habe
// auch filter() gibt ein neues array zurück
const numbers: number [] = [2,3,4,11,13,16,28,230,27];
// wir wollen alle geraden Zahlen aus dem numbers array filtern 
// 
const evenNumbers: number [] = numbers.filter((num) =>{
    if(num  % 2 === 0){
        return num; 
    }
})
console.log(evenNumbers);
const oddEven: number[] = number.filter((num) => {
    if (num % 2 !==0){
        return num
    }
})
console.log(oddEven);
// wir haben ein grosses Array 
// wir wollen uns alle user aus berlin rausfiltern
const userBerlin: User[]= userArr.filter((country) => {
    if (country[3] === "Berlin"){
        return country;
    }
})
// wir wollen uns alle user unter 30 ruasfiltern
const userUnder30: User [] = userArr.filter((userAge)=> {
    if(userAge[2] < 30){
        return userAge;
    }
})
console.log(userUnder30);
// wir wollen jetzt von den unter 30 jährigen die einen gerade Geburtstag hatten 
const userUnder30: Use[]= userUnder30.filter(())

console.log("test");
const userUnder30Even: User [] = userUnderAge.filter((userAge)=>{
    if (userAge [2] % 2 === 0) {
        return userAge;
    }
})
console.log(userUnder30Even);
console.log(userUnder30.sort((userA: User, userB: User)=>{
    return userA[2] - userB[2]
}));


