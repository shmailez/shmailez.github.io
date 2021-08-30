function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

//second function

   function digitalClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
       //* добавление ведущих нулей */
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;
        document.getElementById("id_clock").innerHTML = hours + ":" + minutes;
        setTimeout("digitalClock()", 1000);
   };

   //*кнопки*/
   
    button_first.onclick = function() {
        var val = document.getElementById('input_first').value;
        document.getElementById('line_first').innerHTML=val;
        //чистит
        document.getElementById('input_first').value = '';
    };

    button_second.onclick = function() {
        var val = document.getElementById('input_second').value;
        document.getElementById('line_second').innerHTML=val;
        document.getElementById('input_second').value = '';
    };

    button_three.onclick = function() {
        var val = document.getElementById('input_three').value;
        document.getElementById('line_three').innerHTML=val;
        document.getElementById('input_three').value = '';
    };