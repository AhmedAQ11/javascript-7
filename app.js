function getValue(value){

    var input = document.getElementById ("input1")

    input.value += value

    // console.log(value)
}

function result(){

    var input = document.getElementById ("input1")

    var result = eval(input.value)

    console.log(result)

    input.value = result
}

function allClear(){
    var input = document.getElementById("input1")
    input.value = "";
}

function removeVal(){
    var input = document.getElementById("input1")

    // console.log(input.slice(0,-1))
    input.value = input.value.slice(0,-1)
}