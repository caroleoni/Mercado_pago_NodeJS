import mercadopago from "mercadopago";
import { HOST, MERCADOPAGO_API_KEY } from "../config.js";

//Ruta get: un usuario va a pagar, generale la cuenta, crea una orden de pago

export const createOrder = async (req, res) => {
   //Con esto conectamos con Mercado Pago     
   mercadopago.configure({
    access_token: MERCADOPAGO_API_KEY
   })

   //Creamos una order de compra
   const result = await mercadopago.preferences.create({
    items: [{
        title: "Laptop Lenovo",
        unit_price: 20000,
        currency_id: "$",
        quantity: 1
    }],
    back_urls: {
        success: `${HOST}/success`,                 
        failure: `${HOST}/failure`,       
        pending: `${HOST}/pending`
    },
    notification_url: "https://9ce7-200-126-231-165.sa.ngrok.io/webhook" //esta es la notificacion para enviar cuando se realiza el pago
   })
   console.log(result)

   res.send(result.body);

};

//escucha los eneventos que vienen de mercdo pago con webhook, una transaccion
export const receiveWebhook = async (req, res) => {
    const payment = req.query;

   try {
    if(payment.type === 'payment') {
        const data = await mercadopago.payment.findById(req.query['data.id']);
        console.log(data);
        //se puede aca guardar en base de datos
    }
    
    res.sendStatus(204)
    
   } catch (error) {
    console.log(error)
    return res.sendStatus(500).json({error: error.message})
    
   }
};
