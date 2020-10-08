const express = require("express");
const Router = express.Router;
const defaultData = require("./default.json");

const lowdb = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = lowdb(adapter);
db.defaults({links: defaultData}).write();

const routes = Router()

function simpleResString(res) {
	const str = res.req.method + "\t\t" + res.req.url;// + " " + res.statusCode;
	return str;
}



/*
 * GET all links in the database
 */
routes.get("/", (req, res) => {
    console.log(simpleResString(res));
    res.json(db
        .get("links")
        .value()
        );
});


/*
 * DELETE all links in the database
 */
routes.delete("/", (req, res) => {
    console.log(simpleResString(res));

    db.get("links")
        .remove()
        .write()

    res.status(200).json();
});


/*
 * DELETE all links in the database, and reset it to default values
 */
routes.delete("/reset", (req, res) => {
    console.log(simpleResString(res));

    db.get("links")
        .remove()
        .write()

    for (var index in defaultData) {
        db.get("links")
            .push(defaultData[index])
            .write();
    }

    res.status(200).json();
});


/*
 * GET all links on a list in the database
 */
routes.get("/lists/:list", (req, res) => {
    console.log(simpleResString(res));

    const allLists = db
        .get("links")
        .map("list")
        .value()
    
    if (!allLists.includes(req.params.list)) {
        return res.status(204).json();
    }

    res.json(db.get("links")
            .filter({ list: req.params.list })
            .value())
});


/*
 * DELETE all links on a list in the database
 */
routes.delete("/lists/:list", (req, res) => {
    console.log(simpleResString(res));
    const listToDelete = req.params.list;

    const allLists = db
        .get("links")
        .map("list")
        .value()
    
    if (!allLists.includes(listToDelete)) {
        return res.status(204).json();
    }

    const linksToDelete = db
            .get("links")
            .filter({ list: listToDelete })
            .value()

    db.get("links")
        .remove({ list: listToDelete })
        .write();

    res.json(linksToDelete)
});


/*
 * GET all lists in the database
 */
routes.get("/lists", (req, res) => {
    console.log(simpleResString(res));

    const allLists = db
        .get("links")
        .map("list")
        .value()

    var lists = [];
    for (let index in allLists) {
        if (!lists.includes(allLists[index])) {
            lists.push(allLists[index]);
        }
    }
    
    res.json(lists);
});


/*
 * POST a link to the database
 */
routes.post("/link", (req, res) => {
    console.log(simpleResString(res));

    const receivedLink = req.body;
    const usedIds = db
        .get("links")
        .sortBy("id")
        .map("id")
        .value();

    const numberOfIds = db
        .get("links")
        .map("id")
        .size()
        .value();
    
    var currentId = 1;
    for (var index in usedIds) {
        if (usedIds[index] > parseInt(index) + 1) {
            currentId = parseInt(index) + 1;
            break;
        }
        else if (parseInt(index) === numberOfIds - 1) {
            currentId = numberOfIds + 1;
        }
    }

    const objToAdd = {
        id: currentId,
        list: receivedLink.list,
        name: receivedLink.name,
        link: receivedLink.link,
        icon: receivedLink.icon
    }

    // Add to db
    db.get("links")
        .push(objToAdd)
        .write()

    res.json(objToAdd);
});


/*
 * DELETE a link with a certain ID in the database
 */
routes.delete("/link/:id", (req, res) => {
    console.log(simpleResString(res));

    const idToDelete = req.params.id;
    const linkToDelete = db
        .get("links")
        .find({ id: parseInt(idToDelete) })
        .value();

    if (!linkToDelete) return res.status(204).json();
    
    db.get("links")
        .remove({ id: parseInt(idToDelete) })
        .write();

    res.json(linkToDelete);
});


/*
 * GET a link with a certain ID in the database
 */
routes.get("/link/:id", (req, res) => {
    console.log(simpleResString(res));

    const idToGet = req.params.id;

    const linkToGet = db
        .get("links")
        .find({ id: parseInt(idToGet) })
        .value();
    
    if (!linkToGet) return res.status(204).json();

    res.json(linkToGet);
})


/*
 * PUT (modify) a link with a certain ID in the database
 */
routes.put("/link/:id", (req, res) => {
    console.log(simpleResString(res));

    const idToMod = req.params.id;
    const receivedLink = req.body;

    const linkToMod = db
        .get("links")
        .find({ id: parseInt(idToMod) })
        .value();
    
    if (!linkToMod) return res.status(204).json();

    const objToMod = {
        id: parseInt(idToMod),
        list: receivedLink.list,
        name: receivedLink.name,
        link: receivedLink.link,
        icon: receivedLink.icon
    }

    db.get('links')
        .find({ id: parseInt(idToMod) })
        .assign(objToMod)
        .write()

    res.json(objToMod);
});



module.exports = routes;