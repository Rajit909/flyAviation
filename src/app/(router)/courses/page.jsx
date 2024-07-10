'use client'
import {React, useEffect} from "react";
import Welcomebanner from "./_components/Welcomebanner";
import CourseList from "./_components/CourseList";
import EventEmitter from 'events';
import SideBanners from "./_components/SideBanners";

const Courses = () => {
  useEffect(() => {
    // Adjust default maximum listener limit for EventEmitter
    if (typeof window !== 'undefined') {
        EventEmitter.defaultMaxListeners = 15;
    }
  }, []);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4">
      {/* left section */}
      <div className="col-span-3">
        {/* banner */}
        <Welcomebanner />     
      {/* courselist */}
        <CourseList/>

      </div>
      {/* right section */}
      <div className="lg:block hidden">
        <SideBanners/>
      </div>


    </div>
  );
};

export default Courses;