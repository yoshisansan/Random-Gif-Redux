import React from "react";

const GetGif = ({ urlList, hitGiphy }) => (
  <div>
    <img src={urlList} width={100} alt="test" key={urlList} />
  </div>
);

export default GetGif;
