import React from "react";
import "./Main.css";
import axios from "axios";

const UserItem = ({ id, title, year, runtime, setMovieInfo }) => {
  const fetchUserDetail = async (movieId) => {
    const result = await axios({
      method: "get",
      url: `http://www.omdbapi.com/?apikey=764ed67&i=${movieId}`,
    });
    console.log(result.data);
    setMovieInfo(result.data); //부모컴포넌트에 전달받은 useState
  };

  return (
    <div className="user-item" onClick={() => fetchUserDetail(id)}>
      {/* <p>{id}</p> */}
      <p>{title}</p>
      <p>{year}</p>
      <p>{runtime}</p>
    </div>
  );
};

export default UserItem;
