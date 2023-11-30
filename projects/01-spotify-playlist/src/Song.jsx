import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export function Song({
  id,
  cover,
  title,
  isExplicit,
  artist,
  album,
  initialIsLiked,
  date,
  duration,
}) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const isExplicitText = isExplicit ? "E" : "";
  const heartClassName = isLiked ? "heart-icon is-liked" : "heart-icon";
  const heartIcon = isLiked ? <FaHeart /> : <FaRegHeart />;

  const handleLikeButton = () => {
    setIsLiked(!isLiked);
  };

  return (
    <article className="sp-song">
      <p className="sp-song-id">
        <span>{id}</span>
      </p>
      <header className="sp-song-header">
        <img className="sp-song-cover" src={cover} alt="song cover" />
        <div className="sp-song-info">
          <a className="sp-song-info-title" href="#">
            {title}
          </a>
          <div className="sp-song-info-bottom">
            <span className="is-explicit">{isExplicitText}</span>
            <a className="sp-song-link" href="#">
              {artist}
            </a>
          </div>
        </div>
      </header>
      <a className="sp-song-link" href="#">
        {album}
      </a>
      <span className="sp-song-text">{date}</span>
      <div className={heartClassName} onClick={handleLikeButton}>
        {heartIcon}
      </div>
      <span className="sp-song-text">{duration}</span>
      <BsThreeDots className="three-dots" />
    </article>
  );
}
