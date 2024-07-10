'use client'
import React, { useCallback, useEffect, useState } from 'react'
import SideBanners from '../courses/_components/SideBanners'
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard'
import { useUser } from '@clerk/nextjs'
import InProgressCourseList from './_components/InProgressCourseList'
import GlobalApi from '@/app/_utils/GlobalApi'

const Dashboard = () => {
  const {user} = useUser();
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([])

  useEffect(()=>{
    user&&getAllUserEnrolledCourses();
  },[user])

  // get all user enrolled course list
  const getAllUserEnrolledCourses = useCallback(() => {
    GlobalApi.getUserAllEnrolledCourseList(user.primaryEmailAddress.emailAddress).then(res=> {
      console.log("courselist for dashboard");
      console.log(res)
      setUserEnrolledCourses(res.userEnrollCourses)
    })
  }, [user])

  return (
    <div className=" grid grid-cols-1 md:grid-cols-4">
    {/* left section */}
    <div className="col-span-3">
      {/* welcome banner */}
    <WelcomeBannerDashboard user={user}/>

    {/* inprogress course list */}
    <InProgressCourseList userEnrolledCourses={userEnrolledCourses}/>
    
    </div>
    {/* right section */}
    <div className="lg:block hidden">
      <SideBanners/>
    </div>



  </div>
  )
}

export default Dashboard
