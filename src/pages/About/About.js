import React from "react";
import Header from "../../components/Header/Header";
const About = () => {
  return (
    <>
      <Header showAs="Shadow" />
      <div className="about">
        <img
          src="https://res.cloudinary.com/dtpfo51rx/image/upload/v1670893249/swoosh/about/about_temp_background_ajb4ts.svg"
          alt="banner"
          className="about__banner"
        />
        <h1 className="about__title">
          Disculpas, esta pagina esta en construccion. Vuelva a intentar mas tarde.
        </h1>
      </div>
    </>
  );
};

export default About;
