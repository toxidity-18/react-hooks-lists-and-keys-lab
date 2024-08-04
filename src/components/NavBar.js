import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => (
        <a
          href={`#${link}`}
          key={index} // Unique key for each <a> element
        >
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
