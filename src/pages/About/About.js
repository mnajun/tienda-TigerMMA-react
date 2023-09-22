import React from "react";
import Header from "../../components/Header/Header";
const About = () => {
  return (
    <>
      <Header showAs="Shadow" />
      <div className="about">
        <img
          src="https://res.cloudinary.com/dbrmekhog/image/upload/v1695419689/kvyljdxpl6hzepig4pzb.png"
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
