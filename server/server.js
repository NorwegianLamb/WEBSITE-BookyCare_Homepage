const express = require('express');
const app = express();

app.get("/api", (req,res) => {
    res.json({"doctors": [{name: 'Dr. Flavio Gjoni(1)',
                            specialization: '//',
                            experience: '3 years'},

                            {name: 'Dr. Flavio Gjoni(2)',
                            specialization: '//',
                            experience: '15 years'},
                            
                            {name: 'Dr. Flavio Gjoni(3)',
                            specialization: '//',
                            experience: '40 years'},

                            {name: 'Dr. Flavio Gjoni(4)',
                            specialization: '//',
                            experience: '12 years'}]})
})

app.listen(5000, () => {console.log("Server started on port 5000")})