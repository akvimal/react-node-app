const express = require('express');

const app = express();

app.use('/api/auth', require('./auth/auth_routes'));
app.use('/api/questions', require('./questions/question_routes'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Up and Listening on port ${port} ...`);
});