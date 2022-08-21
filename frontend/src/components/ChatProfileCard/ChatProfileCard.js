import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { API_URL } from "../../constants/globalConstants";

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
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const joinRoom = async () => {
    changeRoomFunc(room);
    console.log(room);

    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      // setShowChat(true);
    }

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/chat/getchathistory/" + room, config)
      .then((response) => {
        // setPurchaseData(response.data);
        // console.log(response);
        ChangeMessageListFunc(response.data);
      });
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
