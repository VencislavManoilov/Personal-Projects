let thing = prompt();

const xhr = new XMLHttpRequest();
xhr.open("PUT", "/getRes?thing=" + thing);
xhr.send();
xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        document.getElementById("res").innerHTML = JSON.parse(data).result;
    } else {
        console.log(`Error: ${xhr.status}`);
        console.log(JSON.parse(xhr.response).error.message);

        if(xhr.status == 500) {
            document.getElementById("res").innerHTML = "You need to put a valid api key";
        }
    }
};