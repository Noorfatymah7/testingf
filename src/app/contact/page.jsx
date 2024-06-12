"use client";
import React, { useState } from "react";

const page = () => {
  const [form, setForm] = useState({});

  function handlerchng(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function submit(e) {
    e.preventDefault()
    console.log(form);
  }
  return (
    
    <div className="flex justify-center items-center mt-4 mb-4">
     
      <form
        className=" bg-slate-800/30 py-4 px-3  space-y-3 rounded-lg shadow-md shadow-black"
        onSubmit={submit}
        
      >
        
        {/* <div className="flex flex-col ">
          <label className="mb-2" htmlFor="">
            First Name
          </label>
          <input
            onChange={(e) => handlerchng(e)}
            className="px-2 py-1"
            name="fname"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="flex flex-col ">
          <label className="mb-2" htmlFor="">
            Last Name
          </label>
          <input
            className="px-2 py-1"
            name="lname"
            onChange={(e) => handlerchng(e)}
            type="text"
            placeholder="Last Name"
          />
        </div> */}

          <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col ">
          <label className="mb-2" htmlFor="">
            User Name
          </label>
          <input
            onChange={(e) => handlerchng(e)}
            className="px-2 py-1"
            name="uname"
            type="text"
            placeholder="User Name"
          />
        </div>
        <div className="flex flex-col ">
          <label className="mb-2" htmlFor="">
            Password
          </label>
          <input
            className="px-2 py-1"
            name="pname"
            onChange={(e) => handlerchng(e)}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="">
            Confirm Password
          </label>
          <input
            className="px-2 py-1"
            name="cname"
            onChange={(e) => handlerchng(e)}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="">
            Gmail
          </label>
          <input
            className="px-2 py-1"
            name="gname"
            onChange={(e) => handlerchng(e)}
            type="text"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="">
            Phone number
          </label>
          <input
            className="px-2 py-1"
            name="pname"
            onChange={(e) => handlerchng(e)}
            type="number"
            placeholder="Phone number"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="">
            Date of Birth
          </label>
          <input
            className="px-2 py-1"
            name="Dname"
            onChange={(e) => handlerchng(e)}
            type="date"
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="">
            CNIC-number
          </label>
          <input
            className="px-2 py-1"
            name="nname"
            onChange={(e) => handlerchng(e)}
            type="number"
            pattern="[0-9]{5}-[0-9]{7}-[0-9]" placeholder="XXXXX-XXXXXXX-X"
           
          />
        </div><div className="flex flex-col">
          <label className="mb-2 " htmlFor="">
            Description
          </label>
          <input
            className="px-2 py-1"
            name="Ename"
            onChange={(e) => handlerchng(e)}
            type="textarea"
            placeholder="Description"
          />
        </div>


        <button className="bg-blue-500 w-full py-2 rounded-md " type="submit">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default page;
