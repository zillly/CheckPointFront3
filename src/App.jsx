import { useState } from 'react';
import './App.css';
import CardComponent from './Components/Card/CardComponent';
import InputComponent from './Components/Input/InputComponent';
import CardListComponent from './Components/Card/CardListComponent';

function App() {

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [animeList, setAnimeList] = useState([])
  const [validate, setValidate] = useState(false);


  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeImgUrl = (event) => {
    setImgUrl(event.target.value)
  }

  const handleButtonClick = (event) => {

    event.preventDefault()

    const AnimeTemp = [...animeList]
    AnimeTemp.push(
      {
        title: title,
        imgUrl: imgUrl
      }
    )
    setAnimeList(AnimeTemp)

    setTitle("");
    setImgUrl("");
    setValidate(false);

    //alert("Por favor, verifique os dados inseridos no formulário")

  }
  
  const validateInput = () => {
    const validateInputTitle = title.trim();
    const imgValidate = imgUrl.split("");

    const oneNumber = imgValidate.some((temNumero) => {
    
      if (isNaN(temNumero)) {
        return false;
      } else {
        return true;
      }
    });
   if (validateInputTitle.length >= 3 && oneNumber && imgUrl > 6) {
      setValidate(true);
    } else {
      setValidate(false);
    }
}

  return (
    <>
      <h2>Template CheckPoint 1</h2>

      <form >

        <InputComponent
          title="Titulo do Anime"
          type="text"
          value={title}
          fnOnChange={handleChangeTitle}
          onKeyUp={validateInput}

        />

        <InputComponent
          title="Img URL"
          type="url"
          value={imgUrl}
          fnOnChange={handleChangeImgUrl}
          onKeyUp={validateInput}
        />

        <button onClick={handleButtonClick} disabled={!validate}>Enviar</button>

      </form>
      <CardListComponent>
      {animeList.map(animeCards => {
        return(
        <CardComponent
         key={animeCards.title} 
         title={animeCards.title}
         imgUrl={animeCards.imgUrl}
      />
        )
      })}

      </CardListComponent>
     

    </>
  )
}

export default App