document.addEventListener("DOMContentLoaded", () => {
    const apiUrls = {
        posts: "https://jsonplaceholder.typicode.com/posts",
        albums: "https://jsonplaceholder.typicode.com/albums",
        photos: "https://jsonplaceholder.typicode.com/photos"
    };
    
    const listContainer = document.getElementById("data-list");
    const buttons = document.querySelectorAll("button");
    
    function fetchData(type) {
        listContainer.innerHTML = "Loading...";
        fetch(apiUrls[type])
            .then(response => response.json())
            .then(data => {
                listContainer.innerHTML = "";
               
                data.slice(0, 10).forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item.title;
                    listContainer.appendChild(li);
                });
            })
            .catch(error => {
                listContainer.innerHTML = "Error loading data";
                console.error("Error fetching data:", error);
            });
        
        buttons.forEach(btn => btn.classList.remove("active"));
        document.getElementById(type).classList.add("active");
    }
    buttons.forEach(button => {
        button.addEventListener("click", () => fetchData(button.id));
    });
    fetchData("posts");
});


 
