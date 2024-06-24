function submitName()
{
    // Clearing HTML elements
    document.getElementById("warning").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    // Getting Vars
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    fullname = fname + " " + lname;
    zcode = parseInt(document.getElementById("zcode").value);

    //Validating Inputs
    if (fullname.length > 20)
    {
        document.getElementById("warning").innerHTML = "Your name is too long, get a new name dingus."
        return "";
    }
    if ((zcode.toString()).length != 5)
    {
        document.getElementById("warning").innerHTML = "That's not a real ZIP code, dingus."
        return "";
    }

    //Sending threatening secret message
    document.getElementById("result").innerHTML = "I know where you live, " + fullname;


}