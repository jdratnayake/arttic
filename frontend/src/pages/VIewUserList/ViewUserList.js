import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    API_URL,
    PROFILE_PIC_URL,
    COVER_PIC_URL,
} from "../../constants/globalConstants";
import axios from "axios";
import { useSelector } from "react-redux";
import "./ViewUserList.css";
import UserCard from "../../components/UserCard/UserCard";

function ViewUserList() {

    const { type } = useParams();

    const [userDetails, setUserDetails] = useState([]);

    const userInfo = useSelector((state) => state.userInfo);
    const { userId, accessToken } = userInfo.user;


    //  get creators data -----------------------------------------------------
    const getCreatorData = async () => {
        const head = {
            headers: {
                authorization: accessToken,
            },
        };

        if (type == "followers") {
            await axios
                .get(API_URL + "/user/getfollowersdetails/" + userId, head)
                .then((response) => {
                    setUserDetails(response.data);
                    //console.log(response.data);
                });
        }
        if (type == "followings") {
            await axios
                .get(API_URL + "/user/getfollowingsdetails/" + userId, head)
                .then((response) => {
                    setUserDetails(response.data);
                    //console.log(response.data);
                });
        }

    }
    // end get creators data -------------------------------------------------


    useEffect(() => {
        getCreatorData();
    }, []);

    return (
        <span className="subscribedCreatorsPage">
            <div class="row row-cols-1 row-cols-md-2 row-cols-md-3">

                {userDetails.map((data) => (
                    <UserCard
                        userId={data.userId}
                        profilePhoto={PROFILE_PIC_URL + data.profilePhoto}
                        name={data.name}
                        type={data.type} />
                ))}

            </div>
        </span>
    );
}

export default ViewUserList;