
//function to switch between Login and Signup
var a = document.getElementById("login");
var b = document.getElementById("signup");
var c = document.getElementById("toggle");
function login(){
    a.style.left = "40px";
    b.style.left = "400px";
    c.style.left = "0px";
}
function signup(){
    a.style.left = "-400px";
    b.style.left = "40px";
    c.style.left = "110px";
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    if(themeName === 'theme-dark'){  
        //unicode for fontAwesome SUN '\uf185'         
        document.getElementById("switch-theme-button").innerHTML = "<img src=\"sun.svg\" alt=\"light mode\" width=\"20px\" height=\"20px\"></img>" ;
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Its Dark Theme time"));
    }else{
        //unicode for fontAwesome MOON '\uf186' 
        document.getElementById("switch-theme-button").innerHTML = "<img src=\"moonstars.svg\" alt=\"light mode\" width=\"20px\" height=\"20px\"></img>" ;
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Its Light Theme time"));
    }
}
// function to toggle between light and dark theme
function toggleTheme() {
if (localStorage.getItem('theme') === 'theme-dark'){
    setTheme('theme-light');
} else {
    setTheme('theme-dark');
}}

// Immediately invoked function to set the theme on initial load
(function () {
if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
} else {
    setTheme('theme-light');
}})();

