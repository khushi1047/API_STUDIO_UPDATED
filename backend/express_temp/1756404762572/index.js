// Write your code here...
import express from 'express';
const app = express();
app.get('/hello', (req, res) => res.send({ message: 'Hello World!' }));
app.listen(3000, () => console.log('Server running'));
