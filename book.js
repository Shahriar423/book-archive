const searchBook = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    //console.log(searchValue);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data.docs))
}
const displaySearch = (docs) => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    docs.forEach(doc => {
        //console.log(doc);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<div class="card h-100 p-3">
            <img width="50px" height="300px" src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h4>${doc.title}</h4>
                <h5 class="card-title">Author: ${doc.author_name}</h5>
                <p class="card-text">Publish Date & Year: ${doc.publish_date} <br>
                 First Publish Year:${doc.first_publish_year} </p>
            </div>
        </div>`;
        searchResult.appendChild(div);
    })
}
