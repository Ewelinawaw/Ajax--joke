/**
 * Created by Ewelina on 12.07.2016.
 */

$(function(){

    // Utworzenie zmiennej url, która będzie zawierała pełny adres do dowcipu
    var url = 'http://api.icndb.com/jokes/random';

    //znajdujemy odpowiedni przycisk na stronie i podpinamy nasłuchiwanie na kliknięcie tak, aby każdorazowo pobierał się losowy żart.
    var button = document.getElementById('get-joke');
    button.addEventListener('click', function(){
        getJoke();
    });

    //Do zmiennej paragraph przypisujemy element DOM paragrafu, który odpowiada za wyświetlanie dowcipu.
    var paragraph = document.getElementById('joke');

    //implementacja funkcji
    function getJoke() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', function () {
            var response = JSON.parse(xhr.response);
            paragraph.innerText = response.value.joke;
        });
        xhr.send();

    //Do połączenia należy podpiąć nasłuchiwanie na odpowiedź z serwera - tak było w materiałach bootcampa
        var response = JSON.parse(xhr.response);
    }



});


//to samo tylko w ajax. Krok pierwszy - wywołanie metody ajax

$.ajax({
    url: "http://api.icndb.com/jokes/random",
    method: "GET",
    success: function() {
        // kod, który zostatanie wykonany przy prawidłowej odpowiedzi z serwera
    },
    error: function() {
        // kod, który zostatanie wykonany przy nieprawidłowej odpowiedzi z serwera
    }
});

//zmienną przechowującą adres url zostawiamy tak jak była w js

var url = 'http://api.icndb.com/jokes/random';

//Przycisk obsługujący kliknięcie zamieniamy na jQuery
var $button = $('#get-joke').click(function() {
    getJoke();
});

//To samo robimy z paragrafem
var $paragraph = $('#joke');


//Implementacja funkcji getJoke skorzystajaca z metody ajax:
function getJoke() {
    $.ajax({
        method: 'GET',
        url: url, //tutaj dziwna konstrukcja, ale po lewej stronie mamy nazwę parametru, a po prawej jest nazwa zmiennej przechowującej wartość
        success: function(res) {
            $paragraph.text(res.value.joke);
        }

    });
}



