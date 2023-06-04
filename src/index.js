import express from 'express';
import paymentRoutes from './routes/payment.routes.js';
import { PORT } from './config.js';
import morgan from 'morgan';
//se importa un path para ver donde esta la carpeta html
import path from 'path';

const app = express();

app.use(morgan('dev')); //morgan tiene configuraciones, adentro, que puede ser dev, ect.envia info por consola, te dice lo que mandaste, si la peticion get, put, post,etc
app.use(paymentRoutes);

app.use(express.static(path.resolve('src/public'))) //path.resolve() significa que se va a ubicar al inicio del proyecto

app.listen(3000);
console.log('Server on port', PORT);