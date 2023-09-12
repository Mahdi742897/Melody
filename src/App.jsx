import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Discover, Root,SongDetail } from "./pages";
import MusicPlayer from "./components/MusicPlayer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Sidebar, TopPlay } from "./components";


const router = createBrowserRouter([
  {
    path: "/Melody",
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
    ],
  },
]);

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  return (
    <section className="flex bg-gradient-to-br from-black to-[#121286] min-w-min">
        <RouterProvider router={router} />
      {/* <div className="relative xl:sticky top-0 h-fit inline">
        <TopPlay />
      </div> */}

      {activeSong?.title && (
        <div className="fixed h-20 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </section>
  );
};
export default App;
