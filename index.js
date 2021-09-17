const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Running')
})


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));