const rutes = require('./routes/route');
const metodo = require('./graphql/metodo');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());


app.use('/', rutes);
app.use('/graphql', metodo);
app.listen(3000, () => {
	console.log('server on port 3000');
});
