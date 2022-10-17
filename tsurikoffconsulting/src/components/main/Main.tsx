import React, { useCallback } from 'react'
import './Main.scss'
// import photo from '../img/profileImage.png'
import Particles from 'react-particles';
import { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

//import Fade from 'react-reveal/Fade'
// import { Fade } from "react-awesome-reveal";
// import Tilt from 'react-parallax-tilt';
// import ReactTypingEffect from 'react-typing-effect'



export const Main = () => {


    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
    
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
      }, []);



    return (
        
        <div className="main">
        
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.5,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
            
            
        
        </div>
    )
}