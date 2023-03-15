let nameTag = prompt('Enter your Name, please');
let myName = document.querySelector("#myName");

myName.innerHTML = nameTag;
const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

window.addEventListener("load", ()=> {
   clock();

    function clock(){
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var gun = weekday[today.getDay()];
        document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s +" "+ gun;
        setTimeout(clock,1000);
    }    
})

