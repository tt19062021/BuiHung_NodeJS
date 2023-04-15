const express = require('express');
const app = express();

// routes dung lệnh npm run sever.
app.get('/api', (req, res) => {
    res.send('Tôi đang học node.js');
})
app.listen(3000,() => {
    console.log('Sever is running ...');
})
