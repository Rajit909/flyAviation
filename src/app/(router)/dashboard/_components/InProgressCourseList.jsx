// 'use client'
import React from 'react'
import ProgressCourseItem from './ProgressCourseItem'

const InProgressCourseList = ({userEnrolledCourses}) => {
  return (
    <div>
      <h2 className=' text-[blue] font-semibold m-3 bg-white p-3 text-[18px] rounded-[5px]'>Recently Enrolled Course</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5 mx-5 mt-10 m-5'>
          
          {userEnrolledCourses?.length > 0 ?
          
            userEnrolledCourses.map((course, index) => (
              <ProgressCourseItem key={index} course={course}/>
            )):
            [1,2,3].map((course, index)=> (
              <div key={index} className='w-full h-40 rounded-xl bg-slate-200 animate-pulse'></div>
            ))
          }  

        </div>
    </div>
  )
}

export default InProgressCourseList