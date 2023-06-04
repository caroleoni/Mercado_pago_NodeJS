import { Router } from "express";
import { createOrder, receiveWebhook } from "../controllers/payment.controller.js";


const router = Router();

//Ruta get: un usuario va a pagar, generale la cuenta, crea una orden de pago
router.post('/create-order', createOrder);
router.get('/failure', (req, res) => res.send('failure'));
router.get('/pending', (req, res) => res.send('pending'));
//es cuando el ususario le sa aceptar al pago
router.get('/success', (req, res) => res.send('success'));
//es cuando se envia la confirmacion del pago
router.post('/webhook', receiveWebhook);

export default router