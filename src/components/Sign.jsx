import { signInWithGooglePopup } from '../util/firebases';
import React from 'react'


const Sign = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);

    }

  return (
    <div>

      <button onClick={logGoogleUser}>Google sign In</button>
    </div>
  )
}

export default Sign
