import React from "react";
import Result from "./Result";
import { Spin } from "antd";

const Results = ({ results, loading, openPopup }) => {
  if (loading) {
    return (
      <div className="spinner-wrap">
        <Spin />;
      </div>
    );
  }
  return (
    <section className="results">
      {results.map(result => (
        <Result result={result} key={result.imdbID} openPopup={openPopup} />
      ))}
    </section>
  );
};

export default Results;
