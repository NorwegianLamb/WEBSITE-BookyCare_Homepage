const express = require('express')
const app = express()

app.get("/api", (req, res) =>{
    res.json({"doct1": ["userOne", "userTwo", "userThree", "userFour"],
                "doct2": ["", "", ""],
            })
})

app.listen(5001, () => {console.log("Server started on port 5001")})