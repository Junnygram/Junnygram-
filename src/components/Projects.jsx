import React from 'react';
import ProjectItem from './ProjectItem';
import foodstore from '../images/foodstore.png';
import userlogin from '../images/userlogin.png';
import datafinance from '../images/datafinance.png';
import stackeat from '../images/stackeat.png';
import willey from '../images/willey.png';
import youtube from '../images/youtube.png';
import userpersona from '../images/userpersona.png';
import dashboard from '../images/dashboard.png';
import admin from '../images/admin.png';
import propertymataaz from '../images/propertymataaz.png';
import cowrywise from '../images/cowrywise.png';
import userpersonaa from '../images/userpersonaa.png';
import monster from '../images/monster.png';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        {' '}
        Since the beginning of my journey as designer/developer, I've worked on
        multiple projects for myself , done internship in software companies and
        also collaborated with talented minds.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={propertymataaz}
          title="propertymataaz"
          library="nextjs"
          src="https://www.propertymataaz.com/"
          gitsrc="https://github.com/harmoniccoders/pmfe-rework"
        />

        <ProjectItem
          img={stackeat}
          title="stackeat"
          library="react"
          src=" https://stack-eat.onrender.com"
          gitsrc="https://github.com/Junnygram/stack-eat"
        />
        <ProjectItem
          img={willey}
          title="willey"
          library="react"
          src="https://willey123.onrender.com"
          gitsrc="https://github.com/Junnygram/willey-ecommerce"
        />
        <ProjectItem
          img={youtube}
          title="youtube"
          library="react"
          src="https://junnytube.netlify.app/"
          gitsrc="https://github.com/Junnygram/Youtube-clone"
        />
        <ProjectItem
          img={monster}
          title="monster"
          library="react"
          src=" https://monsterr-rolodex.netlify.app/"
          gitsrc="https://github.com/Junnygram/monster-rolodex"
        />
        <ProjectItem
          img={datafinance}
          title="datafinance"
          library="react"
          src="https://data-financee.netlify.app/"
          gitsrc="https://github.com/Junnygram/data-finance"
        />
        <ProjectItem
          img={userlogin}
          title="userlogin"
          library="react"
          src="https://olalogin-13ec0.web.app/"
          gitsrc="https://github.com/Junnygram/LoginandLogout"
        />
        <ProjectItem
          img={foodstore}
          title="foodstore"
          library="react"
          src="https://olaleye-s-food-app.web.app/"
          gitsrc="https://github.com/Junnygram/Food-app"
        />
        <ProjectItem
          img={dashboard}
          title="dashboard"
          library="nextjs"
          src="https://nextjsdashboard.netlify.app/"
          gitsrc="https://github.com/Junnygram/dashboard"
        />
        <ProjectItem
          img={userpersona}
          title="userpersona"
          library="react"
          src="https://olaleyereactportfolio.netlify.app/"
          gitsrc="https://github.com/Junnygram/my-portfolio"
        />

        <ProjectItem
          img={userpersonaa}
          title="userpersona2"
          library="react"
          src="https://olaleye-portfolio.netlify.app/"
          gitsrc="https://github.com/Junnygram/myportfolio"
        />
        <ProjectItem
          img={cowrywise}
          title="cowrywise"
          library="react"
          src="https://cowrywisex.netlify.app/"
          gitsrc="https://github.com/Junnygram/cowrywise"
        />
      </div>
    </div>
  );
};

export default Projects;
