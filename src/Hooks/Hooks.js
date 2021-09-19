import React, {useState, useEffect} from 'react';
import { useContext,createContext } from "react";
import './Hooks.css'

const themes = {
    light: {
        background: "#9bc0d1",
      },
      dark: {
        background: "#033952",
      },
    };

    const ThemeContext = createContext();

function App(props){
  const [valueTheme, setValueTheme] = useState(themes.dark);
    return(
        <ThemeContext.Provider value = {valueTheme}>
                <div className="contentWrapper" style = {{backgroundColor: valueTheme.background}}>
                    <Content tema = {valueTheme} />                                     
                    <button className = "Button" onClick={()=> setValueTheme( valueTheme === themes.light ? themes.dark : themes.light)}>
                      change
                    </button>           
                </div>  
        </ThemeContext.Provider>        
    );
}

function Content(props) {
    const [nama, setnama] = useState('');
    const [NIM, setNIM] = useState('');
    const [Kelompok, setKelompok] = useState('');
    const [imageSrc, setImage] = useState('');  

    useEffect(
        () => {
        console.log("nama telah diinput");
      },[nama]
      );
  
      useEffect(
        () => {
        console.log("NIM telah diinput");
      },[NIM]
      );

      useEffect(
        () => {
        console.log("Kelompok telah diinput");
      },[Kelompok]
      );

      useEffect(
        () => {
        console.log("gambar telah diinput");
      },[imageSrc]
      );
    
    function handlenamaChange(e){
        setnama(e.target.value);
    }

    function handleNIMChange(e){
        setNIM(e.target.value);
    }

    function handleKelompokChange(e){
      setKelompok(e.target.value);
    }

    function handleImgChange(e){
        setImage(e.target.value);
    }
  return (
      <div className = "card">
          <h2>INPUT DATA DIRI PRAKTIKAN PRAKTIKUM RPLBK</h2>
          <div>
          <input type = "text" 
              placeholder = "nama praktikan"
              size = "20"
              value = {nama}
              onChange = {handlenamaChange}/>
          </div>

          <div>
          <input type = "text"
              placeholder = "NIM"
              size = "20"
              value = {NIM}
              onChange = {handleNIMChange}/>
          </div>
            
          <div>
          <input type = "text"
              placeholder = "Kelompok"
              size = "20"
              value = {Kelompok}
              onChange = {handleKelompokChange}/>
          </div>
            
          <div>
            <input type = "text"
              placeholder = "url gambar"
              size = "20"
              value = {imageSrc}
              onChange = {handleImgChange}/>
          </div>         
          
            <h3> {"nama : " + nama} </h3>

            <h3> {"NIM : " + NIM} </h3>

            <h3> {"Kelompok : " + Kelompok} </h3>

            <img src = {imageSrc} alt = "masukkan url gambar" width = "75" height = "100"/>
          
          <div>
            <Text tema={props.tema} />
          </div>
      </div>
  );
}

function Text(props) {
    const theme = useContext(ThemeContext);
    return (
      <p
        className="titleContext"
        style={{ color: theme.text }}
      >
        {theme.text}
      </p>
    );
  }

export default App; 