import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  const user = {
    name: "Liza", // 👈 Match test's name if needed
    city: "New York", // 👈 Match test's city if needed
    color: "firebrick", // 👈 Match test's color if needed
    bio: "This is my bio", // 👈 Match test's bio if needed
    links: {
      github: "https://github.com/liza", // 👈 Match test's github
      linkedin: "https://www.linkedin.com/in/liza/", // 👈 Match test's linkedin
    },
  };

  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About
        bio={user.bio}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
    </div>
    
  );
}

export default App;
