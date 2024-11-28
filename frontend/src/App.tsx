import React, { useState, useEffect } from "react";
import axios from "axios";

interface Player {
  id: number;
  name: string;
  age: number;
  position: string;
}

interface Photo {
  id: number;
  url: string;
  title: string;
  albumId: number;
  thumbnailUrl: string;
}

interface Member {
  name: string;
}

interface SquadResponse {
  squadName: string;
  homeTown: string;
  members: Member[];
  demos: Member[];
}

function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  console.log(players);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [squad, setSquad] = useState<string>("");
  const [homeTown, setHomeTown] = useState<string>("");
  const [members, setMembers] = useState<Member[]>([]);
  const [demo, setDemo] = useState<Member[]>([]);

  console.log(photos);
  console.log(squad);
  console.log(members);
  console.log(demo);

  useEffect(() => {
    axios
      .get("https://awa91.github.io/abs0324/players.json")
      .then((response) => {
        setPlayers(response.data.players);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://awa91.github.io/ads281124/data.json")
      .then((response) => {
        setPhotos(response.data.photos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get<SquadResponse>("https://awa91.github.io/abs0324/superheroes.json")
      .then((response) => {
        setSquad(response.data.squadName);
        setHomeTown(response.data.homeTown);
        setMembers(response.data.members);
        setDemo(response.data.demos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="mx-auto">
        <h1>Players</h1>
        {players.map((player) => (
          <div key={player.id}>
            <h2>{player.name}</h2>
            <p>{player.age}</p>
            <p>{player.position}</p>
          </div>
        ))}
      </div>

      <div>
        <h1>Photo section</h1>
        {photos.map((photo) => (
          <div key={photo.id} className="relative">
            <img className="h-3 w-3" src={photo.url} alt="" />
            <p>{photo.title}</p>
            <p>{photo.albumId}</p>
            <p>{photo.thumbnailUrl}</p>
          </div>
        ))}
      </div>
      <p>{squad}</p>
      <p>{homeTown}</p>
      <div>
        <h1>Demo section</h1>
        {demo.map((demo) => (
          <div key={demo.name}>
            <p>{demo.name}</p>
          </div>
        ))}
      </div>
      <img src="/comment.png" className="w-10 h-10"/>
    </>
  );
}

export default App;

