var axios = require("axios");

function start() {
    let params = process.argv.splice(2);
    let url_param = params[0];
    var b = JSON.parse(JSON.stringify(params[1]));  //solves the problem
    console.log(b)

    // query_params.forEach(params => {
    //     axios.get(`${url_param}`, {
    //         params: params
    //     })
    //         .then(response => {
    //             console.log(response.data)
    //         })
    //         .catch(error => {
    //             console.log(error.response.data)
    //         })
    // });

}

start();
