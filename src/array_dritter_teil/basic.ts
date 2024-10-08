// Schleifen/ Loops wiederholen solange einen {Anweisungsblock} bis die Schleifenbedingung for loops da brauchen wir die, oder wie heute bei map/ forEach/ filter bis alle Elemente aus einem Array durchlaufen sind 
// map((callback) => mache etwas) und gibt ein neues array zurück 

// wir erstellen eine shopping list und wollen mit map jedem element ein "!" anhängen
const shoppingList: string[] = ["Eis", "Schokolade", "Eier", "Nudeln", "Pilze", "Sahne", "Fleisch"];

const shoppingListWithExclamationMark: string[] = shoppingList.map((item) => {
    return item + "!"
})
console.log(shoppingListWithExclamationMark);
// alle Element in grroßBuchstaben umwandeln 
// srrow function short way bietet sich an wenn ich nur eine sache machen möchten 
const shoppingListUppercase : string[] = shoppingList.map((item) => item.toUpperCase());
console.log(shoppingListUppercase);
// wir wollen aus den Elementen jetzt fortlaufende elemente 
// der zweite Parameter bei map(), forEach() gibt den aktuellen Index des Elementes an
const shoppingListWithOrder: string[] = shoppingList.map((item, index) => {
    return `${index + 1}.)${item}`; 
})
// mit map()kann ich alle elemente aus einem array beliebig verändern, manipulieren und mutieren lassen und es direkt in einem neuen array abspeichern, so dass das ursprungsarray nicht verändert wird
// forEach(callback) hat den Unterschied das es kein neues Array zurückgibt. Daher ist es eher dafür geeignet Dinge/ Inhalte wiederzugeben und auszugeben
shoppingListWithOrder.forEach((item) =>{
    console.log(item);
})
// gib mir nur Elemente aus die 5 oder wenige Zeichen haben 
shoppingList.forEach((item:string)=> {
    if(item.length <=5){
        console.log(item);
    }
})
// wir wollen dem user eine ausgabe zu seiner shopping list machen
const orderedList= document.querySelector('#orderedList');
// mit innerHTML kann ich Elemente im HTML erzeugen 
// wenn ein zweiter parameter vergeben wird ist das immer der aktuelle index des jeweiligen elementes aus dem array 
shoppingList.forEach((item)=>{
    // abfrage auf orderedList vorhanden
    if(orderedList)
    orderedList.innerHTML += `<li>${item}</li>`
// alter value plus neuer value 
// = letzter value
})
// forEach nimmt jedes Element aus dem array shoppingList und packt es in den Parameter item --> danach wird der anweisungsblock ausgeführt
// wenn der anweisungsblock zu ende ist, geht forEach ein Element im array weiter und wiederholt den prozess, bis alle elemente aus shoppingList durchlaufen/ benutzt worden sind


