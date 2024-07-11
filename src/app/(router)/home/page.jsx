"use client";

import React, { useEffect, useState } from "react";


import Hero from "../_components/Hero/Hero";
import About from "../about/page";
import Partners from "../_components/Partners/Partners";
import Courses from "@/app/(router)/course/page";

import Testemonials from "../_components/Testemonials";
import Features from "../_components/Features";
import Register from "../register/page";
import Spinner from "../_components/Spinner";


const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    // Simulate data fetching (replace with your actual data fetching logic)
    setTimeout(() => {
        // Assume data is fetched after 2 seconds
        setData(/* your fetched data */);
        setLoading(false); // Set loading to false when data fetching is complete
    }, 500);
}, []);
  return (
    <>

   {loading ? (
     <Spinner/>
   ) : (
     <main>

   
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
    )}
    </>
  );
};

export default HomePage;
