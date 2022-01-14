import { Close, Image, Message, Subscriptions } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useState } from "react";
import "./PostModal.css";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../../actions";

const PostModal = ({ showModel, handleClick, setShowModal }) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      video: videoLink,
      user: user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    postArticlee(payload);
    reset(e);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    // handleClick(e);
    setShowModal("close");
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const postArticlee = (payload) => {
    dispatch(postArticleAPI(payload));
  };

  return (
    <>
      {showModel === "open" && (
        <div className="post_modal_container">
          <div className="post_content">
            <div className="post_header_modal">
              <h2>Create a post</h2>
              <IconButton>
                <Close onClick={reset} className="close_button" />
              </IconButton>
            </div>
            <div className="post_share_content">
              <div className="post_userinfo">
                <Avatar src={user.photoURL} />
                <span>{user?.displayName}</span>
              </div>
              <div className="text_editor">
                <textarea
                  value={editorText}
                  autoFocus
                  placeholder="What do you want to talk about?"
                  onChange={(e) => setEditorText(e.target.value)}
                ></textarea>
                {assetArea === "image" ? (
                  <div className="upload_image">
                    <input
                      type="file"
                      accept="image/gif, image/png, image/jpg, image/jpeg"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file" className="select_an_image">
                        Select an image to share
                      </label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </div>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        type="text"
                        placeholder="Please input a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer
                          // height={"100%"}
                          width={"100%"}
                          url={videoLink}
                        />
                      )}
                    </>
                  )
                )}
              </div>
            </div>
            <div className="post_creation">
              <div className="attach_assets">
                <div
                  className="asset_button"
                  onClick={() => switchAssetArea("image")}
                >
                  <Image />
                </div>
                <div
                  className="asset_button asset_button_second"
                  onClick={() => switchAssetArea("media")}
                >
                  <Subscriptions />
                </div>
              </div>

              <div className="post_share_component">
                <div className="asset_button">
                  <span>
                    <Message />
                    <span className="any">Anyone</span>
                  </span>
                </div>
              </div>
              <Button
                disabled={!editorText ? true : false}
                className="modal_post_button"
                onClick={(event) => postArticle(event)}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostModal;

const Button = styled.button`
  background-color: ${(props) =>
    props.disabled ? "rgba(0,0,0,.6)" : "#1275d8"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  :hover {
    background-color: ${(props) =>
      props.disabled ? "rgba(0,0,0,.6)" : "#005db9"};
  }
`;
