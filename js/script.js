
function clickRock() {
    $(".player-content > .selection").removeClass("scissors paper rock");
    $(".player-content > .selection").addClass("rock");
}
function clickScissors() {
    $(".player-content > .selection").removeClass("scissors paper rock");
    $(".player-content > .selection").addClass("scissors");
}
function clickPaper() {
    $(".player-content > .selection").removeClass("scissors paper rock");
    $(".player-content > .selection").addClass("paper");
}

$(".rock-btn").click(function(){
    clickRock();
});
$(".scissors-btn").click(function(){
    clickScissors();
});
$(".paper-btn").click(function(){
    clickPaper();
});
$(".gogogo").click(function(){
    clickEnter();
});
$(".restart").click(function(){
    clickEsc();
});

function clickEsc(){
    location.reload();
};


function displayPopUp(){
    $(".game-end").addClass("showing");
}

function clickEnter(){
    if ($(".game-end").hasClass("showing")){
        return;
    }
    else {
    $(".gogogo").hide();
    results();
    setTimeout(displayPopUp, 1000);
    }
}

function results (){
    var randomGame = Math.floor(Math.random() * Math.floor(3));
    if(randomGame ==0){
        $(".opponent > .selection").removeClass("scissors paper rock");
        $(".opponent > .selection").addClass("paper");
        var result 
        if ($(".player-content > .selection").hasClass("paper")){
            result = "tie";
            $(".popup-content h2").html("tie");
        }
        else if ($(".player-content > .selection").hasClass("rock")){
            result = "lose";
            $(".popup-content h2").html("lose");
        }
        else {
            result = "win";
            $(".popup-content h2").html("win");
        };
        return console.log(result);

    }
    else if (randomGame ==1){
        $(".opponent > .selection").removeClass("scissors paper rock");
        $(".opponent > .selection").addClass("scissors");
        var result 
        if ($(".player-content > .selection").hasClass("paper")){
            result = "lose";
            $(".popup-content h2").html("lose");
        }
        else if ($(".player-content > .selection").hasClass("rock")){
            result = "win";
            $(".popup-content h2").html("win");
        }
        else {
            result = "tie";
            $(".popup-content h2").html("tie");
        };
        return console.log(result);
    }
    else {
        $(".opponent > .selection").removeClass("scissors paper rock");
        $(".opponent > .selection").addClass("rock");
        var result 
        if ($(".player-content > .selection").hasClass("paper")){
            result = "win";
            $(".popup-content h2").html("win");
        }
        else if ($(".player-content > .selection").hasClass("rock")){
            result = "tie";
            $(".popup-content h2").html("tie");
        }
        else {
            result = "lose";
            $(".popup-content h2").html("lose");
        };
        return console.log(result);
    }
}

$(document).keydown(function(event){
    switch(event.keyCode){
        case 82:
        clickRock();
        break;
        case 80:
        clickPaper();
        break;
        case 83:
        clickScissors();
        break;
        case 13:
        clickEnter();
        break;
        case 27:
        clickEsc();
        break;
    }
})



