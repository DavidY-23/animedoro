var minutes = 40;
var seconds = "00";

var click = new Audio("start.mp3");
var bell = new Audio("end.mp3");

function template()
{
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start()
{
    //Initial button
    if (document.getElementById("startButton").value == "start")
    {
        //39, 59
        minutes = 39;
        seconds = 59;
    
        console.log("im playing!!");
        var minutes_interval = setInterval(minutesTimer, 60000);
        var seconds_interval = setInterval(secondsTimer, 1000);

        document.getElementById("startButton").value = "pause";
        click.play();
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        function minutesTimer()
        {
            minutes = minutes - 1;
            document.getElementById("minutes").innerHTML = minutes;
        }
    
        function secondsTimer()
        {
            seconds = seconds - 1;
            document.getElementById("seconds").innerHTML = seconds;
            if (seconds <= 00)
            {
                if (minutes <= 00)
                {
                    console.log("why does it pause here lol");
                    document.getElementById("startButton").value = "animebreak";
                    clearInterval(minutes_interval);                
                    clearInterval(seconds_interval);
                    document.getElementById("done").innerHTML = "watch your anime you weeb";
                    document.getElementById("done").classList.add("show_message");
                    bell.play();
                    minutes = 24;
                    seconds = 00;
                    document.getElementById("minutes").innerHTML = minutes;
                    document.getElementById("seconds").innerHTML = seconds;
                }
                seconds = 60;
            }
        }

    }
    //To make it pause, does not work! :D
    else if (document.getElementById("startButton").value == "pause")
    {

        console.log("im in.");
        document.getElementById("startButton").value = "start";
        clearInterval(minutes_interval);                
        clearInterval(seconds_interval);
    }
    //For anime break.
    else if (document.getElementById("startButton").value == "animebreak")
    {
        //23, 59
        minutes = 23;
        seconds = 59;

        console.log("breaky");
        var minutes_interval = setInterval(minutesTimer, 60000);
        var seconds_interval = setInterval(secondsTimer, 1000);
        click.play();
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        function minutesTimer()
        {
            minutes = minutes - 1;
            document.getElementById("minutes").innerHTML = minutes;
        }
    
        function secondsTimer()
        {
            seconds = seconds - 1;
            document.getElementById("seconds").innerHTML = seconds;
            if (seconds <= 00)
            {
                if (minutes <= 00)
                {
                    console.log("why does it pause here lol");
                    document.getElementById("startButton").value = "start";
                    clearInterval(minutes_interval);                
                    clearInterval(seconds_interval);
                    document.getElementById("done").innerHTML = "back to work!";
                    document.getElementById("done").classList.add("show_message");
                    bell.play();
                    minutes = 40;
                    seconds = 00;
                    document.getElementById("minutes").innerHTML = minutes;
                    document.getElementById("seconds").innerHTML = seconds;
                }
                //seconds = 60;
            }
        }
    }

        
    
}

//Reserts doroing
function reset()
{
    minutes = 40;
    seconds = "00";
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}