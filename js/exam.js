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

var currentElem = document.getElementById("next-inner");
currentElem.parentNode.style.display = "none";