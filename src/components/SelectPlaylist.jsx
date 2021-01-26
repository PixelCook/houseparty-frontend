import PlaylistList from './PlaylistList';
import background from "../DesignImages/6.svg"

const SelectPlaylist = () => {
  return (
    <>
     <div
          className="background"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "100% 100%",
          }}
        >
      <PlaylistList />
      </div>
    </>
  );
};

export default SelectPlaylist;
