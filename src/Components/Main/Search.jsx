import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React,{useState} from 'react'
import CardSearch from './CardSearch';
import style from './style.module.css'
import { v4 as uuidv4 } from 'uuid';
//import nasa from '../../video/nasa2.mp4'

export default function Search() {
  const [photos, setPhotos] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
console.log(photos)
 const  searchHandler = async () => {
  console.log(photos)
    const results = await fetch(
      `https://images-api.nasa.gov/search?media_type=image&q=${inputSearch}`
    );
    const previews = await results.json();
    console.log(previews)
   setPhotos(await previews.collection.items);
 }

  console.log(photos)
  console.log(inputSearch)
  const inputHandler = (event) => {
    console.log('event.target.value',event.target.value);
    setInputSearch(event.target.value)
  }
  console.log(photos)
  return (
    <>
       {/* <video className="Video_Background" src={nasa} autoPlay loop muted>
      <source  type="video/mp4"/>
     </video> */}
    <div className={style.hello}>
    <h1 className="TitleHome">Привет, Земляне!</h1>
      <p className={style.hello2}>
      Здесь вы можете найти фотографии нашей планеты,других планет, звезд и галактик!
      </p>
      </div>
      <div className={style.inpPar}>
    <InputGroup className={style.form} onChange={inputHandler} type="text" name="search">
    <Form.Control
      placeholder="Введите название"
      aria-label="Введите название"
      aria-describedby="basic-addon2"
    />
    <Button onClick={searchHandler} disabled={inputSearch === ""} variant="outline-secondary" id="button-addon2">
      ПОИСК
    </Button>
  </InputGroup>
  </div>
  <div className={style.parent}>
      { photos.map((preview) => (
        <CardSearch
          key={uuidv4(preview.data[0].title)}
          nasaPicture={preview.links[0].href}
          title={preview.data[0].title}
          description={preview.data[0].description}
        /> 
      ))
    }
      

</div>
</>
  )
}




