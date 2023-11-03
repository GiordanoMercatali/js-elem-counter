const arrayList = [];

let i = countElems(arrayList);
console.log(i);
document.getElementById("result").innerHTML = `There are ${i} elements in the array.`;

function countElems(array = []){
    let curElem;
    while (!(curElem === null)) {
        curElem = prompt("Insert element");
        if(curElem !== null){
            array.push(curElem);
        }
    }

    return array.length;
}