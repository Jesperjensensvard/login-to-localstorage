var namevalue = document.getElementById("accountName");
var pw = document.getElementById("pw");

//sparar data i local storage // saves data to local storage 
function store(){
    localStorage.setItem('namevalue',namevalue.value);
    localStorage.setItem('pw',pw.value);
}

// kollar om datan fungerar som matats in // checks if data is valid 
function check() {
    // tar fram data som är stored i local storage // gets localy stored data 
     var stordeName = localStorage.getItem('namevalue');
     var stordePassword = localStorage.getItem('pw');
     

     var userName = document.getElementById('userName').value;
     var userPassword = document.getElementById('userPw').value;

    if( userName == stordeName && userPassword == stordePassword ) {
       alert('sucsess')
       // öppnar ny html // open new html file if sucess 
        window.open('index2.html');
    }
    else{
        alert("error.");
    }
};








    