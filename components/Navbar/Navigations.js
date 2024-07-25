import React from 'react'
import Link from "next/link";


function Navigations() {
  return (
    <section className="nav-section flex-grow flex gap-7 items-center justify-end text-sm">

        <h3><Link className="tracking-wide font-light" href="/">Home</Link></h3>
        <h3><Link className="tracking-wide font-light" href="/">About</Link></h3>
        <h3><a className="tracking-wide font-light" href="#Education">Education</a></h3>
        <h3><a className="tracking-wide font-light" href="#Skill">Skills</a></h3>
        <h3><Link className="tracking-wide font-light" href="/Projects">Projects</Link></h3>
        <h3><Link className="tracking-wide font-light" href="/Projects">Docs <span style={{fontSize: "10px"}}>↗</span></Link></h3>

    </section>
  )
}

export default Navigations
