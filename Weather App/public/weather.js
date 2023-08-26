const xhr = new XMLHttpRequest();

function getWeather(lat, lng) {
    xhr.open("GET", "/getWeather?lat=" + lat + "&lng=" + lng);
    xhr.send();
    xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            place(JSON.parse(data).location);
            temp(JSON.parse(data).current);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}

function place(data) {
    let country = document.getElementById("country");
    let city = document.getElementById("city");
    let region = document.getElementById("region");

    country.innerHTML = data.country;
    city.innerHTML = data.name;
    region.innerHTML = data.region;
}

function temp(data) {
    let temp = document.getElementById("temp");

    temp.innerHTML = data.temp_c + '<spam class="ok">°</spam>';

    if(data.is_day == 0) {
        document.getElementById("html").style.background = "linear-gradient(148deg, rgba(50,40,204,1) 0%, rgba(0,7,79,1) 100%) no-repeat fixed center";
    } else {
        document.getElementById("html").style.background = "linear-gradient(135deg, rgb(34, 161, 235) 0%, rgba(0, 87, 145, 0.904) 100%) no-repeat fixed center";
    }
}