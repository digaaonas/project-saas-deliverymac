"use client"

import { useRouter } from "next/navigation";

import { Button } from "../components/ui/button"

const HomePage = () => {
  const router = useRouter()
  const handlePushFswDonalds = () => {
    router.push("/fsw-donalds")
  }
  return ( 
    <div className="flex p-10">
      <Button variant="destructive" onClick={handlePushFswDonalds}>FSW-Donalds</Button>
    </div>
  );
}
 
export default HomePage;