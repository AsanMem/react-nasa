import React,{useState} from 'react'
import style from "./SearchVideo.module.css";
import VideoPreview from './VideoPreview';
import {Button,Form,InputGroup} from "react-bootstrap";



export default function SearchVideo({items, collection}) {
  const [search, setSearch] = useState("");
    const [videos, setVideos] = useState(items, collection);

const searchHandler = async() => {
  const results = await fetch(
    `https://images-api.nasa.gov/search?q=${search}&page=1&media_type=video`
  );
 
 
  const videosSearch = await results.json();

  setVideos( videosSearch.collection.items);
}

  return (
    <>
    <div className={style.hello}>
        <h1 className="TitleHome">Earthlings!</h1>
        <p className={style.hello2}>
        Here you can find videos about our planet, about other planets, stars and galaxies!
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
          videos.map((vid)  => (
            <VideoPreview
              key={vid.data[0].title}
              videoPreview={vid.links[0].href}
              videoPlay={vid.links[1].href}
              title={vid.data[0].title}
              description={vid.data[0].description}
              nasaId={vid.data[0].nasa_id}
            />
          ))
          }
      </div>
    
    
    </>

  )
}

// onClick={async () => {
//   const results = await fetch(
//     `https://images-api.nasa.gov/search?q=${search}&page=1&media_type=video`
//   );
 
 
//   const videosSearch = await results.json();

//   setVideos( videosSearch.collection.items);

  
// }}
{/* <input
className={style.form}
id="nasaSearch"
onChange={(e) => setSearch(e.target.value)}
type="text"
placeholder="Search for an video"
></input>
<button
className="button"
disabled={search === ""}
onClick={searchHandler}
>
Search
</button> */}
