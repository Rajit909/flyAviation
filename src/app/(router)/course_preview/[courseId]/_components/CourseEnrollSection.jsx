"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CourseEnrollSection = ({ courseInfo, isUserAlreadyEnrolled }) => {
  const membership = true;
  const { user } = useUser();
  const router = useRouter();
  useEffect(()=> {
    console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled);
  })

  // enroll to the course
  const onEnrollCourse = () => {
    GlobalApi.enrollToCourse(
      courseInfo?.slug,
      user?.primaryEmailAddress?.emailAddress
    ).then((res) => {
      console.log(res);

      if (res) {
        // message
        toast("User Enroll Successfull", {
          description: "User enrolled to this course",
          // action: {
          //   label: "Undo",
          //   onClick: () => console.log("Undo"),
          // }
        });

        // redirect to watch course
        router.push("/watch-course/" + res.createUserEnrollCourse.id);
      }
    });
  };
  return (
    <div className=" p-3 text-center rounded-[10px] bg-[blue] px-5 flex flex-col gap-3">
      {/* user has membership and already login  */}

      <h2 className="text-white text-[22px] font-bold  ">
        Enroll to the course
      </h2>
      {user && (membership || courseInfo.free)&&!isUserAlreadyEnrolled ? 
        <div className="px-5 flex flex-col gap-3">
          <h2 className="text-white font-light">
            Enroll now to Start Learn to build
          </h2>
          <Button
            className="bg-white hover:bg-white hover:text-primary text-[blue] rounded-[7px]"
            onClick={() => onEnrollCourse()}
          >
            Enroll now
          </Button>
        </div>
       : !user ? 
        <div className="px-5 flex flex-col gap-3">
          <h2 className="text-white font-light">
            Enroll now to Start Learn to build
          </h2>
          <Link href={"/sign-in"}>
            <Button className="bg-white hover:bg-white hover:text-primary text-[blue] rounded-[7px]">
              Enroll now
            </Button>
          </Link>
        </div>
       :  !isUserAlreadyEnrolled && 
        <div className="px-5 flex flex-col gap-3">
          <h2 className="text-white font-light">
            Buy Monthly Membership and get access to All courses
          </h2>
          <Button className="bg-white hover:bg-white hover:text-primary text-[blue] rounded-[7px]">
            Buy Membership
          </Button>
        </div>
      }
        {
          isUserAlreadyEnrolled&& 
          <div className="px-5 flex flex-col gap-3">
          <h2 className="text-white font-light">
            Continue to Learn this course
          </h2>
          <Link href={'/watch-course/'+isUserAlreadyEnrolled}>
          <Button className="bg-white hover:bg-white hover:text-primary text-[blue] rounded-[7px]">
            Continue
          </Button>
          </Link>
        </div>
        }

    </div>
  );
};

export default CourseEnrollSection;