import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const PartnershipContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="pt-16 pb-12"
    >
      <div className="w-full flex flex-col  gap-[25px] mobile_l:flex-row-reverse mx-auto">
        <div className="mobile_l:w-[450px] w-full mobile:w-[85%]  mobile_l:m-auto h-fit p-5 bg-[#171717] rounded-md">
          <h1 className="w-full  text-[#FFD700] text-[28px] font-audio ">
            <span className="block">Donate to Anti-bullying</span>{" "}
          </h1>
          <p className="h-fit  my-4 text-[#D4D4D4] my-auto text-[13px]">
            Want to be part of something great?
          </p>
          <Link to="/donate">
            <button className="h-fit w-full my-auto bg-[#FFD700] py-2 px-2 text[#D4D4D4] text-[13px] rounded">
              Donate
            </button>
          </Link>
        </div>

        <p className="mobile_l:w-[60%] text-[#D4D4D4] text-[16px]">
          The Centers for Disease Control and Prevention(CDC) reports that
          bullying is a problem that occurs at least once a week in nearly 14%
          of public schools. International research carried out by P.K. Smith et
          al on the nature of school bullying indicated that between 10%-20% of
          pupils interviewed in England reported being bullied within a
          six-months timeframe.
          <br />
          <br />
          In Nigeria, we witnessed a gory incident of a 12-year-old high school
          student who was bullied to death by his classmates. This happened in a
          top-rated boarding school in Lagos, Nigeria on December 1, 2021.
          Before his death, the student recounted his experience of being beaten
          severely and severally by his classmates because he refused to oblige
          a request they made of him. This is just one of many instances where
          bullying is wreaking havoc in our society today.
          <br />
          <br />
          The Unbroken NFT project aims to create awareness of the dangers of
          bullying and implement measures to curb its occurrence, especially in
          high schools.
        </p>
      </div>
    </motion.div>
  );
};

export default PartnershipContent;
