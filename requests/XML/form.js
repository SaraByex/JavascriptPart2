
//create a table that has username, company name, phone number, geo(lat), city
// populate the table with info from the rest api https://jsonplaceholder.typicode.com/users

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
//     data.forEach((item, index) => {
//         console.log(item)
//     });
document.getElementById("loadData").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const tableBody = document.querySelector("#userTable tbody");
      //tableBody.innerHTML = ""; 
      users.forEach((data) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${data.username}</td>
          <td>${data.company.name}</td>
          <td>${data.phone}</td>
          <td>${data.address.geo.lat}</td>
          <td>${data.address.city}</td>
        `;

        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error loading users:", error);
    });
});