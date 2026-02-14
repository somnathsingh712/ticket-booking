import { useState } from "react";
import events from "../data/events";
import EventCard from "../components/EventCard";

function Home() {

  const [search, setSearch] = useState("");

  const filteredEvents = events.filter(event =>
    event.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>🎟️ Event Booking</h1>

      
      <input
        type="text"
        placeholder="Search events..."
        className="search-bar"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      
      <div className="event-grid-scroll">

        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))
        ) : (
          <p>No events found</p>
        )}

      </div>

    </div>
  );
}

export default Home;
