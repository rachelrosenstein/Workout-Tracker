const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(morgan("tiny"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use(require("./Develop/routes/apiRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});