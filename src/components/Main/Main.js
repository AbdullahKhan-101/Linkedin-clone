import React, { useEffect, useState } from "react";
import "./Main.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../InputOptions/InputOption";
import {
  CalendarViewDay,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import PostModal from "../PostModal/PostModal";
import Spinner from "react-spinkit";
import { getArticlesAPI } from "../../actions";

// import { db } from "../../firebase";
// import firebase from "firebase";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../features/userSlice";
// import FlipMove from "react-flip-move";

const Main = () => {
  const user = useSelector((state) => state.userState.user);
  const loading = useSelector((state) => state.articleState.loading);
  const articles = useSelector((state) => state.articleState.articles);

  // console.log(articles.actor.image);

  const dispatch = useDispatch();
  const [showModel, setShowModal] = useState("close");

  useEffect(() => {
    dispatch(getArticlesAPI());
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModel) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  // const user = useSelector(selectUser);
  // const [posts, setPosts] = useState([]);
  // const [input, setInput] = useState("");
  // useEffect(() => {
  //   db.collection("posts")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) =>
  //       setPosts(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );
  // }, []);

  // const sendPost = (e) => {
  //   e.preventDefault();

  //   if (input) {
  //     db.collection("posts").add({
  //       name: user.displayName,
  //       description: user.email,
  //       message: input,
  //       photoUrl: user.photoUrl || "",
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     });
  //     setInput("");
  //   }
  // };

  return (
    <>
      <div className="share_box">
        <div className="feed">
          <div className="feed_input_container">
            <div className="feedInput_avatar_with_input">
              <span className="feedInput_Avatar">
                <Avatar
                //  src={user?.photoURL}
                />
                {/* {user?.email[0]} */}
                {/* </Avatar> */}
              </span>
              <div className="feed_input" onClick={() => setShowModal("open")}>
                <CreateIcon />
                <form>
                  <input
                    disabled="true"
                    // value={input}
                    type="text"
                    placeholder={`Create posts... ${
                      user ? user?.displayName : " "
                    }`}
                    // onChange={(e) => setInput(e.target.value)}
                  />
                  <button
                  //  onClick={sendPost}
                  // type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="feed_inputOptions">
              <InputOption Icon={Image} title="Photo" color="#70B5F9" />
              <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
              <InputOption Icon={EventNote} title="Event" color="#C0Cbcd" />
              <InputOption
                Icon={CalendarViewDay}
                title="Write article"
                color="#7FC15E"
              />
            </div>
          </div>

          {/* <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          />
          ))}
        </FlipMove> */}
        </div>

        <div className="main_ka_ander_ka_content">
          {
            loading && (
              <Spinner className="react_spinner" name="line-spin-fade-loader" />
            )
            // <img src="./images/spin-loader.svg" />
          }
          <div className="post_here">
            {articles?.map((item, key) => {
              return (
                <Post
                  key={key}
                  mainImg={item.shareImg}
                  video={item.video}
                  name={item.actor.title}
                  description={item.actor.description}
                  // description={item.actor.date.toDate().toLocalDateString()}
                  message={item.description}
                  photoUrl={item.actor.image}
                />
              );
            })}
          </div>
        </div>
        <PostModal
          setShowModal={setShowModal}
          showModel={showModel}
          handleClick={handleClick}
        />
      </div>
    </>
  );
};

export default Main;
