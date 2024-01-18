import React, { useState } from "react";
import Loader from "../../components/Loader";
import AuthSectionDesign from "../../components/AuthSectionDesign";
import { motion } from "framer-motion";
import SmallLogo from "../../components/SmallLogo";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGoogle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Switch from "react-switch";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordvisible, setIsPasswordVisble] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {};

  const handleSignInWithGoogle = () => {};

  return (
    <main className="grid Login text-[clamp(0.5rem,_0.7rem_+_1vw,_1rem)] md:grid-rows-[20%_80%] lg:grid-cols-[20%_80%] ">
      {isLoading && <Loader />}
      <AuthSectionDesign />
      <section className="w-full shadow-2xl loginSection2 bg-nursh_cream md:flex md:flex-col md:items-center md:justify-center md:gap-8 ">
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section2Wrapper w-full h-full flex flex-col md:w-[80%] md:justify-center md:items-center md:gap-4 md:pt-8 lg:items-start lg:gap-8 lg:pt-4"
        >
          <p className="tabletLogin hidden text-[clamp(1rem,_0.5rem_+_1vw,_2rem) md:block md:text-center lg:text-left]">
            Hello, Welcome back. <br /> Good to have you
          </p>
          <div className="formContainer h-full w-full py-16  flex flex-col bg-white max-w-[600px] shadow-card_shadow rounded-md m-auto md:w-[min(70%,_600px)] md:rounded-2xl md:shadow-card_shadow2 md:h-auto lg:mt-0 lg:h-auto lg:w-full lg:pb-12 lg:mb-1  ">
            <SmallLogo />
            <p className="grid text-center mobileLogin place-content-center md:hidden ">
              Hello, Welcome back. <br /> Good to have you
            </p>
            <form
              className="flex flex-col gap-4 pt-[clamp(1rem,_0.5rem_+_1rem,_3rem)]"
              onSubmit={handleSignIn}
            >
              <label htmlFor="loginEmail">E-mail Address</label>
              <input
                className="p-4 outline-none bg-nursh_light_gold rounded-2xl"
                type="email"
                id="loginEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">password</label>
              <div className="flex items-center justify-center passwordWrapper bg-nursh_light_gold rounded-2xl ">
                <input
                  className="p-4 outline-none grow bg-nursh_light_gold rounded-2xl "
                  type={isPasswordvisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div
                  className="passwordVisibilityBtn *:mr-3 *:select-none grid place-content-center h-full w-[48px] "
                  onMouseDown={() => setIsPasswordVisble(true)}
                  onMouseUp={() => setIsPasswordVisble(false)}
                  onTouchStart={() => setIsPasswordVisble(true)}
                  onTouchEnd={() =>
                    setTimeout(() => {
                      setIsPasswordVisble(false);
                    }, 3000)
                  }
                  onTouchCancel={() =>
                    setTimeout(() => {
                      setIsPasswordVisble(false);
                    }, 3000)
                  }
                >
                  {isPasswordvisible ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center gap-1 select-none suggestions ">
                <Link to={"/auth/reset-password"}>
                  <motion.p
                    whileTap={{ scale: 0.8 }}
                    className="forgotPassword"
                  >
                    Forgot Password?
                  </motion.p>
                </Link>
                <div className="rememberMe">
                  <p>Remember me</p>
                  <Switch
                    uncheckedIcon={false}
                    checkedIcon={false}
                    checked={isRememberMe}
                    onColor="#084104"
                    className="switch"
                    onChange={() => setIsRememberMe(!isRememberMe)}
                    width={30}
                    height={15}
                    /* #084104  #9acd32*/
                  />
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="py-5 text-white signIn mt-7 bg-nursh_dark_olive"
              >
                Sign In
              </motion.button>
              <div className="relative flex items-center justify-center gap-4 or ">
                <div className="leftLine before:content-[''] before:absolute before:border-t-nursh_dark_olive before:border-[0.1rem] before:w-[30%] before:top-1/2 before:left-12 before:flex-grow"></div>
                <p>or</p>
                <div className="rightLine before:content-[''] before:absolute before:border-t-nursh_dark_olive before:border-[0.1rem] before:w-[30%] before:top-1/2 before:right-12 before:flex-grow"></div>
              </div>
            </form>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="flex items-center justify-center gap-2 py-3 signInWithGoogle bg-nursh_dark_gold *:text-[clamp(0.5rem,_1rem_+_2vw,_2rem)]"
              onClick={handleSignInWithGoogle}
            >
              Sign In With Google <AiOutlineGoogle />
            </motion.button>
            <p className="mx-auto my-2 signUpOption">
              Dont have an account? Sign-Up
              <Link to={"/auth/sign-up"}>
                <motion.span
                  className="text-nursh_dark_gold"
                  whileTap={{ scale: 0.8 }}
                >
                  {" "}
                  here
                </motion.span>
              </Link>
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Login;
