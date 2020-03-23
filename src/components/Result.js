import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const Result = ({ result, openPopup }) => {
  return (
    <Card
      onClick={() => openPopup(result.imdbID)}
      hoverable
      style={{ width: 300, backgroundColor: "#fff" }}
      cover={
        result.Poster === "N/A" ? (
          <div className="placeholder-cover">{result.Title}</div>
        ) : (
          <img alt="Movie Poster" src={result.Poster} />
        )
      }
    >
      <Meta title={result.Title} description={`Year: ${result.Year}`} />
    </Card>
  );
};

export default Result;
