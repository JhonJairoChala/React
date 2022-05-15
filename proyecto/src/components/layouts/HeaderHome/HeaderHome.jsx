import React from 'react'
import { Ancla } from '../../UI/Ancla/Ancla';
import {Logo} from '../../UI/Logo/Logo';
import { TitlePage } from '../../UI/TitlePage/TitlePage';

export const HeaderHome = () => {
  return(
    <header className='HeaderHome'>
      <Logo/>
      <TitlePage/>
      <Ancla/>
    </header>
  )
}
