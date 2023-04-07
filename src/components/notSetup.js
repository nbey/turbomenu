import React from "react"
import Logo from "../assets/logo.svg"
import Man from "../assets/404.png"
import { Link } from "gatsby"

export default function NotFound(props) {
  const block = "error"

  return (
    <div className={block}>
      <img src={Logo} alt='TurboMenu Logo' />

      <img
        className={`${block}-img`}
        src={Man}
        alt='Man searching underground'
      />
      <h1>Oops, the page you’re looking for hasn't been set up yet.</h1>
      <p>Tell the good people of <b>{props.title}</b> to finish setting up!</p>

      <Link to='/'>Back to homepage</Link>
    </div>
  )
}
