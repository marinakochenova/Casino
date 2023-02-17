let dateNow = document.querySelector('#month');

var today = new Date();
 
var options = {  year: 'numeric', month: 'long', };
 
var now = today.toLocaleString('en-US', options);

dateNow.innerHTML= now;

lazyload();