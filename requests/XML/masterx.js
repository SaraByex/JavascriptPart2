function getInformation(){
let url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
.then((response)=>{
  console.log("data has been received");
    return response.json()
})

.then((data)=>{
    console.log(data)
})

.catch((error)=>{
    console.log("data wasn't succefully received", error)
});
}
getInformation();

let tableb = document.querySelector("#tableb");
          data.forEach((user) => {
            let row = document.createElement("tr");

            row.innerHTML = `
              <td>${user.username}</td>
              <td>${user.company.name}</td>
              <td>${user.phone}</td>
              <td>${user.address.geo.lat}</td>
              <td>${user.address.city}</td>
            `;
            tableb.appendChild(row);
          });
        })