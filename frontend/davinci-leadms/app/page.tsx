'use client'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {

  const router = useRouter();

  function getStartedButton() {
    router.push("/dashboard");
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-green-50 h-screen">
      <h1 className="text-4xl font-bold justify-center items-center">
        Welcome to Davinci LeadMS
      </h1>
      <p className="mt-4 text-lg">
        Your all-in-one lead management system.
      </p>
      <Button onClick={getStartedButton} className="m-10 p-5 bg-white hover:bg-blue-400 rounded-xl">
        Get Started
      </Button>
      
    </div>
  );
}
