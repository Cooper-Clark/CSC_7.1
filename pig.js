function resetPig()
{
    // We're playing pig boys
    console.log("piggy");

    //delcare variables
    var usertotal = 0;
    var dieresult = 0;

    var bozo1total = 0;
    var bozo2result = 0;
    var gameresult = "undecided";

    // decide who is going first
}

function rollDie()
{
    // roll boy
    return Math.floor(Math.random()*6)+1;
    console.log("Rolling Die");
}

function bozoTurn()
{
    // this runs the game for the AI players
}

function rollPig()
{
    console.log("Rolling in Pig");
    var result = rollDie();
    if (result != 1)
    {
    document.getElementById("dieresult").innerHTML = result;
    var temptotal = document.getElementById("usertotal").innerHTML;
    temptotal = temptotal + result;
    document.getElementById("usertotal").innerHTML = temptotal;
    }
    else
    {
    document.getElementById("gameresult").innerHTML = "You lost!";
    }
    // This represents the player rolling
}

function endPig()
{
    // This represents the player rolling
}

function craps()
{
    // declaring vars
    var d1 = Math.floor(Math.random()*6)+1;
    var d2 = Math.floor(Math.random()*6)+1;
    var sum = d2 + d1;
    var crapsgameresult = "undecided";

    //loss condition
    if (sum == 7 || sum == 11)
        {
            crapsgameresult = "You lost!";
        }
    //win condition
    else if (d1 == d2 && d1%2 == 0)
        {
            crapsgameresult = "You win!"
        }
    //idk what pushing means but this is the push condition
    else
        {
            crapsgameresult = "You pushed!"
        }

    // update html vars
    document.getElementById("d1").innerHTML = d1;
    document.getElementById("d2").innerHTML = d2;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("crapsgameresult").innerHTML = crapsgameresult;

}