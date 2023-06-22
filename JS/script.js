const convert = () =>{
    let celcius = document.getElementById('InputField').value;
    let fahrenheit = (celcius * 1.8) + 32;
    console.log (fahrenheit);
    document.getElementById('OutputField').value = fahrenheit;
}