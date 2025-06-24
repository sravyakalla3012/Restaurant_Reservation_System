import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  const [preference, setPreference] = useState("");
  const [members, setMembers] = useState(1);
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();


  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        '${BACKEND_URL}/api/v1/reservation/send',
        {
          firstName,
          lastName,
          email,
          phone,
          date,
          time,
          preference,
          members,
          notes,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setTime("");
      setDate("");
      setPreference("");
      setMembers(1);
      setNotes("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.avif" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <select class="table_prefrence"
                  value={preference}
                  onChange={(e) => setPreference(e.target.value)}
                >
                  <option value="" class="option_preference">Select Table Preference</option>
                  <option value="Window">Bay View</option>
                  <option value="Booth">Away from Entrances</option>
                  <option value="Patio">Corner Tables</option>
                  <option value="Patio">Outdoor Seating</option>
                  <option value="Bar">No Preference</option>
                </select>
                <select class="member_preference"
                  value={members}
                  onChange={(e) => setMembers(e.target.value)}
                >
                  <option value="1">1 Member</option>
                  <option value="2">2 Members</option>
                  <option value="3">3 Members</option>
                  <option value="4">4 Members</option>
                  <option value="5">5 Members</option>
                  <option value="6+">6+ Members</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Additional needs or services" rows="4" cols="70"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" onClick={handleReservation}>
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
