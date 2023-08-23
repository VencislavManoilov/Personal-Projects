const xhr = new XMLHttpRequest();

function getWeather() {
    xhr.open("GET", "/getWeather");
    xhr.send();
    xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            document.getElementById("content").innerHTML = data;
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}