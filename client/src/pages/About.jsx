/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react"
import { aboutAmbiance, aboutFounder, expertChefs } from "../constants/data"
import '../assets/styles/about.css'
import { Reveal } from '../constants/Reveal'
import { motion } from "framer-motion"
import { StoreContext } from "../context/StoredContextProvider"

function About() {

  const { setActiveLink } = useContext(StoreContext);

  useEffect(() => {
    setActiveLink('about');
  },[])
  
  const HeroContent = () => {
    return (
      <div id="hero-container" className="particle-bg screen-max-width grid place-items-center mb-10">
        <div className="wrapper max-w-96 flex flex-col justify-center items-center p-1">
          <div className="founder-img mb-2">
            <motion.img src={aboutFounder.image_url} alt="founder of Meal mate" className="rounded-full" 
              initial={{scale : .5}} animate={{scale : 1}} transition={{delay : 1, duration : .5}}
            />
          </div>
          <Reveal re_color="#ff7e2e">
            <h1 className="founder-name text-xl font-bold mb-2 text-orange-600">{aboutFounder.name}</h1>
          </Reveal>
          <Reveal re_color="#ff7e2e">
            <h3 className="underline mb-5 font-bold text-orange-400">Founder of Meal Mate Restaurant</h3>
          </Reveal>
          <Reveal re_color="#501e03">
            <p className="founder-des font-semibold text-justify text-sm sm:text-base text-amber-950">{aboutFounder.text}</p>
          </Reveal>
        </div>
      </div>
    )
  }

  const Ambiance = () => {
    return (
      <div id="ambiance-container" className="screen-max-width mb-5">
        <motion.h1 className="text-xl text-center rubik-font mb-5 text-orange-500"
          initial={{opacity : 0, y : 100}} whileInView={{opacity : 1, y : 0}} transition={{duration : .5, type : "tween"}}
        >Ambiance & Environment</motion.h1>
        <div className="wrapper p-1 flex flex-col sm:flex-row w-full h-full justify-center items-center gap-5">
          <div className="text w-full sm:w-1/2 grid place-items-center">
            <Reveal re_color="#501e03">
              <p className="font-semibold text-justify text-sm sm:text-base text-amber-950 sm:p-5">{aboutAmbiance.text}</p>
            </Reveal>
          </div>
          <div className="img w-full sm:w-1/2 grid place-items-center">
            <img src={aboutAmbiance.image_url} alt="meal mate restaurant" className="rounded-xl w-full max-w-96"/>
          </div>
        </div>
      </div>
    )
  }

  const ExpertCard = ({e,i}) => {
    return (
      <motion.div className="expert-card w-60 flex flex-col"
        initial={{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : .75, delay : i * 0.35}}
      >
        <img src={e.image_url} alt="" className="mb-4"/>
        <h1 className="name font-semibold">{e.name}</h1>
        <p className="role text-amber-900 mb-1">{e.description}</p>
      </motion.div>
    )
  }

  const ExpertChefs = () => {
    return (
      <div id="experts-container" className="particle-bg screen-max-width">
        <motion.h1 className="text-2xl text-orange-600 mb-10 text-center rubik-font"
          initial={{opacity : 0, y : 100}} whileInView={{opacity : 1, y : 0}} transition={{duration : .5, type : "tween"}}
        >Expert Chefs.</motion.h1>
        <div className="wrapper flex gap-10 justify-evenly flex-wrap">
          {expertChefs.map((e,i) => (
            <ExpertCard e={e} key={i} i={i} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
    <HeroContent />
    <Ambiance />
    <ExpertChefs />
    </>
  )
}

export default About