import React, { use } from "react";
import TicketCard from "../TicketCard/TicketCard";

const CustomerTickets = ({ ticketsPromise, handleTasks }) => {
  const tickets = use(ticketsPromise);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {tickets.map((ticket) => (
        <TicketCard handleTasks={handleTasks} key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default CustomerTickets;
