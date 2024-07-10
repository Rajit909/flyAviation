import Image from "next/image";
import React from "react";

const CourseItem = ({ course }) => {
  return (
    <div className=" border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-300">
      <div>
        <Image
          src={course?.banner?.url}
          width={500}
          height={200}
          alt="banner"
          className="rounded-t-xl h-[120px] lg:h-[150px] object-cover]"
        />
      </div>
      <div className="flex flex-col gap-5 p-3">
        <h2 className="font-medium">{course?.name}</h2>
        <h2 className="text-[12px] text-gray-400">{course?.author}</h2>
       {/* {
        course?.chapter.length === 0 ? 
        <div className="flex items-center gap-5">
        <Image src="/images/youtub.jfif" width={50} height={50} alt="youtub" />
        <h2>Watch on Youtub</h2>
      </div> :
        <div className="flex items-center gap-5">
        <Image src="/images/chapter.jfif" width={50} height={50} alt="chapter"/>
        <h2>Chapters</h2>
      </div> 
       } */}
       <div className="flex items-center gap-5">
        <Image src="/images/chapter.jfif" width={30} height={30} alt="chapter"/>
        <h2 className="font-medium text-sm ">Total Chapters: {course?.totalChapters} </h2>
      </div> 
        <h2 className="text-[15px]">{course?.free ? "Free" : "Paid"}</h2>
      </div>
    </div>
  );
};

export default CourseItem;