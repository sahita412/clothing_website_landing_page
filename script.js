document.addEventListener('DOMContentLoaded', function() {
    fetch('http://127.0.0.1:3000/recommendations/')
        .then(response => response.json())
        .then(data => {
            const recommendedContainer = document.getElementById('recommendedProducts');
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'col-md-4 recommended-product';
                div.innerHTML = `<h5>${item.name}</h5><p>$${item.price}</p>`;
                recommendedContainer.appendChild(div);
            });
        });
});

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();

    if (query.length > 3) {
        fetch(`http://127.0.0.1:3000/search?query=${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        return response.json();
        })
        .then(data => {
            const resultsContainer = document.getElementById('searchResults');
            resultsContainer.innerHTML = ''; 

            if (data.length === 0) {
                resultsContainer.innerHTML = '<p>No results found</p>';
            } else {
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'search-result-item';
                    div.innerText = `${item.name} - $${item.price}`;
                    resultsContainer.appendChild(div);
                });
            }
        })
        .catch(error => console.error('Error:', error));
    }
    else{
        document.getElementById('searchResults').innerHTML = '';
    }
});
