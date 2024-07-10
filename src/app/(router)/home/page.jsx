"use client";

import React from "react";

import Hero from "../_components/Hero/Hero";
import About from "../about/page";
import Partners from "../_components/Partners/Partners";
import Courses from "@/app/(router)/course/page";

import Testemonials from "../_components/Testemonials";
import Features from "../_components/Features";
import Register from "../register/page";


const HomePage = () => {
  return (
    <>
    <main>
        {/* nav */}
    

{/* hero */}
    <Hero/>

    {/* about */}
    <About/>

    {/* partners */}
    <Partners/>


    {/* course */}

   <Courses/>


    {/* register */}
    <Register/>


    {/* testemonials */}
  <Testemonials/>

    {/* features */}
    <Features/>
   

    {/* footer */}

    

      </main>
    </>
  );
};

export default HomePage;
