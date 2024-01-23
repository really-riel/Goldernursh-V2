import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import avatar from "../../assets/userProfile.png";
import { user } from "../../utils/data";

const Profile = () => {
  /* const { user } = useStoreState((state) => state.auth); */
  return (
    <main className="flex flex-col Profile bg-nursh_cream">
      <section className="relative grid md:py-4 profileDetails grow ">
        <div className="relative flex flex-col items-center w-full tabletSection1 ">
          <div className="hidden tabletHeading md:flex md:items-center md:w-[80%] md:max-w-[690px] md:justify-between md:text-[clamp(1rem,_1rem_+_1vw,_2rem)] ">
            <h2>Profile Details</h2>
            <Link to={"/profile/edit"}>
              <h2
                role="button"
                className="tabletEditBtn text-nursh_dark_olive "
              >
                Edit
              </h2>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="container grow w-full h-full grid grid-rows-[30%_70%] md:rounded-card_border_radius overflow-hidden shadow-card_shadow md:max-w-[700px]  "
          >
            <div className="flex flex-col items-center justify-center gap-4 py-8 bg-white imageContainer ">
              <h2 className="mobileHeading text-[clamp(1rem,_1rem_+_1vw,_1.5rem)] md:hidden">
                Profile Details
              </h2>
              <img
                className="w-[7rem] h-[7rem] object-cover rounded-md shadow-card_shadow"
                src={user?.image ? user?.image : avatar}
                alt="profile pic"
              />
            </div>
            <div className="flex flex-col items-center justify-center h-full py-6 formContainer bg-nursh_cream grow">
              <form className="w-[90%] flex flex-col gap-1 ">
                <label htmlFor="profileName">Name:</label>
                <input
                  className="p-3 mb-3 bg-nursh_light_gold rounded-xl"
                  type="text"
                  id="profileName"
                  value={user.name}
                  readOnly
                />

                <label htmlFor="profileFirstName">E-mail:</label>
                <input
                  className="p-3 mb-3 bg-nursh_light_gold rounded-xl"
                  type="email"
                  id="profileFirstName"
                  value={user.email}
                  readOnly
                />

                <label htmlFor="phone">Phone:</label>
                <input
                  className="p-3 mb-3 bg-nursh_light_gold rounded-xl"
                  type="tel"
                  id="phone"
                  value={user.phone ? user.phone : "ADD PHONE NUMBER"}
                  readOnly
                />

                <label htmlFor="address">Address:</label>
                <input
                  className="p-3 mb-3 bg-nursh_light_gold rounded-xl"
                  type="text"
                  id="address"
                  readOnly
                  value={user.address ? user.address : "ADD ADDRESS"}
                />
              </form>
              <Link to={"/profile/edit"}>
                <p
                  role="button"
                  className="mt-3 editBtn  border-b-[0.2rem] border-nursh_dark_olive md:hidden"
                >
                  Edit Profile
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="tabletSection2 shapedividers_com-1822"></div>
      </section>
    </main>
  );
};

export default Profile;
