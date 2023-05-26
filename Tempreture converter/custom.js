const Convertfahrenheit= () =>{
    var celsius=parseFloat(document.querySelector("#celsius").value);
    var fahrenheitresult=(1.8*celsius)+32;
    var a=fahrenheitresult.toFixed(2);

    document.querySelector("#celsius").value=celsius;
    document.querySelector("#fahrenheit").value=a;
}

const Convertcelsius= () =>{
    var fahrenheit=parseFloat(document.querySelector("#fahrenheit").value);
    var celsiusresult=(fahrenheit-32)/1.8;
    var b=celsiusresult.toFixed(2);

    document.querySelector("#celsius").value=b;
    document.querySelector("#fahrenheit").value=fahrenheit;
}
const reset=()=>{
    document.querySelector("#celsius").value=" ";
    document.querySelector("#fahrenheit").value=" ";
}