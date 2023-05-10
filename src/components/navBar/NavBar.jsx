import React from "react";

const routesApp = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Social Networks",
    url: "/social-networks",
  },
  {
    name: "Counter +5",
    url: "/counter/1",
  },
  {
    name: "Counter +10",
    url: "/counter/2",
  },
];

export const NavBar = () => {
  return (
    <>
      <ul>
        {routesApp.map((data) => (
          <li key={data.url}>
            <a href={data.url}>{data.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
