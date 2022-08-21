import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import $ from "jquery";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";

import ChatProfileCard from "../../components/ChatProfileCard/ChatProfileCard";
import IncomingMessage from "../../components/IncomingMessage/IncomingMessage";
import OutgoingMessage from "../../components/OutgoingMessage/OutgoingMessage";
import { PROFILE_PIC_URL } from "../../constants/globalConstants";

import "./ChatCreatorPage.css";

const socket = io.connect("http://localhost:5000");

function ChatCreatorPage() {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken, profilePhoto } = userInfo.user;

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

  const padTo2Digits = (num) => {
    return String(num).padStart(2, "0");
  };

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

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
        profilePhoto: profilePhoto,
      };

      const inputData = {
        messageId: 0,
        chatId: messageData.room,
        senderId: messageData.author,
        message: messageData.message,
        sendDate: "2022-08-20T11:39:17.075Z",
        profilePhoto: messageData.profilePhoto,
      };

      setMessageList((list) => [...list, inputData]);

      await socket.emit("send_message", messageData);
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

  const handleKeypress = (e) => {
    // console.log("Hi");

    if (e.key === "Enter") {
      send();
    }
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
              <ScrollToBottom className="msg_history">
                <div class="msg_history">
                  {/* {console.log(new Date(messageList[0].sendDate))} */}
                  {messageList.map((data) =>
                    console.log(new Date(data.sendDate))
                  )}
                  {messageList.map((data) =>
                    data.senderId === userId ? (
                      <OutgoingMessage
                        message={data.message}
                         time={
                          new Date(data.sendDate).toLocaleTimeString('en-US',{ timeZone: 'Asia/Kolkata',hour: 'numeric', minute: 'numeric' }) +
                          " | " + month[new Date(data.sendDate).getUTCMonth()] + " "+new Date(data.sendDate).getDate()
                   
                        }
                      />
                    ) : (
                      <IncomingMessage
                        imageLink={PROFILE_PIC_URL + data.profilePhoto}
                        message={data.message}
                        time={
                          new Date(data.sendDate).toLocaleTimeString('en-US',{ timeZone: 'Asia/Kolkata',hour: 'numeric', minute: 'numeric' }) +
                          " | " + month[new Date(data.sendDate).getUTCMonth()] + " "+new Date(data.sendDate).getDate()
                   
                        }
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
                </div>{" "}
              </ScrollToBottom>
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
                      onKeyPress={handleKeypress}
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
