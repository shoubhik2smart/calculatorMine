const input = document.querySelector("#getInput");

const get = (elem) => {
    input.value += elem;

}
const del = () => {
    input.value = input.value.toString().slice(0,-1);
}
const clearAll = () => {
    input.value = "";
}

function equals(){
    try{
        input.value = eval(input.value);
    }
    catch(e){
        input.value = " Mathematical Error";
    }
    
}
