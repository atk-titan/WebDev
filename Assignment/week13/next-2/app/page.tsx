import axios from "axios";

async function getUser(){
  await new Promise((r)=>setTimeout(r,5000));
  const response = await axios.get("http://192.168.29.136:3000/api/user");
  
  return response.data;
}

// async Component
export default async function Home() {
  const userDets = await getUser();
  console.log(userDets)

  return (
    <div className="text-white text-8xl text-shadow-lg text-shadow-gray-700 font-bold">
      hii there
      <div>
        {userDets.name}
      </div>
      <div>
        {userDets.email}
      </div>
    </div>
  );
}
