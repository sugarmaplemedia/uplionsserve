const express = require("express"),
      redirect = require("express-redirect")

const app = express()
redirect(app)

app.use("/", express.static('public/uplionsserve'))
app.use("/disclaimer", express.static('public/uplionsserve/disclaimer'))

app.use("/childhoodcancer", express.static('public/childhoodcancer'))

app.use("/defenseagainstdiabetes", express.static('public/defenseagainstdiabetes'))
app.redirect("/dad/:id", "/defenseagainstdiabetes/:id");


app.get('*', (req, res) => res.status(404).send('what???'))

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})