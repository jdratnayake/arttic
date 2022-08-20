import "./IncomingMessage.css";

function IncomingMessage({ imageLink, message, time }) {
  return (
    <div class="incoming_msg">
      <div class="incoming_msg_img">
        {" "}
        <img src={imageLink} alt="sunil" />{" "}
      </div>
      <div class="received_msg">
        <div class="received_withd_msg">
          <p>{message}</p>
          <span class="time_date"> 11:01 AM | June 9</span>
          {/* <span class="time_date"> 11:01 AM | June 9</span> */}
        </div>
      </div>
    </div>
  );
}

export default IncomingMessage;
