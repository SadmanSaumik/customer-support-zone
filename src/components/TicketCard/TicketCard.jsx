import React from "react";
import StatusBadge from "../StatusBadge/StatusBadge";

const TicketCard = ({ ticket, handleTasks }) => {
  return (
    <div onClick={() => handleTasks(ticket)}>
      <div className="card w-full bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="card-title">${ticket.title}</h2>
            </div>
            <StatusBadge status={ticket.status}></StatusBadge>
          </div>

          <p>{ticket.description}</p>
          <div className="flex justify-between items-center">
            <div>
              <p>
                #{ticket.id} {ticket.priority}
              </p>
            </div>
            <div className="text-end">
              <p>
                #{ticket.customer} <i class="fa-regular fa-calendar-plus"></i>
                {ticket.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

// {
//     "id": "#1001",
//     "title": "Login Issues - Can't Access Account",
//     "description": "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
//     "customer": "John Smith",
//     "priority": "HIGH",
//     "status": "open",
//     "createdAt": "1/15/2024"
// }
