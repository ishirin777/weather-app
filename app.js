(function () {
    let city = document.getElementById('cityID');
    document.getElementById('searchID').addEventListener('click', function () {

        if (city.value != "") {

            let apiKey = '4b32232c4597b66705febf215948e256';
            let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city.value}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {

                    let msg = `The current temperature in ${data.location.name} (${data.location.country}) is ${data.current.temperature}°.`;

                    if (document.getElementById('msg-content') === null) {

                        let div = document.createElement('div');
                        div.id = 'msg-content';
                        let h1 = document.createElement('h1');
                        h1.textContent = msg;
                        div.appendChild(h1);
                        document.body.appendChild(div);

                        setTimeout(function () {
                            document.getElementById('msg-content').remove();
                            city.value = "";
                        }, 3000);
                    }
                }
                )
                .catch(error => alert('This city does not exist') + console.log(error));
        }
        else {
            alert('Please enter any city');
        }
    }
    )
})();