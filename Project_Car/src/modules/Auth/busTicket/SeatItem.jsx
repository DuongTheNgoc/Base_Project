import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { selectSeat } from "../redux/slice/busTicketSlice";

export default function SeatItem({ seat, isSelected }) {
  const dispatch = useDispatch();

  const handleSelect = () => {
    // dispatch({
    //   type: "busTicket/selectSeat",
    //   payload: { ...seat, isSelected: !isSelected },
    // });

    dispatch(selectSeat({ ...seat, isSelected: !isSelected }));
  };

  return (
    <button
      key={seat.name}
      className={cn("btn m-2", {
        "btn-danger": seat.isBooked, // red
        "btn-success": isSelected,   // green
        "btn-secondary": !seat.isBooked && !isSelected, // gray
      })}
      disabled={seat.isBooked}
      onClick={handleSelect}
    >
      {seat.name}
    </button>
  );
}
