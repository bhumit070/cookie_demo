const app = require("express")()

app.post("/", (req, res) => {

    const cookie = req.headers.cookie;
    if (cookie)
        res.sendFile(`${__dirname}/cookie.png`)
    else {
        res.sendStatus(403);
        res.end();
    }
})
app.post("/login", (req, res) => {
    const { cookie_type } = req.query
    const cookie = `user=bhoomit; samesite=${cookie_type}; secure`

    res.setHeader("set-cookie", [cookie])
    res.send("ok")
})


app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/img", (req, res) => {
    const cookie = req.headers.cookie;
    if (cookie)
        res.sendFile(`${__dirname}/cookie.png`)
    else {
        res.sendStatus(403);
        res.end();
    }
})

app.listen(8080, () => console.log("listening on port 8080"))
