import React, { useState } from "react";
import { staffsData, user } from "../../utils/data";
import { BiWifiOff } from "react-icons/bi";
import { MdAddCircleOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

const Staffs = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isHandlingAFunction, setIsHandlingAFunction] = useState(false);
  const [isLogoutOptOpen, setIsLogOutOptOpen] = useState(false);
  const [deleteStaff, setDeleteStaff] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const adminRole = "admin";

  const timestampConverter = (timestamp) => {
    if (!timestamp) return;
    const date = new Date(timestamp * 1000); // convert Firebase ServerTimestamp to a Date object
    const formattedDate = date.toLocaleString("en-US", {
      month: "short", // abbreviated month name (e.g. "May")
      day: "numeric", // day of the month (e.g. "15")
      year: "numeric", // full year (e.g. "2020")
      hour: "numeric", // hour (e.g. "8")
      minute: "2-digit", // minute with leading zero (e.g. "00")
      hour12: true, // use 12-hour format (e.g. "am/pm")
    });

    return formattedDate;
  };

  const handleDeleteStaff = async (email) => {
    try {
    } catch (error) {}
  };

  return (
    <>
      <main className="flex items-center justify-center py-4 Staffs text-[clamp(0.5rem,_0.5rem_+_1vw,_1rem)]">
        {isLoading && <Loader />}
        {staffsData.docItems?.length > 0 ? (
          <div className="staffsContainer w-[95%] grid gap-2 ">
            {isHandlingAFunction && <Loader />}
            <h2>Staff Lists</h2>
            {adminRole === "admin" && (
              <p>
                Add or remove From existing <br />
                Staff List.
              </p>
            )}

            <section className="grid gap-8 mx-8 staffsList">
              {staffsData?.docItems.map((item, index) => (
                <div
                  className={`
                  staffCard
                  shadow-card_shadow flex flex-col p-1
                   md:flex-row rounded-card_border_radius text-[clamp(0.3rem,_0.4rem_+_1vw,_0.8rem)]
                    ${
                      user.email === item.email
                        ? `activeUser bg-nursh_cream border-[2px] border-solid border-nursh_dark_gold `
                        : ""
                    }`}
                  key={index}
                >
                  <div className="flex flex-col px-2 staffMain">
                    <figure className="w-[100px] h-[100px] mx-auto md:w-[120px] md:h-[120px]">
                      <img
                        className="object-cover w-full h-full rounded-card_border_radius"
                        src={item.image}
                        alt=""
                      />
                    </figure>
                    <div className="nameContainer w-fit shadow-card_shadow rounded-3xl grid place-items-center -mt-[0.8rem] p-1 mx-auto bg-nursh_cream font-medium text-center">
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <div
                    className="grid divide-x-2 border-nursh_dark_olive staffMainDetails md:grow "
                    style={
                      adminRole === "admin"
                        ? { gridTemplateColumns: " repeat(4, 1fr)" }
                        : { gridTemplateColumns: " repeat(3, 1fr)" }
                    }
                  >
                    <div className="grid my-4 emailContainer place-items-center staffCardSections">
                      <p>Email</p>
                      <p className="font-semibold text-center bold">
                        {item.email}
                      </p>
                    </div>
                    <div className="grid my-4 roleContainer place-items-center staffCardSections">
                      <p>Role</p>
                      <p className="font-semibold text-center bold">
                        {item.role}
                      </p>
                    </div>
                    <div
                      className="grid my-4 lastLoginContainer place-items-center staffCardSections"
                      style={
                        adminRole === "admin" ? null : { borderRight: "none" }
                      }
                    >
                      <p>last login</p>
                      <p className="font-semibold text-center bold">
                        {timestampConverter(item.lastLogin)}
                      </p>
                    </div>

                    {adminRole === "admin" && (
                      <div className="grid my-4 actionContainer place-items-center staffCardSections">
                        <p>Action</p>
                        <button
                          className="p-2 rounded deleteContainer bg-nursh_light_gold"
                          disabled={user.email === item.email ? true : false}
                          onClick={() => {
                            setIsLogOutOptOpen(true);
                            setDeleteStaff(item);
                          }}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </section>

            {isDisplayed && (
              <section className="addNewStaff">
                <div className="addNewStaffContainer" ref={divRef}>
                  <div className="headerContainer">
                    <div className="header">
                      <figure>
                        <img src={addNewStaffIcon} alt="" />
                      </figure>
                      <div className="heading">
                        <p>ADD NEW STAFF</p>
                      </div>
                    </div>
                  </div>
                  <div className="formContainer">
                    <form onSubmit={handleAddStaff}>
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Last name First name"
                        value={newStaffName}
                        onChange={(e) => setNewStaffName(e.target.value)}
                        required
                      />
                      <label htmlFor="email">E-mail:</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={newStaffEmail}
                        onChange={(e) => setNewStaffEmail(e.target.value)}
                        required
                      />
                      <label htmlFor="role">Role:</label>
                      <input
                        type="text"
                        id="role"
                        placeholder="Role"
                        value={newStaffRole}
                        onChange={(e) => setNewStaffRole(e.target.value)}
                        required
                      />
                      <button>Add Staff</button>
                    </form>
                  </div>
                </div>
              </section>
            )}
            {adminRole === "admin" && (
              <button
                className="flex items-center justify-center gap-1 px-4 text-white addNewButton bg-nursh_dark_olive text-[clamp(0.3rem,_0.4rem_+_1vw,_0.8rem)] ml-auto"
                onClick={() => setIsDisplayed(!isDisplayed)}
              >
                Add new <MdAddCircleOutline />
              </button>
            )}
          </div>
        ) : docItems?.length === 0 ? (
          <section className="errorMsg">
            <p>No Staff list available</p>
            <p>
              Check Internet Connection <BiWifiOff />
            </p>
          </section>
        ) : null}
      </main>
      {isLogoutOptOpen && (
        <OptionsPopUp
          handleDeleteStaff={handleDeleteStaff}
          deleteStaff={deleteStaff}
          setIsLogOutOptOpen={setIsLogOutOptOpen}
          type={"staffs"}
        />
      )}
    </>
  );
};

export default Staffs;
