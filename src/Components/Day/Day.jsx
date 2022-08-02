import React, { useState, useEffect } from "react";
import style from "./style.module.css";
const My_Key_NASA = "VauDsiHPdow83sG05SNp04z8eTKDnUACx9I5mCoa";

export default function Day() {
  const [photoData, setPhotoData] = useState([]);
  console.log(photoData);
  useEffect(() => {
    fetchPhotoDay();
    async function fetchPhotoDay() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${My_Key_NASA}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  return (
    <>
      <h3 className={style.date1}>
        <p>
          Today is {photoData.date}, which means meet this beautiful snapshot of
          the day{" "}
        </p>{" "}
      </h3>
      <h3 className={style.date2}>
        <p>{photoData.title}</p>
      </h3>
      <div className={style.day}>
        <img
          className={style.photo}
          src={photoData.url}
          alt={photoData.title}
        />
        <div className={style.textDay}>{photoData.explanation}</div>
      </div>
    </>
  );
}
