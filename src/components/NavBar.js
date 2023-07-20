import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const mylinks = links.map( (link)=>{
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{mylinks}</nav>;
}

export default NavBar;
