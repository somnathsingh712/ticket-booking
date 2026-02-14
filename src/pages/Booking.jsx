import { useParams } from "react-router-dom";
import events from "../data/events";
import { useState } from "react";
import SeatMap from "../components/SeatMap";
import PricingPanel from "../components/PricingPanel";
import CountdownTimer from "../components/CountdownTimer";
import BookingSummary from "../components/BookingSummary";

function Booking() {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div className="container">
      <h2>{event.name}</h2>

      <CountdownTimer eventDate={event.date} />

      <SeatMap
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
      />

      <PricingPanel
  basePrice={event.price}
  selectedSeats={selectedSeats}
  eventDate={event.date}
  setTotal={setTotal}
/>


      <BookingSummary
        event={event}
        selectedSeats={selectedSeats}
        total={total}
      />
    </div>
  );
}

export default Booking;
