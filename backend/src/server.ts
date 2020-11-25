import app from './app';


import database from './database';

database.sync();
console.log("DATABASE ON");

app.listen(3000);