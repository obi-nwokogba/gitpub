const express = require(`express`);
const app = express();
const port = 3000;

app.use(express.static(`public`))

// ==============================
// SEED DATA
// ==============================
const food = require(`./models/food`);
const drinks = require(`./models/drinks`);

// ==============================
// DRINKS HOME ROUTE
// ==============================
app.get(`/drinks`, (req, res) => {
    res.render(`drinks_index.ejs`, {
        drinks,
        food
    })
})

// ==============================
// ROUTE FOR A SPECIFIC FOOD ID
// ==============================
app.get(`/food/:id`, (req, res) => {
    res.render(`food_show.ejs`, {
        food: food[req.params.id]
    })
})

// ==============================
// Individual drinks
// ==============================
app.get(`/drinks/:id`, (req, res) => {
    res.render(`drinks_show.ejs`, {
        drinks: drinks[req.params.id]
    });
})

// Start server
app.listen(3000, () => {
    console.log(`Server listening on Port: ${port}`);
})