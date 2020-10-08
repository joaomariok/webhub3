const express = require("express");
const Router = express.Router;

const routes = Router()

const defaultData = require("./default.json");

function simpleResString(res) {
	const str = res.req.method + " " + res.req.url + " " + res.statusCode;
	return str;
}

routes.get("/", (req, res) => {
    console.log(simpleResString(res));
    res.json(defaultData);
});

module.exports = routes;