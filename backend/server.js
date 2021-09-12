const express = require('express');
const cors = require('cors');
const app = express();
const db=require("./db/db")
   


const loginModel=require('./routers/routes/login')
const usersModel=require('./routers/routes/registration')


//routers

app.use(express.json());
app.use(cors());
app.use(loginModel)
app.use(usersModel)






const PORT =5000;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

