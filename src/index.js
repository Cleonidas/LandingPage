
document.addEventListener("DOMContentLoaded", () => {

    const pluginsTriggerElement = document.getElementById('plugins-trigger');
    const pluginsElement = document.getElementById('plugins');

    const pluginsVisibleClass = "splash-overview-plugins__list--visible";

    pluginsTriggerElement.onclick = () => {
        pluginsElement.classList.toggle(pluginsVisibleClass);
    }
});





let $win = $(window);

$win.on('scroll',function(){
   let $rotatingImg=$('.rotatingImgs');
   let top = $win.scrollTop()/5;
   $rotatingImg.css('transform', 'rotate(' + top + 'deg)');

});


let squares = document.querySelectorAll(".RGBgame-square");
let guessRGBindex = randomDigitBetween(0, squares.length);
let resetButton=document.querySelector("#reset");

resetButton.addEventListener("click",()=>{
   guessRGBindex = randomDigitBetween(0, squares.length);
   for (let index = 0; index < squares.length; index++){
   squares[index].style.backgroundColor=randomRGBToString();}

   guessColor=squares[guessRGBindex].style.backgroundColor;
   
   document.getElementById("guessRGB").innerHTML = guessColor;

})
function randomRGBToString() {
  return RandomDigitsInString = "RGB( " + randomDigitBetween(0, 255) + ", " + randomDigitBetween(0, 255) + ", " + randomDigitBetween(0, 255) + ")";
}
function randomDigitBetween(min, max) {
  return ~~(Math.random() * (max - min));

}

for (let index = 0; index < squares.length; index++) {
  squares[index].style.backgroundColor=randomRGBToString();
  squares[index].addEventListener("click",function() {
    if(index===guessRGBindex){
     
      for (let index = 0; index < squares.length; index++){
      squares[index].style.backgroundColor=guessColor;}
      // document.getElementById("nan").style.backgroundColor=guessColor;
    }else{this.style.backgroundColor="#232323"}
  })
}

let guessColor=squares[guessRGBindex].style.backgroundColor;

document.getElementById("guessRGB").innerHTML = guessColor;
