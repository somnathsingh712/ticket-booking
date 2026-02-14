import { useNavigate } from "react-router-dom";

function BookingSummary({ event, selectedSeats, total }) {

  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/payment", {
      state: {
        event,
        seats: selectedSeats,
        total
      }
    });
  };

  return (
    <div className="summary">

      <h2>🧾 Booking Summary</h2>

      <p><b>Event:</b> {event.name}</p>
      <p><b>Venue:</b> {event.venue}</p>
      <p><b>Seats:</b> {selectedSeats.join(", ")}</p>

      <h3>Total: ₹{total}</h3>

      <button
        disabled={selectedSeats.length === 0}
        onClick={handlePayment}
      >
        Proceed to Payment
      </button>

    </div>
  );
}

export default BookingSummary;
