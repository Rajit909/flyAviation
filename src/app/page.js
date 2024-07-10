'use client'
import { useUser } from "@clerk/nextjs";
// import Courses from "./(router)/courses/page";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import HomePage from "./(router)/home/page";




export default function Home() {
  const router = useRouter();
  const {user, isLoaded} = useUser();

  useEffect(()=>{
    if(user){
      router.push('/dashboard')
    }else{
      isLoaded&&router.push('/home')
    }
  },[user, isLoaded, router])

  return (
    <>    
    <div>
      <main> 
      {/* <UserButton afterSignOutUrl="/sign-in" /> */}
        {/* <Courses/> */}
        <HomePage/>
      </main>
    </div>
    </>
  );
  }