import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CourseItem from "./CourseItem";
import Link from "next/link";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((res) => {
      setCourseList(res?.courseLists);
      console.log(res?.courseLists);
    });
  };

  return (
    <div className="p-5 bg-white rounded-lg m-5">
      {/* title and filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-blue-700">All courses</h2>
 

        <div>
          <Select>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">All</SelectItem>
              <SelectItem value="dark">paid</SelectItem>
              <SelectItem value="system">free</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* display courses */}
      <div className="grid col-span-2 lg:grid-cols-3 gap-5 mt-5">
        {courseList?.length > 0
          ? courseList.map((item, index) => (
            <Link href={'/course_preview/'+item.slug} key={index}>
              <div >
                <CourseItem course={item} />
              </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <div
                key={index}
                className="w-full h-[280px] rounded-xl bg-slate-200 animate-pulse"
              >
                <div className=" h-36 rounded-t-xl bg-slate-300 m-4"></div>
                <div className=" w-40 rounded-xl h-6 bg-slate-300 ml-4 "></div>
                <div className="ml-4 flex items-center mt-4">
                  <div className=" rounded-[50%] bg-slate-300 h-10 w-10"></div>
                  <div className=" ml-5 w-36 bg-slate-300 h-6 rounded-xl"></div>
                  
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CourseList;