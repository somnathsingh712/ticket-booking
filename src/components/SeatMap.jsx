function SeatMap({ selectedSeats, setSelectedSeats }) {

  
  const bookedSeats = [2, 5, 9, 14, 18, 22, 27, 30, 33];

  
  const rows = ["A", "B", "C", "D", "E"];
  const seatsPerRow = 8;

  const toggleSeat = (seatNumber) => {

    if (bookedSeats.includes(seatNumber)) return;

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(
        selectedSeats.filter(s => s !== seatNumber)
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seatNumber
      ]);
    }
  };

  return (
    <div>

      <h3>Select Your Seats</h3>

     
      <div className="screen">
        SCREEN THIS WAY
      </div>

      
      <div className="theatre">

        {rows.map((row, rowIndex) => (

          <div key={row} className="row">

            
            <span className="row-label">
              {row}
            </span>

            
            {Array.from(
              { length: seatsPerRow },
              (_, seatIndex) => {

                const seatNumber =
                  rowIndex * seatsPerRow +
                  seatIndex + 1;

                let className = "seat";


if (seatNumber <= 10) {
  className += " vip";
}


if (bookedSeats.includes(seatNumber)) {
  className += " booked";
}


else if (selectedSeats.includes(seatNumber)) {
  className += " selected";
}


                return (
                  <button
                    key={seatNumber}
                    onClick={() =>
                      toggleSeat(seatNumber)
                    }
                    className={className}
                  >
                    {seatNumber}
                  </button>
                );
              }
            )}

          </div>

        ))}

      </div>

      {/* Legend */}
      <div className="legend">
  <span>🟡 VIP</span>
  <span>⚪ Regular</span>
  <span>🟢 Selected</span>
  <span>🔴 Booked</span>
</div>

    </div>
  );
}

export default SeatMap;
