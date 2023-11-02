const shoppingList = [];

let i = countElems(shoppingList);
console.log(i);

function countElems(array = []){
    let curElem;
    while (!(curElem === null)) {
        curElem = prompt("Which items do you have to buy?");
        array.push(curElem);
        console.log(array);
    }

    return array.length - 1;
}