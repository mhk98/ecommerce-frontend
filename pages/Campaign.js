import React, { useState, useEffect } from "react";

const Countdown = () => {
  // Initializing state for countdown timers
  const [campaign1, setCampaign1] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [campaign2, setCampaign2] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const now = new Date().getTime();
    const startDate1 = new Date("2024-08-22").getTime();
    const startDate2 = new Date("2024-08-30").getTime();

    const calculateTimeDifference = (startDate) => {
      const timeDifference = startDate - now;
      return {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
      };
    };

    setCampaign1(calculateTimeDifference(startDate1));
    setCampaign2(calculateTimeDifference(startDate2));

    const countdownInterval = setInterval(() => {
      setCampaign1((prev) => {
        const updated = { ...prev };
        updated.seconds--;
        if (updated.seconds < 0) {
          updated.seconds = 59;
          updated.minutes--;
          if (updated.minutes < 0) {
            updated.minutes = 59;
            updated.hours--;
            if (updated.hours < 0) {
              updated.hours = 23;
              updated.days--;
              if (updated.days < 0) {
                clearInterval(countdownInterval);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        return updated;
      });

      setCampaign2((prev) => {
        const updated = { ...prev };
        updated.seconds--;
        if (updated.seconds < 0) {
          updated.seconds = 59;
          updated.minutes--;
          if (updated.minutes < 0) {
            updated.minutes = 59;
            updated.hours--;
            if (updated.hours < 0) {
              updated.hours = 23;
              updated.days--;
              if (updated.days < 0) {
                clearInterval(countdownInterval);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        return updated;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div>
      <h3 className="mb-6">Upcoming Campaigns</h3>
      {/* First Campaign */}
      <div className="grid grid-cols-2">
        <div>
          <img
            src="https://i.ibb.co/Wcfx6Dm/happyhour.png"
            alt=""
            width="180"
          />
          <p className="text-[#fe3703] font-bold">Campaign 1 Starts In</p>
        </div>
        <div className="campaign-one flex justify-between w-44 h-full gap-2 mb-5">
          <div>
            <div className="time bg-[#3d444e] text-white p-2.5 rounded-md text-xl">
              <span>{campaign1.days}d</span>
            </div>
            <div className="time bg-[#3d444e] text-white p-2.5 rounded-md text-xl mt-2.5">
              <span>{campaign1.minutes}m</span>
            </div>
          </div>
          <div>
            <div className="time bg-[#3d444e] text-white p-2.5 rounded-md text-xl">
              <span>{campaign1.hours}h</span>
            </div>
            <div className="time bg-[#3d444e] text-white p-2.5 rounded-md text-xl mt-2.5">
              <span>{campaign1.seconds}s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Campaign */}
      <div className="grid grid-cols-2 ">
        <div>
          <img src="https://i.ibb.co/47PvCvh/fashion.png" alt="" width="180" />
          <p className="font-bold text-[#fe3703]">Campaign 2 Starts In</p>
        </div>
        <div className="campaign-one flex justify-between w-44 h-full gap-2 mb-5">
          <div>
            <div className="time bg-[#3d444e] text-white p-2.5 rounded-md text-xl">
              <span>{campaign2.days}d</span>
            </div>
            <div className="time bg-[#3d444e] text-white p-2.5 rounded-md text-xl mt-2.5">
              <span>{campaign2.minutes}m</span>
            </div>
          </div>
          <div>
            <div className="time bg-[#3d444e] text-white p-2.5 rounded-md text-xl">
              <span>{campaign2.hours}h</span>
            </div>
            <div className="time bg-[#3d444e] text-white p-2.5 rounded-md text-xl mt-2.5">
              <span>{campaign2.seconds}s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
