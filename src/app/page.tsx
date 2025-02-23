import { Input } from "@/components/ui/input";

import { Button } from "../components/ui/button"

const HomePage = () => {
  return ( 
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500 p-6">Hello World</h1> 
      <Button>FSW 7</Button>
      <Input/>
    </div>
  );
}
 
export default HomePage;