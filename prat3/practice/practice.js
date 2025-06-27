$(document).ready(function(){
let question = $(".question");

let response = $(".answer");


$(question).on("click", function(){
    // $(this.add<span>${response}</span>)    
    $(this).next(response).slideToggle()
    })
   
});
