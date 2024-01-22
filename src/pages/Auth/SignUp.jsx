import React, { useState } from "react";
import AuthSectionDesign from "../../components/AuthSectionDesign";
import { MdCloudUpload, MdDelete } from "react-icons/md";

import SmallLogo from "../../components/SmallLogo";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import Loader from "../../components/Loader";
import { AiOutlineGoogle } from "react-icons/ai";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const { state } = useLocation();

  /* const {
    auth: { setUser, setIsAdmin, setAdminRole },
    chat: { setChatAdminDetails },
  } = useStoreActions((actions) => actions); */

  const navigate = useNavigate();

  const handleNameFormatting = (e) => {};

  const handleSignUp = async (e) => {};

  const handleImageUpload = async (user) => {};

  const handleDeleteImage = async () => {};

  const checkIfUserIsAnAdmin = async (id) => {};

  const handleSignInWithGoogle = async () => {};

  return (
    <main className="Login SignUp grid Login text-[clamp(0.5rem,_0.7rem_+_1vw,_1rem)] md:grid-rows-[20%_80%] lg:grid-cols-[20%_80%] lg:grid-rows-1  bg-nursh_cream ">
      {isLoading && <Loader />}
      <AuthSectionDesign />

      <section className="w-full shadow-2xl loginSection2 md:shadow-none md:flex md:flex-col md:items-center md:justify-center md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section2Wrapper w-full h-full flex flex-col md:w-[80%] md:justify-center md:items-center md:gap-2 md:pt-8 lg:items-start lg:gap-8 lg:pt-4"
        >
          <p className="tabletLogin hidden text-[clamp(1rem,_0.5rem_+_1vw,_2rem) md:block md:text-center lg:text-left]">
            Hello, Glad to have you. <br /> You can Sign-up for an account
            below.
          </p>
          <div className="formContainer h-full w-full px-6 py-8 gap-4  flex flex-col bg-white max-w-[500px] shadow-card_shadow rounded-md m-auto md:w-[min(70%,_600px)] md:rounded-2xl md:shadow-card_shadow md:h-auto lg:mt-0 lg:h-auto  lg:pb-12 lg:mb-4 ">
            <SmallLogo />
            <p className="grid text-center mobileLogin place-content-center md:hidden">
              Hello, Glad to have you. <br /> You can Sign-up for an account
              <br />
              below.
            </p>
            <form
              className="flex flex-col gap-4 pt-[clamp(1rem,_0.5rem_+_1vw,_3rem)]"
              onSubmit={handleSignUp}
            >
              <div className="uploadImage border-[0.2rem] border-nursh_dark_olive w-[8rem] h-[8rem] mx-auto rounded-card_border_radius overflow-hidden">
                {imageFile ? (
                  <>
                    <figure className="object-cover w-full h-full">
                      <img
                        src={URL.createObjectURL(imageFile)}
                        alt="profile image"
                      />
                    </figure>
                    <button
                      className="deleteImage absolute bottom-0 top-0 bg-red-600 e-[2rem] h-[2rem] rounded-full grid place-content-center"
                      onClick={handleDeleteImage}
                      type="button"
                    >
                      <MdDelete className="text-white text-[1.5rem]" />
                    </button>
                  </>
                ) : (
                  <div className="grid h-full labelContainer place-content-center">
                    <label
                      htmlFor="image"
                      className="flex flex-col items-center justify-center text-sm image"
                    >
                      <MdCloudUpload className="text-[clamp(3rem,_1rem_+_1vw,_4rem)]" />
                      upload image
                    </label>
                  </div>
                )}
              </div>
              <input
                type="file"
                className="hidden p-3 outline-none bg-nursh_light_gold rounded-card_border_radius placeholder:text-black "
                id="image"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
              <label className="offscreen" htmlFor="name">
                Name
              </label>

              <input
                className="p-3 outline-none bg-nursh_light_gold rounded-card_border_radius placeholder:text-black "
                type="text"
                id="name"
                placeholder="First name   Last name"
                value={name}
                onChange={handleNameFormatting}
                required
              />

              <label className="offscreen" htmlFor="signUpEmail">
                E-mail Address
              </label>

              <input
                type="email"
                className="p-3 outline-none bg-nursh_light_gold rounded-card_border_radius placeholder:text-black "
                id="signUpEmail"
                placeholder="E-mail Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label className="offscreen" htmlFor="signUpPassword">
                password
              </label>

              <input
                id="signUpPassword"
                className="p-3 outline-none bg-nursh_light_gold rounded-card_border_radius placeholder:text-black "
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <label className="offscreen" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-3 outline-none bg-nursh_light_gold rounded-card_border_radius placeholder:text-black "
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <motion.button
                whileTap={{ scale: 0.8 }}
                className="py-3 mt-5 text-white signIn bg-nursh_dark_olive disabled:opacity-50"
                type="submit"
                disabled={isImageLoading}
              >
                Sign Up
              </motion.button>
            </form>
            <div className="relative flex items-center justify-center gap-4 or ">
              <div className="leftLine before:content-[''] before:absolute before:border-t-nursh_dark_olive before:border-[0.1rem] before:w-[30%] before:top-1/2 before:left-12 before:flex-grow"></div>
              <p>or</p>
              <div className="rightLine before:content-[''] before:absolute before:border-t-nursh_dark_olive before:border-[0.1rem] before:w-[30%] before:top-1/2 before:right-12 before:flex-grow"></div>
            </div>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="signInWithGoogle flex items-center justify-center gap-2 py-3 signInWithGoogle bg-nursh_dark_gold *:text-[clamp(0.5rem,_0.5rem_+_2vw,_2rem)]"
              onClick={handleSignInWithGoogle}
            >
              Sign Up With Google <AiOutlineGoogle />
            </motion.button>
            <p className="mx-auto my-2 suggestion  text-[clamp(0.6rem,_0.6rem_+_1vw,_1rem)]">
              Have an account already? Sign-in
              <Link to={"/auth/login"}>
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

export default SignUp;
