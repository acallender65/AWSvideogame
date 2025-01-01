var mc = document.getElementById("mc");
var vill = document.getElementById("vill");
var follower = document.getElementById("follower");

function mcjump() {
  if (mc.classList != "animate") {
    mc.classList.add("animate");
  }
  setTimeout(function () {
    mc.classList.remove("animate");
  }, 500);
  
  console.log("jump");
}

function fjump() {
    if (follower.classList != "animate2") {
        follower.classList.add("animate2");
    }
    setTimeout(function () {
      follower.classList.remove("animate2");
    }, 500);
    console.log("jump2");
  }

var checkDead = setInterval(function () {
  var mcTop = parseInt(window.getComputedStyle(mc).getPropertyValue("top"));
  var villLeft = parseInt(window.getComputedStyle(vill).getPropertyValue("left"));
  if (villLeft < 550 && villLeft > 500 && mcTop >= 520) {
    vill.style.animation = "none";
    vill.style.animation = "display";
    alert("Game Over");
  }
}, 10);


var keyb = {
    left: false,
    right: false,
    up: false,
    keyListener: function(event){
        var keystate = (event.type == "keydown") ? true : false;

        switch(event.keyCode){
            case 37:
                keyb.left= keystate;
                break;
            case 38:
                keyb.up= keystate;
                break;
            case 39:
                keyb.right= keystate;
                break;
        }
    }
};

loop = function(){
    if(keyb.up){
        mcjump();
        fjump();
    }
    if(keyb.right){
        var left = parseInt(window.getComputedStyle(mc).getPropertyValue("left"));
        if(left < 500){
            mc.style.left = left + 3 + "px";
        }
    }
    if(keyb.left){
        var left = parseInt(window.getComputedStyle(mc).getPropertyValue("left"));
        if(left > 0){
            mc.style.left = left - 3 + "px";
        }
    }
    window.requestAnimationFrame(loop);
}


window.addEventListener("keydown", keyb.keyListener);
window.addEventListener("keyup",  keyb.keyListener);
