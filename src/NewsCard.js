import React from "react";
import "./NewsCard.css";
import TextTruncate from "react-text-truncate";

function NewsCard({
  article_desc,
  article_title,
  timestamp,
  article_image,
  article_link,
}) {
  const formattedDate = new Date(timestamp);

  return (
    <div className="newsCard">
      <img className="newsCard__image" src={article_image} alt="article IMG" />
      <div className="newsCard__info">
        <TextTruncate
          line={1}
          containerClassName="newsCard__title"
          element="h3"
          truncateText="..."
          text={article_title}
        />
        <p className="newsCard__date">{formattedDate.toUTCString()}</p>
        <TextTruncate
          line={1}
          containerClassName="newsCard__desc"
          element="p"
          truncateText="..."
          text={article_desc}
        />

        <button className="newsCard__button">
          <a href={article_link} target="_blank" rel="noopener noreferrer">
            View Original Article
          </a>
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
