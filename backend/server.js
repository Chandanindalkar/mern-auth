import express from 'express';
const port = 5000
const app = express();

app.get('/', (req, res) => res.send('Server is Ready!'))

app.listen(port, () => console.log(`Server up and running on port ${port}`))