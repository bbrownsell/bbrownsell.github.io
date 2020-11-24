const input = document.getElementById('input');
const searchBtn = document.getElementById('searchBtn');
const results = document.querySelector('.movie-results');



// Function to bring in data from API 
function getMovie(e) {
    const apiKey = 'a1b799b';
    const url = `HTTPS://www.omdbapi.com/?apikey=${apiKey}&s=${input.value}`;

    e.preventDefault();

    if (e.target == searchBtn) {
        input.value = "";
    }

    fetch(url)
    .then(function(resp) {
            return resp.json();  
    })
    .then(function(data) {
            displayMovie(data);
    })
    .catch(function(error) {
        if (error) {
            results.classList.add('hidden');
        }
    })
}


function displayMovie(d) {
    let searchResults = d.Search;    

    // If the search cannot be found, or the user hasn't entered a value
    // then alert will be shown....
    if (searchResults == undefined || searchResults == '') {
        alert('Title not recognised, please try again');
    }

    // Empty the results container before each search so previous search
    // results do not show up still.
    results.innerHTML = '';

    searchResults.forEach(function(movie) {
        // create container for each movie
        let movieDiv = document.createElement('div');
        movieDiv.className = "movie";
        // set title for each div
        let title = document.createElement('h2');
        title.className = "movie-title";
        title.innerText = movie.Title;
        // set year for each div
        let year = document.createElement('p');
        year.className = "movie-year";
        year.innerText = movie.Year;
        // set movie type for each div
        let type = document.createElement('p');
        type.className = "movie-type";
        type.innerText = movie.Type;
        // set image for each div
        let poster = document.createElement('img');
        poster.src = movie.Poster;
        // create link for each Movie
        let id = movie.imdbID;
        let imdb = `https://www.imdb.com/title/${id}/`;
        let link = document.createElement('a');
        link.href = imdb;
        link.setAttribute('target', '_blank');

        //append our created elements to the parent container.
        link.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.append(link);
        movieDiv.appendChild(type);
        movieDiv.appendChild(year);
        results.appendChild(movieDiv);

        // remove results container if it has no children
        if (results.childNodes.length > 0) {
            results.classList.remove('hidden');
        }
    });
}

searchBtn.addEventListener('click', getMovie);

// Things to do -

// look at modal options if we want to use one.
// possibly bring in some movie info from imdb if we want to.