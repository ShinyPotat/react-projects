import { PlayList } from "./components/PlayList";
import "./App.css";

function App() {
  const songs = [
    {
      id: 1,
      cover: "https://i.scdn.co/image/ab67616d0000485186aa667d96341fd6c41841e0",
      title: "Amigos (with Becky G)",
      isExplicit: true,
      artists: ["BIBI", "Becky G"],
      album: "Amigos (with Becky G)",
      date: "2 weeks ago",
      isLiked: true,
      duration: "2:31",
    },
    {
      id: 2,
      cover: "https://i.scdn.co/image/ab67616d00004851212c0c38b7b9cb111fd99d07",
      title: "Blood In The Water",
      isExplicit: true,
      artists: ["Normandie"],
      album: "Blood In The Water",
      date: "Aug 1, 2023",
      isLiked: false,
      duration: "3:34",
    },
    {
      id: 3,
      cover: "https://i.scdn.co/image/ab67616d000048517602becfedf6e25752cb54ff",
      title: "Fast Car",
      isExplicit: false,
      artists: ["Tracy Chapman"],
      album: "Tracy Chapman",
      date: "Oct 13, 2023",
      isLiked: true,
      duration: "4:56",
    },
  ];
  return <PlayList songs={songs} />;
}

export default App;
