//if its someones birthday say happy birthday, name

// 1. ask for comesones birthday using input method
//  convet input to format i want
// get todays date using the inbuit function
// compute number of days between today and next birthday
// if diff = 0 - its birthday else, memtion theremaining days ** what if this year it already passed?

// function to get data








  // sample quotes to be randomly changed
    const quotes = [
      { quote: "The best way to predict the future is to invent it.", author: "Alan Kay 1987" },
      { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll, 1915" },
      { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt, 1873" },
      { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill, 1950" },
      { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt, 1745" },
      { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu, 1901" }
    ];

    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }

    function displayRandomQuote() {
      const quoteObj = getRandomQuote();
      document.getElementById("quote").textContent = `"${quoteObj.quote}"`;
      document.getElementById("author").textContent = quoteObj.author;
    }

    // Calculate Days Until Birthday
    function getDaysUntilBirthday(birthDateStr) {
      const today = new Date();
      const birthDate = new Date(birthDateStr);

      // Set birthDate to this year's birthday
      birthDate.setFullYear(today.getFullYear());

      // If birthday has passed this year, use next year
      if (birthDate < today) {
        birthDate.setFullYear(today.getFullYear() + 1);
      }

      const diffInMs = birthDate - today;
      const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
      return diffInDays;
    }

    // On page load
    document.addEventListener("DOMContentLoaded", function () {
      displayRandomQuote();

      // New quote button
      document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

      // Form submission
      document.getElementById("signUpForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const birthDateStr = document.getElementById("birthDate").value;
        const firstName = document.getElementById("firstName").value;
        const daysLeft = getDaysUntilBirthday(birthDateStr);

        let message = "";

        if (daysLeft === 0) {
          message = `Happy Birthday, ${firstName}!`;
          displayRandomQuote();
        } else {
          message = `Hello ${firstName}, your birthday is in ${daysLeft} day(s)!`;
        }

        const messageDiv = document.getElementById("successMessage");
        messageDiv.classList.remove("d-none");
        messageDiv.textContent = message;
      });

      // Optional submit button click (if needed)
      document.querySelector(".btn-submit").addEventListener("click", function (event) {
        event.preventDefault();
        // no need to manually grab href unless linking
      });
    });

    
