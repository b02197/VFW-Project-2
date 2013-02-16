//Michael Eaton
//Project 2 js
//term1302

//Wait until DOM is loaded
window.addEventListener("DOMContentLoaded", function(){

//getElementById funtion to get the ids
    function $(x){
       var theElement = document.getElementById(x);
       return theElement;
    };
    
//Create select field element and populate with options
    function drop(){
        var formtag = document.getElementsByTagName("form"),
            selectLi = $('select'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "temps");
        for(var i=0, j=meatTemp.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = meatTemp[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }

    function saveData(){
        localStorage.setItem("test", "hello");
        alert(localStorage.length)
    }
    
//Array for my temperature drop down
    var meatTemp = ["--Choose A Temp--", "Rare", "Med-Rare", "Medium", "Med-Well", "Well"];
    drop();
    
//links and submit button

   /* var displayData = $('displayData');
    displayData.addEventListener("click", getData);
    var clear = $('clear');
    clear.addEventListener("click", clearData);*/
    var save = $('submit');
    save.addEventListener("click", saveData);
   
    
    
    
    
    
    
    


});