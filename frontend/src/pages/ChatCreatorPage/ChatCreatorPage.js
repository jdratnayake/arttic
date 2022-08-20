import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import $ from "jquery";
import io from "socket.io-client";

import ChatProfileCard from "../../components/ChatProfileCard/ChatProfileCard";

import "./ChatCreatorPage.css";

const socket = io.connect("http://localhost:5000");

function ChatCreatorPage() {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [username, setUsername] = useState(userId);
  const [room, setRoom] = useState("1");
  const [currentMessage, setCurrentMessage] = useState("Hello World");
  const [messageList, setMessageList] = useState([]);

  // const clickUser = () => {
  //   setActiveChatId("2");
  //   // console.log("Hi");
  //   // console.log(socket);
  // };

  useEffect(() => {
    $(".chat_list").click(function (e) {
      // console.log("Hi");
      $(".chat_list").each(function (i) {
        // console.log(i);
        $(this).removeClass("active_chat");
      });

      $(this).addClass("active_chat");
    });
  }, []);

  const send = async () => {
    console.log("12345");
    if (currentMessage !== "") {
      setMessageList((list) => [...list, currentMessage]);

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
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

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
                  imageLink="https://ptetutorials.com/images/user-profile.png"
                  name="Sunil Rajput"
                  date="Dec 28"
                  socket={socket}
                  room="1"
                  username={userId}
                />

                <ChatProfileCard
                  changeRoomFunc={setRoom}
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
                <div class="incoming_msg">
                  <div class="incoming_msg_img">
                    {" "}
                    <img
                      src="https://ptetutorials.com/images/user-profile.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="received_msg">
                    <div class="received_withd_msg">
                      <p>Test which is a new approach to have all solutions</p>
                      <span class="time_date"> 11:01 AM | June 9</span>
                    </div>
                  </div>
                </div>
                <div class="outgoing_msg">
                  <div class="sent_msg">
                    <p>Test which is a new approach to have all solutions</p>
                    <span class="time_date"> 11:01 AM | June 9</span>{" "}
                  </div>
                </div>
                <div class="incoming_msg">
                  <div class="incoming_msg_img">
                    {" "}
                    <img
                      src="https://ptetutorials.com/images/user-profile.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="received_msg">
                    <div class="received_withd_msg">
                      <p>Test, which is a new approach to have</p>
                      <span class="time_date"> 11:01 AM | Yesterday</span>
                    </div>
                  </div>
                </div>
                <div class="outgoing_msg">
                  <div class="sent_msg">
                    <p>Apollo University, Delhi, India Test</p>
                    <span class="time_date"> 11:01 AM | Today</span>{" "}
                  </div>
                </div>
                <div class="incoming_msg">
                  <div class="incoming_msg_img">
                    {" "}
                    <img
                      src="https://ptetutorials.com/images/user-profile.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="received_msg">
                    <div class="received_withd_msg">
                      <p>
                        We work directly with our designers and suppliers, and
                        sell direct to you, which means quality, exclusive
                        products, at a price anyone can afford.
                      </p>
                      <span class="time_date"> 11:01 AM | Today</span>
                    </div>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default ChatCreatorPage;
