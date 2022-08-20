import "./OutgoingMessage.css";

function OutgoingMessage({ message, time }) {
  return (
    <div class="outgoing_msg">
      <div class="sent_msg">
        <p>{message}</p>
        <span class="time_date"> 11:01 AM | June 9</span>{" "}
      </div>
    </div>
  );
}

export default OutgoingMessage;
