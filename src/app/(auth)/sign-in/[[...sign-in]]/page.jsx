import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
    <div className="flex justify-center items-center">
    <SignIn />
    </div>
    </>
  );
}