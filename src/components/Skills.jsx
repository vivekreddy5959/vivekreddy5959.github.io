import {
  HTML,
  CSS,
  Github,
  Git,
  react,
  Python,
  Javascript,
  CPP,
  C,
  aws,
  gcp,
  azure,
  kubernetes,
  docker,
  terraform,
  sql
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="skills" className="EXPERIENCE p-5 mx-20 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className="IMG grid place-content-center p-5 grid-cols-3 gap-4 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
          {/* aws,azure,gcp,kubernetes,docker,terraform, sql */}
          <Image img={aws}></Image>
          <Image img={gcp}></Image>
          <Image img={azure}></Image>
          <Image img={kubernetes}></Image>
          <Image img={docker}></Image>
          <Image img={terraform}></Image>
          <Image img={C}></Image>
          <Image img={sql}></Image>
          <Image img={Python}></Image>
          <Image img={Git}></Image>
          <Image img={Github}></Image>
        </div>
      </section>
    </>
  );
};
export default Skills;
