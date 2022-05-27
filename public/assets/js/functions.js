const displayData = (data) => {
    const output = document.getElementById("content");
    output.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("div");
        row.classList.add("row");
        const id = document.createElement("p");
        const name = document.createElement("p");
        const language = document.createElement("p");
        const level = document.createElement("p");
        const deleteAction = document.createElement("button");
        id.innerHTML = "id :" + item.id;
        name.innerHTML = "name :" + item.name;
        language.innerHTML = "language :" + item.language;
        level.innerHTML = "level :" + item.level.name;
        deleteAction.innerHTML = "delete";
        deleteAction.addEventListener("click", () => deleteItem(item.id));
        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(language);
        row.appendChild(level);
        row.appendChild(deleteAction);
        output.appendChild(row);
    });
} 

const deleteItem = (id) => {
    const data = JSON.parse(localStorage.getItem('data'));
    const filteredData = data.filter(item => item.id !== id);
    localStorage.setItem('data', JSON.stringify(filteredData));
    displayData(filteredData);
}