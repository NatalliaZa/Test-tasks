let hide = {
  opacity: 0.0 }

let content =  document.querySelector(".collapsible__content");
let btn = document.querySelector(".collapsible__button");

let showHide = content.animate([hide], 2000); 

showHide.pause();

let pushBtn = function() {
  showHide.play();
}

btn.addEventListener("click", pushBtn);

/* Если можно было бы использовать файл CSS, то я бы следала следующим образом: 
        .hidden {display: none;} 
    И далее в файле js:    
    document.querySelector(".collapsible__button").addEventListener('click', function(){
    document.querySelector("p").classList.toggle('hidden');
}) 

*/
