import InputOption from "../InputOptions/InputOption";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
  ThumbUpAltSharp,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import ReactPlayer from "react-player";

const Post = forwardRef(
  ({ name, mainImg, description, message, photoUrl, video }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post_header">
          <span className="feedInput_Avatar">
            <Avatar src={photoUrl} />
          </span>
          <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post_body">
          <p>{message}</p>
        </div>
        <div className="post_img">
          {mainImg && <img src={mainImg} alt="" />}
          {video && <ReactPlayer width={"100%"} url={video} controls={true} />}
        </div>
        <div className="social_counts">
          <div className="icons_count">
            <ThumbUpAltSharp />
          </div>
          <h1>75 </h1>
          <span>__</span>
          <h1> 2 comments</h1>
        </div>
        <div className="post_buttons">
          <InputOption Icon={ThumbUpAltOutlined} color="gray" title="Like" />
          <InputOption Icon={ChatOutlined} color="gray" title="Comment" />
          <InputOption Icon={ShareOutlined} color="gray" title="Share" />
          <InputOption Icon={SendOutlined} color="gray" title="Send" />
        </div>
      </div>
    );
  }
);

export default Post;
