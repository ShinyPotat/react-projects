import { Song } from "./Song";
import { LuClock3 } from "react-icons/lu";

export function PlayList({ songs }) {
  return (
    <div className="sp-playlist">
      <header className="sp-playlist-header sp-song-text">
        <span>#</span>
        <span>Title</span>
        <span className="sp-playlist-header-album">Album</span>
        <span className="sp-playlist-header-date">Date added</span>
        <span></span>
        <span>
          <LuClock3 />
        </span>
      </header>
      {songs.map(
        ({
          id,
          cover,
          title,
          isExplicit,
          artists,
          album,
          date,
          isLiked,
          duration,
        }) => (
          <Song
            key={id}
            id={id}
            cover={cover}
            title={title}
            isExplicit={isExplicit}
            artists={artists}
            album={album}
            date={date}
            initialIsLiked={isLiked}
            duration={duration}
          />
        )
      )}
    </div>
  );
}
