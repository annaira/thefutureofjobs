import React from "react"
import { navigate } from "gatsby"
import headerStyles from './header.module.css'

const Header = ({title}) => {
  return (
    <div>
      <h1 className={headerStyles.example}>{title}</h1>
    </div>
  )
}

export default Header
