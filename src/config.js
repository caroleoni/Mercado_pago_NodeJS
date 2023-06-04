import { config } from "dotenv";
config(); //estas dos lineas lo que hacen es leer el archivo .env y carga en este caso en process.env.MERCADOPAGO_API_KEY

export const PORT = 3000
export const HOST = `http://localhost:${PORT}`

export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_API_KEY;