//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/ext-portfolio-website'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/xt-portfolio-website/'}),
);

// Start the app by listening on the default Heroku port
let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}!`));
