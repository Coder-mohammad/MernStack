const express = require('express');
const app = express();
const router = require('./scr/routes/ser.route.js');

const port = 2333;

app.use(express.json());
app.use('/pokemon',router);

app.listen(port,()=> {
    console.log(`Server is running at http://localhost:${port}`);
})
