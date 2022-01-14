import React from "react";
import "./Rightside.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Rightside = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="news_article">
      <div className="news_article_left">
        <FiberManualRecordIcon />
      </div>
      <div className="news_article_right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="right_side_section">
      <div className="right_side_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Coronavirus: ", "Pak updates - 766 readers")}
      {newsArticle("Weather updates ", "Sama news - 23 readers")}
      {newsArticle("Waqar zaka on fire ", "Crypto  - 44k readers")}
      {newsArticle("Redux power", "Top news - 1.9k readers")}
      {newsArticle("Azad chaiwala ", " Skill updates - 74k readers")}
      {newsArticle("PIAIC admissions ", " 25k applications - 25k readers")}
    </div>
  );
};

export default Rightside;
