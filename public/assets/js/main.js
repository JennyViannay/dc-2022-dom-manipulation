localStorage.clear();

localStorage.setItem('data', JSON.stringify(data));

displayData(data);

document.getElementById("language-filter").addEventListener("change", (e) => {
    const language = e.target.value;
    if (language === "all") {
        localStorage.setItem('data', JSON.stringify(data));

        console.log(JSON.parse(localStorage.getItem('data')));

        displayData(data);
    } else {
        const filteredData = data.filter(item => item.language === language);
        localStorage.setItem('data', JSON.stringify(filteredData));

        console.log(JSON.parse(localStorage.getItem('data')));

        displayData(filteredData);
    }
});

document.getElementById("id-item-filter").addEventListener("click", (e) => {
    const filteredData = JSON.parse(localStorage.getItem('data'));
    localStorage.setItem('data', JSON.stringify(filteredData.reverse()));

    console.log(filteredData.reverse());
    console.log(JSON.parse(localStorage.getItem('data')));

    displayData(filteredData.reverse());
});