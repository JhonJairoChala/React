import React from 'react'
import {ButtonSubtraction} from '../../UI/ButtonSubtraction/ButtonSubtraction';
import {ButtonReset} from '../../UI/ButtonReset/ButtonReset';
import {ButtonAddition} from '../../UI/ButtonAddition/ButtonAddition';

export const Body = () => {
  return (
    <div>
        <p id="numberBody">0</p>
        <section>
            <ButtonSubtraction/>
            <ButtonReset/>
            <ButtonAddition/>
        </section>
    </div>
  )
}
