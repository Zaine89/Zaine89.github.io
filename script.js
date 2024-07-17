document.addEventListener("DOMContentLoaded", () => {
    // Fetch weather data
    fetch('https://goweather.herokuapp.com/weather/Manchester')
        .then(response => response.json())
        .then(data => {
            document.getElementById('description').textContent = data.description;
            document.getElementById('temperature').textContent = 'Temperature: ' + data.temperature;
            document.getElementById('wind').textContent = 'Wind: ' + data.wind;
        })
        .catch(error => {
            document.getElementById('description').textContent = 'Error loading weather data';
        });

    // Fetch cat fact
    fetch('https://meowfacts.herokuapp.com/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fact').textContent = data.data[0];
        })
        .catch(error => {
            document.getElementById('fact').textContent = 'Error loading cat fact';
        });

    // Fetch cat GIF
    fetch('https://cataas.com/cat/gif')
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            document.getElementById('gif').src = url;
        })
        .catch(error => {
            document.getElementById('gif').alt = 'Error loading cat GIF';
        });

    // Fetch programming joke
    fetch('https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('jokeText').textContent = data;
        })
        .catch(error => {
            document.getElementById('jokeText').textContent = 'Error loading joke';
        });

    // Fetch bank holidays and display the next one
    fetch('https://www.gov.uk/bank-holidays.json')
        .then(response => response.json())
        .then(data => {
            const holidays = data['england-and-wales'].events;
            const today = new Date();
            const nextHoliday = holidays.find(holiday => new Date(holiday.date) > today);
            if (nextHoliday) {
                document.getElementById('nextHoliday').textContent = `${nextHoliday.title}: ${new Date(nextHoliday.date).toDateString()}`;
            } else {
                document.getElementById('nextHoliday').textContent = 'No upcoming bank holidays found';
            }
        })
        .catch(error => {
            document.getElementById('nextHoliday').textContent = 'Error loading bank holidays';
        });

    // Fetch and display current time
    function updateTime() {
        const now = new Date();
        document.getElementById('currentTime').textContent = now.toLocaleTimeString();
    }
    updateTime();
    setInterval(updateTime, 1000);

    // Fetch random quote
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const quote = data[randomIndex];
            document.getElementById('quoteText').textContent = quote.text;
            document.getElementById('quoteAuthor').textContent = quote.author ? `— ${quote.author}` : '— Unknown';
        })
        .catch(error => {
            document.getElementById('quoteText').textContent = 'Error loading quote';
        });

fetch('https://us-central1-eng-mechanism-429611-c6.cloudfunctions.net/my-function')
            .then(response => response.json())
            .then(data => {
                const name = data.name; // Access the name property
		const colour = data.colour; //Acess the colour property
                document.getElementById('gcp_api_name').textContent = name;
		document.getElementById('gcp_api_colour').textContent = colour;
            })
            .catch(error => {
                document.getElementById('gcp_api_name').textContent = 'Error loading name';		
		document.getElementById('gcp_api_colour').textContent = 'Error loading colour';
                console.error('Error:', error);
            });

});
