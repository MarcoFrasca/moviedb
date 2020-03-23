import React from "react";
import { Modal } from "antd";

const Popup = ({ selected, closePopup, showModal }) => {
  const { Title, Year, imdbRating, Poster, Plot } = selected;
  return (
    <Modal
      title={Title}
      visible={showModal}
      onOk={closePopup}
      onCancel={closePopup}
    >
      <div className="content">
        <h2>
          {Title} <span>({Year})</span>
        </h2>
        <p className="rating">Rating: {imdbRating}</p>
        <div className="plot">
          <img src={Poster} alt="poster" />
          <p>{Plot}</p>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
