function getNumber(num){
    var result=document.getElementById("result");
    console.log(num);
    result.value+=num;
}

function getClear(){
    var result=document.getElementById("result");
    result.value=" ";
}
function ev(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
}