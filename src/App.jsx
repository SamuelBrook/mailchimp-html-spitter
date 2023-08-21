import { useState } from 'react';
import './App.css';
import Interface from "./Interface.jsx";
import HTMLGeneration from "./HTMLGeneration.jsx";


const App = () => {
  //state
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [shortTitle, setShortTitle] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const [price, setPrice] = useState("");
  const [delPrice, setDelPrice] = useState("");
  const [poundPresent, setPoundPresent] = useState("");

  //methods
  const submitForm = () => {
      
    //get value input values
    const title = document.getElementById('title').value;
    const subtitle = document.getElementById('subtitle').value;
    const shortTitle = document.getElementById('buttontitle').value;
    const buttonLink = document.getElementById('buttonlink').value;
    const price = document.getElementById('price').value;
    const delPrice = document.getElementById('deletedprice').value;
    const checkBoxChecked = document.getElementById('checkbox').checked;

    //spit out HTML
    setSubmitted(true);

    //if offer present, put pound sign before delPrice input value
    if (checkBoxChecked) {
      setPoundPresent("&pound;");
    }  

    //set place the input values in the HTML displayed
    setTitle(title);
    setSubtitle(subtitle);
    setShortTitle(shortTitle);
    setButtonLink(buttonLink);
    setPrice(price);
    setDelPrice(delPrice);
  }



  return (
    <>
    {submitted ? <HTMLGeneration title={title} subtitle={subtitle} shortTitle=              {shortTitle} buttonLink={buttonLink} price={price} delPrice={delPrice}                  poundPresent={poundPresent}></HTMLGeneration> : <Interface submitForm=                  {submitForm}></Interface>}
    </>
  )
};

export default App;