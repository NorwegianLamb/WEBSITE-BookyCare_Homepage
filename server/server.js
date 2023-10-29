const express = require('express');
const app = express();

app.get("/api", (req,res) => {
    res.json({"doctors": [{name: '(1)',
                            specialization: '//',
                            experience: '3'},

                            {name: '(2)',
                            specialization: '//',
                            experience: '15'},
                            
                            {name: '(3)',
                            specialization: '//',
                            experience: '40'},

                            {name: '(4)',
                            specialization: '//',
                            experience: '12'}]})
})

app.listen(5000, () => {console.log("Server started on port 5000")})