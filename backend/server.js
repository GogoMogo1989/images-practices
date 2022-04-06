const express = require("express");  //ezek a csomagok amike kelleni fognak
const path = require("path")

const app = express(); //változóba mentjünk az express függvényt
const port = 9000



const pathFrontend = path.join(`${__dirname}/../frontend`)

app.use(express.json()) //EZ mindig kell a post metódushoz!!!!!!!!!!!
app.use('/public', express.static(`${pathFrontend}/public`));



app.get("/image-list", (request, response, next) => { 
    response.sendFile(`${pathFrontend}/data.json`); 
})

app.get("/", (request, response, next) => { 
    response.sendFile(`${pathFrontend}/index.html`); 
})

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
})