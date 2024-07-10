import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";

const CourseVideoDesccription = ({
  courseInfo,
  activeChapterIndex,
  watchMode = false,
  setChapterCompleted
}) => {
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-extrabold ">{courseInfo.name}</h2>
      <h2 className=" text-gray-500 font-bold text-[14px] mb-3 ">
        {courseInfo.author}{" "}
      </h2>

      {/* video player */}
      <VideoPlayer
        videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url}
        poster={!watchMode ? courseInfo?.banner?.url : null}
      />

      {/* description */}
      <h2 className="mt-5 font-semibold text-[17px]">
        {watchMode ? (
          <span className="flex justify-between items-center">{courseInfo?.chapter[activeChapterIndex]?.name}
          <Button
          onClick = {()=> setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)}
          >
            Mark Completed
          </Button>
          </span>
        ) : (
          <span>About this course</span>
        )}
      </h2>

      <div>
        {watchMode ? (
          <Markdown className=" text-md mt-2">
            {courseInfo?.chapter[activeChapterIndex]?.shortDesc}
          </Markdown>
        ) : (
          <Markdown className=" text-md mt-2">
            {courseInfo.description}
          </Markdown>
        )}
      </div>
    </div>
  );
};

export default CourseVideoDesccription;
