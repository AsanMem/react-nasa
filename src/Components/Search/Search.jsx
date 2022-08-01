import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";
import CardSearch from "../CardImage/CardSearch";
import style from "./Search.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Search() {
  const [photos, setPhotos] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  const searchHandler = async () => {
    const results = await fetch(
      `https://images-api.nasa.gov/search?media_type=image&q=${inputSearch}`
    );
    const previews = await results.json();
    setPhotos(await previews.collection.items);
  };

  const inputHandler = (event) => {
    console.log("event.target.value", event.target.value);
    setInputSearch(event.target.value);
  };
  return (
    <>
      <div className={style.hello}>
        <h1 className="TitleHome">Hello Earthlings!</h1>
        <p className={style.hello2}>
          Here you can find photos of our planet, other planets, stars and
          galaxies!
        </p>
      </div>
      <div className={style.inpPar}>
        <InputGroup
          className={style.form}
          onChange={inputHandler}
          type="text"
          name="search"
        >
          <Form.Control
            placeholder="Enter the title"
            aria-label="Введите название"
            aria-describedby="basic-addon2"
          />
          <Button
            onClick={searchHandler}
            disabled={inputSearch === ""}
            variant="outline-secondary"
            id="button-addon2"
          >
            SEARCH
          </Button>
        </InputGroup>
      </div>
      <div className={style.parent}>
        {photos.map((preview) => (
          <CardSearch
            key={uuidv4(preview.data[0].title)}
            nasaPicture={preview.links[0].href}
            title={preview.data[0].title}
            description={preview.data[0].description}
          />
        ))}
      </div>
    </>
  );
}
