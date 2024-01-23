import React, { useState } from "react";

import { AiOutlineEdit } from "react-icons/ai";
import { motion } from "framer-motion";
import avatar from "../../assets/userProfile.png";
import { user } from "../../utils/data";

const ProfileEdit = () => {
  const [editName, setEditName] = useState(user.name);
  const [editEmail, setEditEmail] = useState(user.email);
  const [editPhone, setEditPhone] = useState(user.phone ? user.phone : "");
  const [editImage, setEditImage] = useState(user.image ? user.image : avatar);
  const [editAddress, setEditAddress] = useState(
    user.address ? user.address : ""
  );
  return (
    <main className="flex flex-col Profile bg-nursh_cream ProfileEdit">
      <section className="relative grid profileDetails md:py-4 grow">
        <div className="relative flex flex-col items-center w-full tabletSection1">
          <h2 className="hidden w-[80%] max-w-[700px] mb-4 text-left md:block">
            Edit your Profile
          </h2>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="container grow w-full h-full grid grid-rows-[30%_70%] md:rounded-card_border_radius overflow-hidden shadow-card_shadow md:max-w-[700px]  lg:grid-cols-[30%_70%] lg:grid-rows-1 "
          >
            <div className="flex flex-col items-center justify-center gap-4 py-8 bg-white imageContainer">
              <h2 className="mobileHeading text-[clamp(1rem,_1rem_+_1vw,_1.5rem)] md:hidden">
                Edit Profile
              </h2>
              <label htmlFor="editImage">
                <figure className="w-[7rem] h-[7rem] relative flex items-center justify-center cursor-pointer rounded-t-2xl overflow-hidden ">
                  <img
                    className="object-cover w-full h-full"
                    src={editImage}
                    alt="profile pic"
                  />
                  <div
                    className="editPhoto absolute bottom-0 bg-[rgba(0,_0,_0,_0.778)] w-full text-sm mx-auto text-white flex items-center justify-center gap-1
                  "
                  >
                    Edit Photo
                    <AiOutlineEdit className="text-l" />
                  </div>
                </figure>
              </label>
            </div>
            <div className="flex flex-col items-center justify-center h-full py-6 formContainer bg-nursh_cream grow">
              <form className="w-[90%] flex flex-col gap-1">
                <input
                  className="hidden p-3 mb-3 bg-nursh_light_gold rounded-xl"
                  type="file"
                  accept="image/*"
                  id="editImage"
                />
                <label htmlFor="profileName">Name</label>
                <input
                  className="p-3 mb-3 bg-nursh_light_gold rounded-xl"
                  type="text"
                  id="profileName"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />

                <label htmlFor="profileFirstName">E-mail</label>
                <input
                  className="p-3 mb-3 bg-nursh_light_gold rounded-xl"
                  type="email"
                  id="profileFirstName"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                />

                <label htmlFor="phone">Phone</label>
                <input
                  className="p-3 mb-3 bg-nursh_light_gold rounded-xl"
                  type="tel"
                  id="phone"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                />

                <label htmlFor="address">Address</label>
                <input
                  className="p-3 mb-3 bg-nursh_light_gold rounded-xl"
                  type="text"
                  id="address"
                  value={editAddress}
                  onChange={(e) => setEditAddress(e.target.value)}
                />
                <button className="py-3 text-[clamp(0.6rem,_0.5rem_+_1vw,_1.3rem)] mt-6 text-white bg-nursh_dark_olive">
                  Complete
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        <div className="tabletSection2 shapedividers_com-1822"></div>
      </section>
    </main>
  );
};

export default ProfileEdit;
