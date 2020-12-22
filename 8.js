const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//8a
app.get('/hello', (req, res) => {
    res.send('hello, world');
});

//8b
app.get('/form', (req, res) => {
    return res.send(`
        <div>
            <form method="POST" action="/formdata">
                <input placeholder="name" name="nameInput"/>
                <input placeholder="surname" name="surnameInput"/>
                <input placeholder="email" name="emailInput"/>
                <button>Submit</button>
            </form>
        </div>
    `);
});

//8c
app.post('/formdata', (req, res) => {
    const {nameInput, surnameInput, emailInput} = req.body;
    res.send(`
        <div>
            <p><b>Name:</b> ${nameInput}</p>            
            <p><b>Surname:</b> ${surnameInput}</p>
            <p><b>Email:</b> ${emailInput}</p>   
        </div>
    `);
});

//8d
app.get('/jsondata', async (req, res) => {
    const data = JSON.parse(await fs.promises.readFile('data.json'));
    const {name, surname, phoneNumb} = data;
    res.send(`
        <div>
            <p><b>Name:</b> ${name}</p>            
            <p><b>Surname:</b> ${surname}</p>
            <p><b>Phone number:</b> ${phoneNumb}</p>   
        </div>
    `);

});

app.listen(3000, () => {
    console.log('working');
});