var axios = require("axios");

// Call url using axios
function start() {
    let params = process.argv.splice(2);
    // url param
    let url_param = params[0];

    // json
    let query_params = JSON.parse(params[1]);

    // foreach json
    query_params.forEach(params => {
        // Call axios
        axios.get(`${url_param}`, {
            params: params
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    });
}

start();
