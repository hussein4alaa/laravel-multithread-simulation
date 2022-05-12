import axios from 'axios';
import FormData from 'form-data';

let params = process.argv.splice(2);

// url param
let url_param = params[0];

// json
let query_params = JSON.parse(params[1]);

// json
let method = params[2];


// Call url using axios GET
function get_function() {
    query_params.forEach(params => {
        setTimeout(() => {
            axios.get(`${url_param}?multithread=true`, {
                params: params
            })
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error.response.data)
                })
        }, 1);
    });
}


// DELETE function
function delete_function() {
    query_params.forEach(params => {
        setTimeout(() => {
            axios.delete(`${url_param}?multithread=true`, {
                params: params
            })
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error.response.data)
                })
        }, 1);
    });
}



// POST function
function post_function() {
    query_params.forEach(params => {
        setTimeout(() => {
            var formData = new FormData();
            let keys = Object.keys(params);
            keys.forEach(key => {
                formData.append(`${key}`, params[`${key}`]);
            });
            axios.post(`${url_param}?multithread=true`, formData)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error.response.data)
                });

        }, 1);
    });
}




// PUT function
function put_function() {
    query_params.forEach(params => {
        setTimeout(() => {
            var formData = new FormData();
            let keys = Object.keys(params);
            keys.forEach(key => {
                formData.append(`${key}`, params[`${key}`]);
            });
            formData.append('_method', 'PUT');
            axios.post(`${url_param}?multithread=true`, formData)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error.response.data)
                });

        }, 1);
    });
}




if (method == 'GET') {
    get_function();
} else if (method == 'DELETE') {
    delete_function();
} else if (method == 'POST') {
    post_function();
} else if (method == 'PUT') {
    put_function();
}
