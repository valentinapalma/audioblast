import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';



const SongCard = ( s, i, isPlaying, activeSong, data) => {
  let artistName = [];
  let artistUri;

  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ s, data, i }));
    dispatch(playPause(true));
  }

  //const dispatch = useDispatch();
  console.log(s.song);

  s.song.artists.map((artist, i) => {
    artistUri = artist.spotifyUri;
    if (i > 0) {
      artistName.push(', ' + artist.name);
    } else {
      artistName.push(artist.name);
    }
  })

  return  (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === 'dest' ? 'flex bg-black bg-opacity-70' : 'hidden' }`}>
        <PlayPause 
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={s.song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
      <img alt="song_img" src={s.song.displayImageUri} />
    </div>

    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg truncate">
        <Link to={`/songs/${s.song.trackUri}`}>
          {s.song.trackName}
        </Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        <Link to={ artistName ? `/artists/${artistUri}` : '/top-artists'}>
          { artistName }
        </Link>
      </p>
    </div>
  </div>
  );
};

export default SongCard;
