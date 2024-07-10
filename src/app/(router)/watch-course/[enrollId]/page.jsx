'use client'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import {React, useCallback, useEffect, useState} from 'react'
import CourseContentSection from '../../course_preview/[courseId]/_components/CourseContentSection'
import CourseVideoDesccription from '../../course_preview/[courseId]/_components/CourseVideoDesccription'
import { toast } from 'sonner'

const WatchCourse = ({params}) => {
  const {user} = useUser();
  const [courseInfo, setCourseInfo] = useState([]);
  const [completedChapter, setCompletedChapter] = useState([]);

  const [activeChapterIndex, setActiveChapterIndex] = useState([]);

  useEffect(() => {
   params&&user&&getUserEnrolledCourseDetail();

  }, [params, user ])
  

  const getUserEnrolledCourseDetail = useCallback(() => {
    // get the enrolled course details
    GlobalApi.getUserEnrolledCourseDetails(params.enrollId, user.primaryEmailAddress.emailAddress).then(res => {
       // Extract completed chapter IDs
       setCompletedChapter(res.userEnrollCourses[0].completedChapter.map(completedChapter => completedChapter.chapterId))
    
    setCourseInfo(res.userEnrollCourses[0].courseList);
    })
  }, [params, user])

  const onChapterCompleted = (chapterId)=> {
    // Check if the chapter is already completed
    if (completedChapter.includes(chapterId)) {
      toast('Chapter already marked as completed');
      return;
    }
  
    GlobalApi.markChapterCompleted(params.enrollId, chapterId).then(res=>{
      console.log("save completed chapter");
      console.log(res);
      
      if (res) {
        // Update completedChapterIds state with the newly completed chapterId
        toast('Chapter Marked as completed');
        completedChapter(prevCompletedChapterIds => [...prevCompletedChapterIds, chapterId]);
        getUserEnrolledCourseDetail(); // Refresh enrolled course details
      }
    });
  }
  

  return courseInfo.name&& (
    <div>
    <div className='grid grid-col-1 md:grid-cols-3 p-5 gap-3'>
      {/* video desc & title */}
        <div className='col-span-2 bg-white'>
        <CourseVideoDesccription courseInfo={courseInfo} activeChapterIndex={activeChapterIndex} watchMode={true} 
        setChapterCompleted={(chapterId) => onChapterCompleted(chapterId)}/>

        </div>
        {/* course content */}
        <div className='lg:col-span-1 col-span-2'>
         <CourseContentSection courseInfo={courseInfo} isUserAlreadyEnrolled={true} 
         watchMode={true} 
         completedChapter={completedChapter}
         setActiveChapterIndex={(index)=>setActiveChapterIndex(index)}/>
        </div>

    </div>
</div>
  )
}

export default WatchCourse