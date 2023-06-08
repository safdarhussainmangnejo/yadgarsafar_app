import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51LZBzrFb3CLms12qOBzEKJernEC38uM2WKkyrecEQep0axo7G2ZljNqpPeiz2FPb9tUlnfjoWhDzvi67xh7SqBzG00mSBClK6G";

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}