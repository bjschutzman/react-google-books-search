const axios = require("axios");
const router = require("express").Router();



router.get("/books", (res,res) => {
    axios
        .get("https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyC4IyAkaaQkfj-M-lOHcmLqaE3hAThopzk", {params: req.query})
        .then(({data: {results} }) => res.json(results))
        .catch(err => res.status(422).json(err));

}):


// key=API_KEY AIzaSyC4IyAkaaQkfj-M-lOHcmLqaE3hAThopzk