import { combineReducers } from "redux";
const songReducer = () => {
  return [
    { title: "Mango", duration: "4:00" },
    { title: "Shaxriy bilan uyna", duration: "4:00" },
    { title: "Chico chicko", duration: "3:00" },
    { title: "Samarqand", duration: "4:50" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
