import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const {id, grandTotal, numberOfPeople} = useParams();
  
  console.log("grandTotal: ", grandTotal, "numberOfPeople: ", numberOfPeople);
  const packageId= id;
  const stripe = useStripe();
  const elements = useElements();
  const [agency, setAgency] = useState({});
  const [tourist, setTourist] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const dollar= 220;
  const totalAmountUSD = grandTotal/dollar;
  const totalAmountCents = totalAmountUSD*100;
  console.log("totalAmountCents: ", totalAmountCents, "totalAmountUSD: ", totalAmountUSD)
  const loadAgencyData = async () => {
    let response = await axios.get("https://yadgarsafar-backend.netlify.app/getUsers");
    setAgency(response.data);
  };

  const loadTouristData = async () => {
    let user = await axios.get("https://yadgarsafar-backend.netlify.app/getData");
    setTourist(user.data);
  };

  useEffect(() => {
    loadAgencyData();
    loadTouristData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        console.log("paymentMethod: ", paymentMethod);
        setIsLoading(true);
        const response = await axios.post("https://yadgarsafar-backend.netlify.app/payment", {
          amount: 999,
          id,
        });
        console.log("Response frpm API: ", response);
        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);

          agency.length > 0 &&
            agency.map((prof) =>
              prof.packages.slice(0, prof.length).map(async (pckg) => {
                if (packageId === pckg._id) {
                  const formdata = {
                    companyName: prof.companyName,
                    companyEmail: prof.email,
                    id: tourist._id,
                    packageName: pckg.packageName,
                    packageCity: pckg.packageCity,
                    packageDuration: pckg.packageDuration,
                    packageProvince: pckg.packageProvince,
                    image: pckg.image,
                    price: pckg.price,
                    tourCategory: pckg.tourCategory,
                    paymentStatus: "Paid",
                    amountPaid: grandTotal,
                    numberofPeople: numberOfPeople

                  };

                  await axios.post(`https://yadgarsafar-backend.netlify.app/addpackage`, formdata)
                    .then(
                      (res) =>
                        res && setIsLoading(false)
                        
                    )
                    .catch((err) => {
                      setIsLoading(false)
                      console.log("Error : ", err)
                    });
                }
              })
            );
        }
      } catch (error) {
        setIsLoading(false)
        console.log("Error", error);
      }
    } else {
      setIsLoading(false)
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form
          onSubmit={handleSubmit}
          style={{ width: "500px", margin: "auto", marginTop: "100px" }}
        >
          
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          
          <button className="btn btn-primary btn-block mb-4" disabled={isLoading}>
          
          {isLoading && <><span className="spinner-border spinner-border-sm" ></span>&nbsp; &nbsp;<span>Transaction in Process</span></>}
          {!isLoading && <span >Pay</span>}
          </button>

        </form>
      ) : (
        
      <div className="card" style={{ width: "800px", margin: "auto", marginTop: "100px" }}>
        <h5 className="card-header">Payment Successful</h5>
        <div className="card-body">
          <h5 className="card-title">You have succesfully paid your trip fees. Thanks</h5>
          <p className="card-text">Enjoy Your Trip</p>
          <button
                          type="button"
                          className="btn btn-primary"
                          onClick={ e =>{navigate(`/`)}}
          >
                          Go to Homepage
          </button>
          <button
                          type="button"
                          className="btn btn-primary float-right"
                          onClick={ e =>{navigate(`/profile`)}}
          >
                          Go to Profile
          </button>
          
        </div>
      </div>
      )}
    </>
  );
}
