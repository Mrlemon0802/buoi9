const indexContainer = document.querySelector(".container");

constsearchInput = document.querySelector("#searchInput")

let usersList = null;

fetch('https://671e105c1dfc429919812c3e.mockapi.io/api/DATA/Users', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then((users) => {
    // Do something with the list of tasks
    usersList = users;



    renderFuntion(users);

}).catch(error => {
    // handle error
})



function searchfuntion() {
    const searchValue = searchInput.value.toLowerCase()
    console.log(searchValue);
    const usersFilter = usersList.filter(function(user) {
        return user.name.toLowerCase().includes(searchValue)
    })
    renderFuntion(usersFilter)
}


function renderFuntion(users) {
    indexContainer.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        const nameElement = document.createElement("div"); // <div><p>title</p></div>  
        nameElement.innerHTML = `  
          <p>${users[i].name}</p>  
          <img src="${users[i].image}"/>
        `;
        indexContainer.appendChild(nameElement);
    };
}