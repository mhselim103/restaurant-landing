import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar, FaClock, FaUsers } from "react-icons/fa";
import TimePicker from "react-time-picker";
import design from "../assets/img/model-black.png";

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("10:00");
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center mt-10 gap-y-3">
        <h1 className="text-5xl italic font-bold text-black font-primary">
          Booking Form
        </h1>
        <p>
          Call (800) 123-4567 from 5AM - 11PM daily, or book online with
          OpenTable. Reservations required for parties of 6 or more.
        </p>
        <img src={design} alt="" />
      </div>
      <div className="my-16">
        <div className="flex flex-col items-center justify-between mb-8 lg:flex-row gap-y-4">
          <div>
            <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
              <FaCalendar />
              <div>Choose Date</div>
            </div>
            <ReactDatePicker
              className="input"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          {/* timepicker */}
          <div>
            <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
              <FaClock />
              <div>Choose Time</div>
            </div>
            <TimePicker
              className="input"
              clearIcon={false}
              clockIcon={false}
              onChange={setValue}
              value={value}
            />
          </div>
          <div>
            <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
              <FaUsers />
              <div>How many people?</div>
            </div>
            <input className="input" type="text" placeholder="1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
