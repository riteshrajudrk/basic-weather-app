const express = require('express');  
const bodyParser = require('body-parser'); 
// Initialize the app
const app = express(); 
app.set('view engine','ejs');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render("home");
})

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});