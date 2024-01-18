import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="p-8 Missing bg-nursh_cream">
      <h1 className="text-[clamp(1rem,_1rem_+_1vw,_3rem)]">Page not found</h1>
      <Link to={"/"}>
        <p className="mt-12 underline text-nursh_green">Go to Homepage</p>
      </Link>
    </main>
  );
};

export default Missing;
