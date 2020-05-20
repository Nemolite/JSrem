console.log(111)

var element = document.getElementById('test');
console.log(element)

/*exam 2 */


/* Этот код находит в документе объект с 
id = test определяет кто его родитель
и выводит его к консоль*/
var x = document.getElementById("test");
var temx = x.parentNode.nodeName;
console.log(temx)  /*output=>BODY */

/*Еще один такой же пример 
Тут мы находим 2 элемент с тегом p 
выводим его на экран и
определяем родителя

*/

var y = document.getElementsByTagName("p")[1];
console.log(y) 
var temy = y.parentNode.nodeName;
console.log(temy) /*output=>BODY */

/*другой пример */

var h = document.getElementById("inner-h1");
console.log(h) 
var temh1 = h.parentNode.nodeName;
console.log(temh1) /*output=>DIV */

// var currentElem = document.getElementById("next-inner");
// currentElem.parentNode.style.display = "none";

var p22 = document.getElementById("p22");
p22.innerHTML = 'oahdf;a' 


function getParent() {
      console.log("This is a function")
    }

var p23 = document.getElementById("p23");
console.log(p23) 
p23.textContent = "yyyyyyyyyyyyyyy"
console.log(p23) 


var sp1 = document.createElement("div");




var sp2 = document.getElementById("p23");

//Получаем ссылку на родителя sp2
var parentDiv = sp2.parentNode;

// Вставляем sp1 перед sp2
parentDiv.insertBefore(sp1, sp2);

var sp12 = document.getElementsByTagName("div")[0];
console.log(sp12) 

sp12.setAttribute("class", "p45");

/*события*/


window.onload  =function(){
	console.log(222)
}

/* <button id="mybutton">Щелкни
на мне</button>*/

var b = document.getElementById("mybutton");
b.onclick = function() { alert("Спасибо,что щелкнули на мне!"); };
b.addEventListener("click", function() { alert("Еще раз спасибо!");
}, false);