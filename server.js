import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.set('strictQuery', true);

mongoose.connect(process.env.mongoConnectionUrl);

const app = express();

app.engine('handlebars' , engine());
app.set("view engine", 'handlebars');
app.set('view', './templets')


app.listen(process.env.PORT, () => {
    console.log(`started the application on http://localhost:${process.env.PORT}`);
});