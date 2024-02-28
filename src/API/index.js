import axios from "axios";

const Base_Url = "https://fsa-puppy-bowl.herokuapp.com/api/apate476/players";

// or could do function getAllPlayers
export const getAllPlayers = async () => {
  const { data } = await axios.get(Base_Url);
  console.log("data", data);
  return data.data.players;
};

export const getSinglePlayer = async (playerId) => {
  const { data } = await axios.get(Base_Url + "/" + playerId);
  console.log("data", data);
  return data.data.player;
};

export const addPlayer = async (player) => {
  await axios.post(Base_Url, player);
};

export const deletePlayer = async (playerId) => {
  await axios.delete(Base_Url + "/" + playerId);
};
