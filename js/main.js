//Michael Eaton
//Project 2 js
//term1302

//Wait until DOM is loaded
window.addEventListener("DOMContentLoaded", function(){

//getElementById funtion to get the ids
    function $(x){
       var theElement = document.getElementById(x);
       return theElement;
    }
    
//Create select field element and populate with options
    function makeDrop(){
        var formtag = document.getElementsByTagName("form"),
            selectLi = $('dropDown'),
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
    
//Find the value of a selected radio button
   function getSelectedRadio(){
      var radio = document.forms[0].side;
      for(var i=0; i<radio.length; i++){
         if(radio[i].checked){
         sideValue = radio[i].value;
         }
      }
   }

//checkbox values
function getCheckValue(){
   if($('cheese').checked){
      cheeseValue = $('cheese').value
   }else{
      cheeseValue = "No"
   }
   
}
//toggles links for display page
function togCont(n){
   switch(n){
      case "on":
         $('burgerMaker').style.display = "none";
         $('clear').style.display = "inline";
         $('displayData').style.display = "none";
         $('addContent').style.display = "inline";
         break;
      case "off":
         $('burgerMaker').style.display = "block";
         $('clear').style.display = "inline";
         $('displayData').style.display = "inline";
         $('addContent').style.display = "none";
         $('item').style.display = "none";
         break;
      default:
         break;
      
   }
}
//saveData function
   function saveData(){
      var id = Math.floor(Math.random()*9999999)
//Gather all form field data in an object.
//Object properies will contain an array wit hte form labal and input value.
      getSelectedRadio();
      getCheckValue();
      var item = {};
         item.sName = ["Server's Name:", $('sName').value];
         item.tDate = ["Today's Date:", $('tDate').value];
         item.tNum = ["Table Number:", $('tNum').value];
         item.temps = ["Temperature:", $('temps').value];
         item.cheese = ["Cheese?:", cheeseValue];
         item.cond = ["Special Notes:", $('cond').value];
         item.side = ["Sides", sideValue];
//Save data into local storage. Use stringify to convert object to a string.
      localStorage.setItem(id, JSON.stringify(item));
      alert("Order is Placed");
}
//function to display data to browser
   function getData(){
      togCont("on");
      if(localStorage.length === 0){
         alert("There is no data found in the local storage.");
      }
      var makeDiv = document.createElement('Div');
      makeDiv.setAttribute("id", "item");
      var makeList = document.createElement('ul');
      makeDiv.appendChild(makeList);
      document.body.appendChild(makeDiv);
      $('item').style.display = "block";
      for(var i=0, j=localStorage.length; i<j; i++){
         var makeli = document.createElement('li');
         makeList.appendChild(makeli);
         var key = localStorage.key(i);
         var value = localStorage.getItem(key);
//convert string back to object
         var infoObj = JSON.parse(value);
         var makeSubList = document.createElement('ul');
         makeli.appendChild(makeSubList);
         for(var y in infoObj){
            var makeSubli = document.createElement('li');
            makeSubList.appendChild(makeSubli);
            var optSubText = infoObj[y] [0] +" "+ infoObj[y] [1];
            makeSubli.innerHTML = optSubText
         }
         
      }
    
   }
//function for clearing data
   function clearData(){
      localStorage.clear();
      alert("You have deleted the order.");
      window.location.reload();
}
//Array for my temperature drop down
    var meatTemp = ["--Choose A Temp--", "Rare", "Med-Rare", "Medium", "Med-Well", "Well"],
         sideValue,
         cheeseValue = "No";
    makeDrop();
    
//links and submit button

    var displayData = $('displayData');
    displayData.addEventListener("click", getData);
   var clear = $('clear');
    clear.addEventListener("click", clearData);
    var save = $('submit');
    save.addEventListener("click", saveData);
   
});