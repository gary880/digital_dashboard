const speed = document.getElementById("speed");
function speedFunction(){
  let currentspeed =  parseFloat(speed.textContent);
  let accelerate = Math.floor(Math.random()*6);
  if(currentspeed<=100){
    speed.textContent = currentspeed + accelerate;
  }else{
    speed.textContent = currentspeed - accelerate;
  }
}
setInterval(speedFunction,200);

