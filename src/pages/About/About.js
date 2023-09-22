import React from "react";
import Header from "../../components/Header/Header";
const About = () => {
  return (
    <>
      <Header showAs="Shadow" />
      <div className="about">
        <img
          src="https://res.cloudinary.com/dbrmekhog/image/upload/v1695419181/p4mlydb0tnzjuw9x2qc3.jpg"
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
