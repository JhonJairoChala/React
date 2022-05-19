import React from 'react'
import { Home } from '../../UI/Home/Home'
import { ButtonUseState } from '../../UI/ButtonUseState/ButtonUseState'
import { ButtonUseCustom } from '../../UI/ButtonUseCustom/ButtonUseCustom'
import { ButtonUseEffect } from '../../UI/ButtonUseEffect/ButtonUseEffect'
import { ButtonRickAndMorty } from '../../UI/ButtonRickAndMorty/ButtonRickAndMorty'

export const Header = () => {
  return (
    <header>
      <Home/>
      <ButtonUseState/>
      <ButtonUseCustom/>
      <ButtonUseEffect/>
      <ButtonRickAndMorty/>
    </header>
  )
}
