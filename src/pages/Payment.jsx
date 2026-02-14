import { useState } from "react";
import { useLocation } from "react-router-dom";

function Payment() {

  const { state } = useLocation();
  const { event, seats, total } = state || {};

  const [form, setForm] = useState({
    name: "",
    card: "",
    expiry: "",
    cvv: "",
    upi: ""
  });

  const [paid, setPaid] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = () => {
    setPaid(true);
  };

  if (paid) {
    return (
      <div className="container">
        <h1>✅ Payment Successful</h1>
        <p>Event: {event.name}</p>
        <p>Seats: {seats.join(", ")}</p>
        <h2>Total Paid: ₹{total}</h2>
      </div>
    );
  }

  return (
    <div className="container">

      <h2>💳 Payment</h2>

      <h3>Total: ₹{total}</h3>

      <div className="payment-form">

        <input
          type="text"
          name="name"
          placeholder="Card Holder Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="card"
          placeholder="Card Number"
          maxLength="16"
          onChange={handleChange}
        />

        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          onChange={handleChange}
        />

        <input
          type="password"
          name="cvv"
          placeholder="CVV"
          maxLength="3"
          onChange={handleChange}
        />

        <h4>OR Pay via UPI</h4>

        <input
          type="text"
          name="upi"
          placeholder="example@upi"
          onChange={handleChange}
        />

        <button onClick={handlePayment}>
          Pay Now
        </button>

      </div>

    </div>
  );
}

export default Payment;
