import React, { useState } from "react";
import AuthSectionDesign from "../../components/AuthSectionDesign";
import SmallLogo from "../../components/SmallLogo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    /*  try {
      await sendPasswordResetEmail(auth, email);
      toast.success(
        "An email with instructions to reset your password has been sent. Check your email."
      );
    } catch (error) {
      console.error(error);
      toast.error("Error occurred: try again🙇‍♂️");
    } */
  };

  return (
    <main className="Login SignUp grid Login text-[clamp(0.5rem,_0.7rem_+_1vw,_1rem)] md:grid-rows-[20%_80%] lg:grid-cols-[20%_80%] lg:grid-rows-1  bg-nursh_cream  ResetPassword">
      <AuthSectionDesign />

      <section className="w-full shadow-2xl loginSection2 md:shadow-none md:flex md:flex-col md:items-center md:justify-center md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section2Wrapper w-full h-full flex flex-col md:w-[80%] md:justify-center md:items-center md:gap-2 md:pt-8 lg:items-start lg:gap-8 lg:pt-4"
        >
          {/* <p className="tabletLogin hidden text-[clamp(1rem,_0.5rem_+_1vw,_2rem) md:block md:text-center lg:text-left]">
            Reset Password
          </p> */}
          <div className="formContainer h-full w-full px-6 py-8 gap-4  flex flex-col bg-white max-w-[500px] shadow-card_shadow rounded-md m-auto md:w-[min(70%,_600px)] md:rounded-2xl md:shadow-card_shadow md:h-auto lg:mt-0 lg:h-auto  lg:pb-12 lg:mb-4">
            <SmallLogo />
            <p className="grid text-center text-[clamp(0.9rem,_1rem_+_1vw,_1.5rem)] mobileLogin place-content-center ">
              Reset Password
            </p>
            <form
              className="flex flex-col gap-4 pt-[clamp(1rem,_0.5rem_+_1vw,_3rem)]"
              onSubmit={handleResetPassword}
            >
              <label htmlFor="loginEmail" className="offscreen ">
                E-mail Address
              </label>
              <input
                className="p-3 outline-none bg-nursh_light_gold rounded-card_border_radius placeholder:text-black"
                type="email"
                id="loginEmail"
                value={email}
                placeholder="E-mail Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <motion.button
                whileTap={{ scale: 0.8 }}
                className="py-3 mt-5 text-white signIn bg-nursh_dark_olive"
              >
                Reset Password
              </motion.button>
              <div className="options flex items-center justify-between text-[clamp(0.5rem,_1rem_+_1vw,_1rem)]">
                <Link to={"/auth/login"}>
                  <motion.p
                    whileTap={{ scale: 0.8 }}
                    className="border-b-2 border-nursh_green option"
                  >
                    Login
                  </motion.p>
                </Link>
                <Link
                  to={"/auth/sign-up"}
                  className="border-b-2 option border-nursh_green"
                >
                  <motion.p whileTap={{ scale: 0.8 }}>Sign Up</motion.p>
                </Link>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ResetPassword;
