import "./ChatProfileCard.css";

function ChatProfileCard({ clickFunction, imageLink, name, date }) {
  return (
    <div class="chat_list" onClick={clickFunction}>
      <div class="chat_people">
        <div class="chat_img">
          {" "}
          <img src={imageLink} alt="sunil" />{" "}
        </div>
        <div class="chat_ib">
          <h5>
            {name} <span class="chat_date">{date}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ChatProfileCard;
