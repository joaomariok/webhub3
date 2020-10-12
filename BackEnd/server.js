const app = require("./app");
const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Server is running (see http://localhost:${port})`);
    console.log("REQUEST\t\tROUTE");
});