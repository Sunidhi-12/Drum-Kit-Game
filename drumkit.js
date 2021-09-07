
for(let i=0;i<7;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function()
{

// function handleClick()
// {
//    var audio=new Audio("sounds/tom-"+(i+1)+".mp3");
//    audio.play();
// }
var buttonInnerHtml=this.innerHTML;
makeSound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);
});
}

document.addEventListener("keydown",function (event){
   makeSound(event.key);
   buttonAnimation(event.key);
});

function makeSound(key){
   switch (key) {
      case "a": var tom1= new Audio("tom-1.mp3");
                tom1.play();
                break;
       case "s": var tom2= new Audio("tom-2.mp3");
                tom2.play();
                break;
      case "d": var tom3= new Audio("tom-3.mp3");
                tom3.play();
                break;   
      case "f": var tom4= new Audio("tom-4.mp3");
                tom4.play();
                break;
      case "j": var tom5= new Audio("tom-5.mp3");
                tom5.play();
                break;
      case "k": var tom6= new Audio("tom-6.mp3");
                tom6.play();
                break;
      case "l": var tom7= new Audio("tom-7.mp3");
                tom7.play();
                break;
      default:  console.log(buttonInnerHtml);
         break;
   }
}

function buttonAnimation(currentKey){
   var keyPressed = document.querySelector("."+currentKey);
   keyPressed.classList.add("pressed");
   setTimeout(function(){
      keyPressed.classList.remove("pressed");
   },100);
}