import { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fundrasing-intern-backend-production.up.railway.app/api/leaderboard").then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data.length) return null;

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-520q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z"/></svg>Leaderboard</h2>
      <ol className="list-decimal list-inside text-gray-700">
        {data.map((user, index) => (
          <li key={index}>{user.name} - ₹{user.amount}</li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;
