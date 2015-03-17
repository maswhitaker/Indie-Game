
$("#turtle").click(function(){
    var rando = (Math.random() * 1000000);
    setTimeout(function(){
      $("#turtle").css("transform","rotate(" + rando + "deg)")
    }, 1000);
    setTimeout(function(){
      alert("you scored " + rando +" amount of points! Keep going I know you can beat that.");
    }, 11000);
});
