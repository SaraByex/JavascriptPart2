$(document).ready(function () {
    
    function displayJoke() {
        let jokeEndpoint = "https://official-joke-api.appspot.com/random_joke";

        fetch(jokeEndpoint)
            .then(response => {
                return response.json();
            })
            .then(data => {
                       
                $("#type").text(data.$type);
                $("#setup").text(data.setup);
                $("#punchline").text(data.punchline);
                $("#id").text(data.id);
                        })
            .catch(error => {
                $("#jokeCard").html(`${error.message}`);
            });
    }
    $("#getJoke").on("click", function () {
        displayJoke();
    });
});

