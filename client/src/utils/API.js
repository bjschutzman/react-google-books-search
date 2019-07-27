const axios = require("axios");
const router = require("express").Router();

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
const APIKEY = "s&key=AIzaSyC4IyAkaaQkfj-M-lOHcmLqaE3hAThopzk"

export default {
    search: function(query){
        return axios.get(BASEURL + query + APIKEY)
    }
}


