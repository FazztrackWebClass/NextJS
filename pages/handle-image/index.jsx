import React from "react";
import Image from "next/image";

const imageLogo = {
  width: "150px",
  backgroundColor: "red",
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
};

export default function HandleImage() {
  return (
    <div>
      <h1>Handle Image</h1>
      <hr />
      <h6>Without next image</h6>
      <img src="vercel.svg" alt="image" />
      <h6>With next image</h6>
      <div style={imageLogo}>
        <Image
          src="/vercel.svg"
          width={100}
          height={200}
          className="image-logo"
        />
      </div>
      <div style={imageLogo}>
        <Image
          src={
            "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/Fazzpay/bqz00rnxwa1mzwqmudyh.jpg"
          }
          width={100}
          height={200}
          className="image-logo"
        />
      </div>
    </div>
  );
}
