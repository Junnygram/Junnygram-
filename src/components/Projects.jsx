import React from "react";
import ProjectItem from "./ProjectItem";
import foodstore from "../images/foodstore.png";
import userlogin from "../images/userlogin.png";
import datafinance from "../images/datafinance.png";
import stackeat from "../images/stackeat.png";
import willey from "../images/willey.png";
import youtube from "../images/youtube.png";
import userpersona from "../images/userpersona.png";
import dashboard from "../images/dashboard.png";
import admin from "../images/admin.png";
import propertymataaz from "../images/propertymataaz.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        {" "}
        "hbvugvhkbg ivyhbkhvgufyv hvughjbhbvugvhkbg ivyhbkhvgufyv
        hvughjbhbvugvhkbg ivyhbkhvgufyv hvughjbhbvugvhkbg ivyhbkhvgufyv
        hvughjb",
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={stackeat}
          title="stackeat"
          library="react"
          src=" https://stack-eat.onrender.com"
        />
        <ProjectItem
          img={willey}
          title="willey"
          library="react"
          src="https://willey123.onrender.com"
        />
        <ProjectItem
          img={youtube}
          title="youtube"
          library="react"
          src="https://junnytube.netlify.app/"
        />
        <ProjectItem
          img={datafinance}
          title="datafinance"
          library="react"
          src="https://data-financee.netlify.app/"
        />
        <ProjectItem
          img={userlogin}
          title="userlogin"
          library="react"
          src="https://olalogin-13ec0.web.app/"
        />
        <ProjectItem
          img={foodstore}
          title="foodstore"
          library="react"
          src="https://olaleye-s-food-app.web.app/"
        />
        <ProjectItem img={dashboard} title="dashboard" library="nextjs" />
        <ProjectItem
          img={userpersona}
          title="userpersona"
          library="react"
          src="https://olaleyereactportfolio.netlify.app/"
        />
        <ProjectItem
          img={propertymataaz}
          title="propertymataaz"
          library="nextjs"
          src=""
        />
        <ProjectItem img={admin} title="admin" library="nextjs" src="" />
      </div>
    </div>
  );
};

export default Projects;
