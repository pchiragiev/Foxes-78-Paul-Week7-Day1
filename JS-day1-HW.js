let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];
let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

// Exercise #1

function findWords(dog_s, dog_n){
    let dog_names = "";
    for(let i = 0; i < dog_n.length; i++){
        if(dog_s.toLowerCase().includes(dog_n[i].toLowerCase())){
            dog_names += (dog_n[i] + ", ");
        }
    }
    if(dog_names.length > 0){
        return `Matched: ${dog_names}`
    }
    else{
        return "No Matches"
    }
}

// Exercise #2

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i += 2){
        arr.splice(i, 1, "even index");
    }

    return arr
}

console.log(findWords(dog_string, dog_names));
console.log(replaceEvens(given_arr));