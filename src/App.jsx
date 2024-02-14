import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Discover, Root,SongDetail,ArtistDetail } from "./pages";
import MusicPlayer from "./components/MusicPlayer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Sidebar, TopPlay } from "./components";
import { useState } from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/Melody",
        element: <Discover />,
      },
      {
        path: "/Melody/songs/:songid",
        element: <SongDetail />,
      },
      {
        path: "/Melody/artists/:artistid",
        element: <ArtistDetail />,
      },
    ],
  },
]);

const App = () => {
  const [musicPlayerShow, setMusicPlayerShow] = useState(true)
  const { activeSong } = useSelector((state) => state.player);
  return (
    <section className="flex bg-gradient-to-br from-black to-[#121286] min-h-screen">
        <RouterProvider router={router} />

       {(activeSong?.title ? activeSong?.title : activeSong?.attributes?.title) && (
         <div className={`fixed h-20 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br ${!musicPlayerShow && 'translate-y-20'} transition-all duration-300 from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10`}>
           <MusicPlayer setMusicPlayerShow={setMusicPlayerShow} musicPlayerShow={musicPlayerShow}/>
         </div>
       )}
      </section>
  );
};
export default App;
