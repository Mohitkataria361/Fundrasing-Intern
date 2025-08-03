import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user").then((res) => {
      setUser(res.data);
    });
  }, []);

  if (!user) return <p>Loading dashboard...</p>;

  return (
    <div className="bg-white shadow-md rounded-2xl space-y-3 p-6 max-w-xl mx-auto mb-8">
      <h2 className="flex gap-2 text-xl font-semibold text-gray-800 mb-4">
        Welcome, {user.name}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5985E1"
        >
          <path d="m430-500 283-283q12-12 28-12t28 12q12 12 12 28t-12 28L487-444l-57-56Zm99 99 254-255q12-12 28.5-12t28.5 12q12 12 12 28.5T840-599L586-345l-57-56ZM211-211q-91-91-91-219t91-219l120-120 59 59q7 7 12 14.5t10 15.5l148-149q12-12 28.5-12t28.5 12q12 12 12 28.5T617-772L444-599l-85 84 19 19q46 46 44 110t-49 111l-57-56q23-23 25.5-54.5T321-440l-47-46q-12-12-12-28.5t12-28.5l57-56q12-12 12-28.5T331-656l-64 64q-68 68-68 162.5T267-267q68 68 163 68t163-68l239-240q12-12 28.5-12t28.5 12q12 12 12 28.5T889-450L649-211q-91 91-219 91t-219-91Zm219-219ZM680-39v-81q66 0 113-47t47-113h81q0 100-70.5 170.5T680-39ZM39-680q0-100 70.5-170.5T280-921v81q-66 0-113 47t-47 113H39Z" />
        </svg>
      </h2>
      <p className="text-gray-600">
        Referral Code: <strong>{user.referralCode}</strong>
      </p>
      <div className="flex items-center justify-center">
        <div className="flex-col justify-center">
          <div className="Title text-2xl">Total Donations Raised</div>
          <div className="Amount flex justify-center text-5xl">
            ₹{user.donationsRaised}
          </div>
          <div className="DonateNow flex justify-center m-5">
            <button
              className="bg-red-600 p-3 px-6 text-white border-2 border-transparent rounded-md 
  transition-all duration-300 ease-in-out 
  hover:border-black hover:bg-red-700 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Donate Now!
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-gray-700 mb-2">Rewards</h3>
        <ul className="space-y-2 list-inside list-none text-gray-600">
          <li className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              className="bg-orange-500  rounded-full"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFF55"
            >
              <path d="M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" />
            </svg>
           <div className="priceWorth">₹5000 - Gold Badge</div>
          </li>
          <li className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bg-gray-500 rounded-full"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" />
            </svg>
            <div className="priceWorth">₹2500 - Silver Badge</div>
          </li>
          <li className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-full bg-[#A52A2A] "
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" />
            </svg>
            <div className="priceWorth">₹1000 - Bronze Badge</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
