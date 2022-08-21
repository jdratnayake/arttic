import { useState } from "react";
import "./ChatProfileCard.css";

function ChatProfileCard({
  changeRoomFunc,
  ChangeMessageListFunc,
  room,
  username,
  imageLink,
  name,
  date,
  socket,
}) {
  const joinRoom = () => {
    changeRoomFunc(room);
    console.log(room);

    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      // setShowChat(true);
    }
  };

  // const test = () => {
  //   console.log("Child");
  //   console.log(socket);
  //   clickFunction();
  // };

  return (
    <div class="chat_list" onClick={joinRoom}>
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
