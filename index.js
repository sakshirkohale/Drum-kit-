// the addeventlistener is an property which take 2 attribute first is type and second is function name and queryselector in js is used to select the elements from html


//document.querySelector("button").addEventListener("click",handelClick);

/*
function handelClick(){
    alert("you clicked the fbutton");
}*/

//we can also use anonymous function
var numOfDrumButton =document.querySelectorAll(".drum").length;

for(var i=0;i<numOfDrumButton;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
   var choice= this.innerHTML;
   
   switch(choice)
   {
   
   case "s":
   var  tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
   break
   
   case "a":
   var  tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
   break
   
   case "k":
   var  tom3= new Audio("sounds/tom-4.mp3");
        tom3.play();
   break
   
   case "d":
   var  tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
   break
   
   
   case "j":
   var  crash = new Audio("sounds/crash.mp3");
        crash.play();
   break
   
   
   case "p":
   var  bass = new Audio("sounds/kick-bass.mp3");
        bass.play();
   break
   
   case "l":
   var  snare = new Audio("sounds/snare.mp3");
        snare.play();
   break
  
   default:
   console.log(choice);
   }
    
});

}



