import '../Stripe.css';
import { useState} from "react";
import {useParams} from 'react-router-dom';
import StripeCheckout from "react-stripe-checkout";
import { FormControl, InputAdornment, InputLabel, OutlinedInput  } from "@mui/material";


function ProceedToPay(props) {

  const param = useParams();
  const [ amount, setAmount ] = useState(param.price);


  const handleToken = (token) => {
    fetch("/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount }),
    })
    .then(res => res.json())
    .then(_ => {
        console.log('transaction successful')
      window.alert("Transaction Successful.");
    }).catch(_ => {
        window.alert("Transaction Failed.")
        console.log('transaction failed')
    })
  }

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };
  
  return (
    <div className="App" 
    style={{
       display: 'flex', 
       justifyContent: 'center', 
       alignItems: 'center',
       width: '100%',
       height: "100vh",
       flexDirection: 'column',
       gap: 15,
       }}>
        <img src="https://www.kbpackaging.com/wp-content/uploads/2022/06/logo-stripe.png" alt="logo" style={{display: 'grid', justifyContent: 'center', width:'400px'}}/>
    <FormControl sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>

      <OutlinedInput
            id="outlined-adornment-amount"
            value={amount}
            onChange={handleAmountChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
        />    

    </FormControl>
    
    <StripeCheckout
          stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
          token={handleToken}
          name=""
          panelLabel={'Buy Package'}
          currency="USD"
          amount={amount*100}
          >
          {/* {alert('Thankyou for purchasing Tour Package \n Checkout Profile page for more updates...')} */}
         
      </StripeCheckout>
</div>
  );
}

export default ProceedToPay;