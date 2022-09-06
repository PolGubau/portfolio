import React from 'react'
import './MadeforModule.css'
export default function Madefor({ madeFor, lang, Languages }) {
  let intro;
  let madeForText;

  switch (lang) {

    case Languages[0]:
      if (madeFor) {
        intro = "For "
        madeForText = madeFor.English
      } else {
        intro = "Done by me for learning purposes."
      }
      break;
    case Languages[1]:
      if (madeFor) {
        intro = "Para "
        madeForText = madeFor.Spanish
      } else {
        intro = "Hecho por mi como aprendizaje."
      }
      break;
    case Languages[2]:
      if (madeFor) {
        intro = "Per a "
        madeForText = madeFor.Catalan

      } else {
        intro = "Fet per mi per apendre."
      }
      break;


    default:
      break;
  }


  if (madeFor) {
    return <p><span>{intro}</span><span className='bold'>{madeForText}</span></p>
  } else {
    return <p className='bold'>{intro}</p>
  }

}
