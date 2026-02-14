function PricingPanel({
  basePrice,
  selectedSeats,
  eventDate,
  setTotal
}) {

  
  const getSeatPrice = (seat) => {
    if (seat <= 10) return basePrice * 2; // VIP
    return basePrice;
  };

  const subtotal = selectedSeats.reduce(
    (sum, seat) => sum + getSeatPrice(seat),
    0
  );

 
  let demandMultiplier = 1;

  if (
    selectedSeats.length >= 3 &&
    selectedSeats.length <= 5
  ) {
    demandMultiplier = 1.1;
  }
  else if (selectedSeats.length >= 6) {
    demandMultiplier = 1.25;
  }

  
  const today = new Date();
  const eventDay = new Date(eventDate);

  const daysLeft =
    (eventDay - today) /
    (1000 * 60 * 60 * 24);

  let timeMultiplier = 1;

  if (daysLeft < 10) {
    timeMultiplier = 1.3;
  }
  else if (daysLeft < 30) {
    timeMultiplier = 1.15;
  }

 
  const total = Math.round(
    subtotal *
    demandMultiplier *
    timeMultiplier
  );

  setTotal(total);

  return (
    <div className="pricing">

      <h3>Seats: {selectedSeats.length}</h3>
      <h3>Subtotal: ₹{subtotal}</h3>

      <p>Demand Surge: x{demandMultiplier}</p>
      <p>Time Surge: x{timeMultiplier}</p>

      <h2>Total: ₹{total}</h2>

    </div>
  );
}

export default PricingPanel;
