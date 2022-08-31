import "./OutgoingMessage.css";

function OutgoingMessage({ message, time }) {
  return (
    <div class="outgoing_msg">
      <div class="sent_msg">
        <p>{message}</p>
        <span class="time_date"> {time}</span>{" "}
      </div>
    </div>
  );
}

export default OutgoingMessage;
