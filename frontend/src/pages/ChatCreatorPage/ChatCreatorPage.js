import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import $ from "jquery";
import io from "socket.io-client";

import ChatProfileCard from "../../components/ChatProfileCard/ChatProfileCard";
import IncomingMessage from "../../components/IncomingMessage/IncomingMessage";
import OutgoingMessage from "../../components/OutgoingMessage/OutgoingMessage";
import { PROFILE_PIC_URL } from "../../constants/globalConstants";

import "./ChatCreatorPage.css";

const socket = io.connect("http://localhost:5000");

function ChatCreatorPage() {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [username, setUsername] = useState(userId);
  const [room, setRoom] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    $(".chat_list").click(function (e) {
      $(".chat_list").each(function (i) {
        $(this).removeClass("active_chat");
      });

      $(this).addClass("active_chat");
    });
  }, []);

  const send = async () => {
    // console.log("12345");
    if (currentMessage !== "") {
      // setMessageList((list) => [...list, currentMessage]);

      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      // setMessageList((list) => [...list, messageData]);
    }
    setCurrentMessage("");
  };

  useEffect(() => {
    socket.off("receive_message").on("receive_message", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    console.log(messageList);
  }, [messageList]);

  const selectChat = (room) => {
    console.log("This is");
    console.log(room);
  };

  return (
    <span className="chatCreatorPage">
      <div class="container">
        <div class="messaging">
          <div class="inbox_msg">
            <div class="inbox_people">
              <div class="headind_srch">
                <div class="recent_heading">
                  <h4>Recent</h4>
                </div>
                <div class="srch_bar">
                  <div class="stylish-input-group">
                    <input
                      type="text"
                      class="search-bar"
                      placeholder="Search"
                    />
                    <span class="input-group-addon">
                      <button type="button">
                        {" "}
                        <i class="fa fa-search" aria-hidden="true"></i>{" "}
                      </button>
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div class="inbox_chat">
                <ChatProfileCard
                  changeRoomFunc={setRoom}
                  ChangeMessageListFunc={setMessageList}
                  imageLink="https://ptetutorials.com/images/user-profile.png"
                  name="Sunil Rajput"
                  date="Dec 28"
                  socket={socket}
                  room="1"
                  username={userId}
                />

                <ChatProfileCard
                  changeRoomFunc={setRoom}
                  ChangeMessageListFunc={setMessageList}
                  imageLink="https://ptetutorials.com/images/user-profile.png"
                  name="Sunil Rajput"
                  date="Dec 28"
                  socket={socket}
                  room="7"
                  username={userId}
                />
              </div>
            </div>
            <div class="mesgs">
              <div class="msg_history">
                {messageList.map((data) =>
                  data.senderId === userId ? (
                    <OutgoingMessage
                      message={data.message}
                      time="11:01 AM | June 9"
                    />
                  ) : (
                    <IncomingMessage
                      imageLink={PROFILE_PIC_URL + data.profilePhoto}
                      message={data.message}
                      time="11:01 AM | June 9"
                    />
                  )
                )}
                {/* <IncomingMessage
                  imageLink="https://ptetutorials.com/images/user-profile.png"
                  message="Test which is a new approach to have all solutions"
                  time="11:01 AM | June 9"
                />

                <OutgoingMessage
                  message="Test which is a new approach to have all solutions"
                  time="11:01 AM | June 9"
                />

                <IncomingMessage
                  imageLink="https://ptetutorials.com/images/user-profile.png"
                  message="Test which is a new approach to have all solutions"
                  time="11:01 AM | June 9"
                />

                <OutgoingMessage
                  message="Test which is a new approach to have all solutions"
                  time="11:01 AM | June 9"
                />

                <IncomingMessage
                  imageLink="https://ptetutorials.com/images/user-profile.png"
                  message="We work directly with our designers and suppliers, and
                  sell direct to you, which means quality, exclusive
                  products, at a price anyone can afford."
                  time="11:01 AM | June 9"
                /> */}
              </div>
              {/* {console.log("result")}
              {console.log(messageList.length)} */}
              {messageList.length !== 0 && (
                <div class="type_msg">
                  <div class="input_msg_write">
                    <input
                      value={currentMessage}
                      type="text"
                      class="write_msg"
                      placeholder="Type a message"
                      onChange={(e) => setCurrentMessage(e.target.value)}
                    />
                    <button class="msg_send_btn" type="button" onClick={send}>
                      <i class="bi bi-send"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default ChatCreatorPage;
