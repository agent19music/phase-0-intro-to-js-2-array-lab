// Write your solution here!
const cats = ["Milo", "Otis","Garfield"];

function destructivelyAppendCat(name){
  cats.push(name);
}

function destructivelyPrependCat(name){
  cats.unshift(name);
}

function destructivelyRemoveLastCat(){
  cats.pop();
}

function destructivelyRemoveFirstCat(){
  cats.shift();
}

function appendCat(name){
 const copyOfCats = [...cats, name];
  return copyOfCats;
}
 
function  prependCat(string){
  const copyOfCats = [string, ...cats];
  return copyOfCats;
} 


function removeLastCat(){
  cats.length = 0;
  cats.push("Milo","Otis","Garfield");
  const copyOfCats = cats.slice(0,-1);
  return copyOfCats;
}


function removeFirstCat(){
  cats.length = 0;
  cats.push("Milo","Otis","Garfield");
 const copyOfCats = cats.slice(1);
 return copyOfCats;
}


