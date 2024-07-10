import { React, useState } from "react";
import { Lock, Play } from "lucide-react";

const CourseContentSection = ({ courseInfo, isUserAlreadyEnrolled, watchMode=false, setActiveChapterIndex, completedChapter}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // use to check the chapter completed or not
  const checkIsChapterCompleted = (chapterId)=>{
    return completedChapter.find(item => item.chapterId==chapterId)
  }

  // Check if courseInfo and its chapter property are present and if chapter is an array
  if (!courseInfo || !Array.isArray(courseInfo.chapter)) {
    return <div>Course content is not available.</div>;
  }

  return (
    <div className="p-3 bg-white rounded-[10px] mt-5">
      <h2>Contents</h2>
      {courseInfo.chapter.map((item, index) => (
        <div key={index}>
          <h2 className={`border rounded-[8px] px-4 m-2 flex justify-between p-2 cursor-pointer  ${activeIndex===index&&'bg-[blue] text-white'}
          ${isUserAlreadyEnrolled&&' hover:bg-[#0000FF] hover:text-white'}
          ${watchMode&&checkIsChapterCompleted(item.id)&&
          'border-green-800 bg-green-400'
          }
          `}
          onClick={() => {watchMode&&setActiveChapterIndex(index)
          watchMode&&setActiveIndex(index)
          }}
          >
            
            {index + 1}. {item.name}
            {
              activeIndex===index || isUserAlreadyEnrolled?
              <Play className="h-4 w-4 mt-1"/>
             : <Lock className="h-4 w-4" />
            }
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CourseContentSection;