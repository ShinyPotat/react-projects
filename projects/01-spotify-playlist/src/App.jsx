import "./App.css";
import { Song } from "./Song";

function App() {
  return (
    <div className="playlist">
      <Song
        id={1}
        cover="https://i.scdn.co/image/ab67616d0000485186aa667d96341fd6c41841e0"
        title="Amigos (with Becky G)"
        isExplicit
        artist="BIBI"
        album="Amigos (with Becky G)"
        date="2 weeks ago"
        initialIsLiked
        duration="2:31"
      />
      <Song
        id={2}
        cover="https://i.scdn.co/image/ab67616d00004851212c0c38b7b9cb111fd99d07"
        title="Blood In The Water"
        isExplicit
        artist="Normandie"
        album="Blood In The Water"
        date="Aug 1, 2023"
        duration="3:34"
      />
    </div>
  );
}

export default App;
