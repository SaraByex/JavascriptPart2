//HTTP Request - how client communicate
// to send commmunication

// types of http requests
// 1. GET - retrieved/fetch data
// 2. POST - send data
// 3. PUT/PATCH - update existing data 
// 4. DELETE - removes data

// //XMLHTTPRequest (XHR) its a javascript object used to 
// // // interact with the server by making http requests we use it in AJAX
// // $(document).ready(function(){


// // function getInformation () {
// //     const xhr = new XMLHttpRequest(); //create a new instance//
// // const url = "https://ipinfo.io/json"; //create a variable to store the url//

// // xhr.responseType = "json"; //indicate the response type we want to get javascript object notation//

// // xhr.onload = () => {              //whatever we want our data to do//
// //     console.log(xhr.response)
// // }
// // //write a letter/instructions to send the request//
// // //open takes the method and url
// // xhr.open("GET", url);

// // // send //
// // xhr.send();
// // } 

// // $("#xmlData").on("click", () => {
// //                 console.log("Button clicked");
// //                 getInformation();
// //             });
// // });


// // // Fetch - built-in JS function
// // // - make https request over the API/Server
// // // - returns a Promise

// // //syntax
// // //option(optional) - http method, object, header
// //fetch(URL, options)
// // because it returns a promise we can use the .then or async & await
url = "https://ipinfoio/json" 
fetch(url)
.then((response)=>{
    console.log(response)
    if(response.ok){
        return response.json();
    }
     networkError => console.log(networkError.message))
// }, networkError => console.log(networkError.message))
.then((jsonResponse) =>{
    console.log("this is json response", jsonResponse)
})
.catch((error)=>{
    console.log("fetch has failed", error.message)
})

async function getIPDataAsync (){
    try {
        //get response
        const response = await fetch ("https://ipinfoio/json");
        const jsonResponse = await response.json();
        console.log(jsonResponse)
    }catch(e){
        console.log(e.message)
//     }
// }
// getIPDataAsync ();

// //REST API
// // API - Application Programming Interface - communication channel between two applications

// //create a table that has a username, company name, phone number, geo(lat), city
// //populate the table with info from the res api https://https://jsonplaceholder.typicode.com/users
// //REST - REpresentational State Transfer - set of rules/guidelines - define method, protocols, how data should be sent, received, stored.
// // majorly communicate over HTTP protocol
// //why? - it is simple//REST API are typically exposed as endpointrs(url that direct your request)
// //e.g https://jsonplaceholder.typicode.com/users


// //display the setup, the puchline, from here http:www.official-joke-api.appspot.com and id in a card
// // const endpoints = "https://jsonplaceholder.typicode.com/users"
// // const request = fetch(endpoints); // returns a promise
// // console.log(request)

//POST - send new data - https://httpbin.org/post

let postData = async () => {
    try {
        const response = await fetch("https://httpbin.org/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname: "Femi",
                favColor: "blue"
            })
        });

        if (response.ok) {
            console.log("Your response has been posted");
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        } else {
            console.error("Failed to post data. Status:", response.status);
        }
    } catch (e) {
        console.error("Error:", e);
    }
};

postData();
//  // put/patch
//  fetch(" https://jsonplaceholder.typicode.com/posts/1",{
//     method: "PUT",
//     headers: {"content-type": "application/json"

//     },
//     body: JSON.stringify({
//         id: 1,
//         title: "Updated title from MCA WIT Class 2025 spring cohort",
//         body: "Updated body from MCA WIT Class 2025 spring cohort",
//         userId: 1
//     })
//  })
//  .then((response)=> {
//     if (!response.ok) {
//         throw new Error("fail to post new data")
// //     }
// //     return response.json();
// //  })
// //  .then ((data)=>{
// //     console.log("Your information has been posted", data)
// //  })
// //  .catch((error)=>{
// //     console.log(error)
// //  })

//  // delete - removing resources

//   fetch(" https://jsonplaceholder.typicode.com/posts/1",{
//     method: "DELETE",
//     headers: {
//         Authorization: "Bearer token"

//     },
    
//     })
 
//  .then((response)=> {
//     if (response.ok) {
//         console.log ("data has been deleted")
//     }
//      })
//  .catch((e)=>{
//     console.log(e)
//  })

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // parse JSON
  .then((data) => {
    console.log(data); // logs the single post object
    // If you really want to loop over keys and values
    Object.entries(data).forEach(([key, value], index) => {
      console.log(`${key}: ${value}`);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));




Femi 4:07 PM
//create a table that has username, company name, phone number, geo(lat), city
// populate the table with info from the rest api https://jsonplaceholder.typicode.com/users
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
    data.forEach((item, index) => {
        console.log(item)
    });
})
