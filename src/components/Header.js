import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <header
    >
      <nav
 
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>Landon Grammer</h1>
        </Link>
        <div>
          <h1>
            <Link
              to={
                props.page === 'info'
                  ? "/"
                  : "/info"
              }
              activeClassName={"stylesinpropisbadpractice"}
            >
              {props.page === 'info'
                ? "close"
                : "info"}
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}