import React, { useState } from "react";
import style from "./SearchVideo.module.css";
import VideoPreview from "./VideoPreview";
import { Button, Form, InputGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function SearchVideo({ items, collection }) {
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState(items, collection);

  const searchHandler = async () => {
    const results = await fetch(
      `https://images-api.nasa.gov/search?q=${search}&page=1&media_type=video`
    );
    const videosSearch = await results.json();
    setVideos(videosSearch.collection.items);
  };

  return (
    <>
      <div className={style.hello}>
        <h1 className="TitleHome">Earthlings!</h1>
        <p className={style.hello2}>
          Here you can find videos about our planet, about other planets, stars
          and galaxies!
        </p>
      </div>
      <div className={style.inpPar}>
        <InputGroup
          className={style.form}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
        >
          <Form.Control
            placeholder="Search for an video"
            aria-label="Введите название"
            aria-describedby="basic-addon2"
          />
          <Button
            onClick={searchHandler}
            disabled={search === ""}
            variant="outline-secondary"
            id="button-addon2"
          >
            SEARCH
          </Button>
        </InputGroup>
      </div>

      <div className={style.videoGallery}>
        {videos &&
          videos.map((videoElem) => (
            <VideoPreview
              key={uuidv4(videoElem.data[0].title)}
              videoPreview={videoElem.links[0].href}
              videoPlay={videoElem?.links[1]?.href}
              title={videoElem.data[0].title}
              description={videoElem.data[0].description}
              nasaId={videoElem.data[0].nasa_id}
            />
          ))}
      </div>
    </>
  );
}

