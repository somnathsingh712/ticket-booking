import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={event.image} alt={event.name} />
      <h3>{event.name}</h3>
      <p>📍 {event.venue}</p>
      <p>💰 ₹{event.price}</p>

      <button onClick={() => navigate(`/booking/${event.id}`)}>
        Book Now
      </button>
    </div>
  );
}

export default EventCard;
