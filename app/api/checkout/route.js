import Stripe from "stripe";
import '../../../envConfig.js'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
const stripe = new Stripe(API_KEY)

export async function POST(request) {
    try {
        const { lineItems } = await request.json()

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: lineItems,
            success_url: baseURL + '/success',
            cancel_url: baseURL + '/'
        })

        return Response.json(session)
    }
    catch (err) {
        console.error("Error creating cart checkout: ", err.message)
        return Response.json({ error: "Failed to create Stripe checkout page" })
    }
}