$(document).ready(function() {
    $('button').click('submit', function() {
        // your code here (build up your url)
        var loc = $('form').find('input[name="location"]').val();

        $.get('http://api.openweathermap.org/data/2.5/weather?q='+loc+'&APPID=f807c5ca4818d9e403ea91a1856a709f', function(res) {
            // your code here
            var html_str = "";
            var temp = Math.trunc(res.main.temp-273);
            html_str += "<h1>" + res.name + "</h1>";
            html_str += "<h2>" + temp + " &#8451;</h2>";
            $('div#input').html(html_str);
            console.log (res);
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
