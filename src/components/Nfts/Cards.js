import React, { useState } from "react";

import { cardData, cardDataUnbroken } from "../../assets/NftsData";
import NftPopup from "./NftPopup";
import { motion } from "framer-motion";
const Cards = () => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(cardData);

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.7 }}
    >
      <div className="mt-[-20px] px-4 small:px-6 max-w-[1240px] mx-auto bg-[black]">
        <div className="flex justify-center my-20 pt-8">
          <div className="rounded-full p-1 inline-flex bg-[#171717]">
            <button 
              onClick={() => setActive(cardData)}
              className={ `font-bold py-2 px-4 rounded-full
               ${active === cardData ?  "bg-yellow text-black" :" text-[#737373] bg-[#171717]" }`}
            >
              Broken
            </button>
            <button 
              className={ `font-bold py-2 px-4 rounded-full
               ${active === cardDataUnbroken ? "bg-yellow text-black" :  " text-[#737373] bg-[#171717]" }`}
              onClick={() => setActive(cardDataUnbroken)}
            >
              Unbroken
            </button>
          </div>
        </div>

        {/* mapping through an object to display the cards   */}
        {active === cardData && 
          <div className="flex gap-8 lg_lg:gap-16 max-w-[1240px] w-full flex-wrap justify-center ">
            {cardData.map(({ icon, title, desc, id }) => (
              <motion.button
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.7 }}
                key={id}
                className="text-black relative"
                onClick={() => setShowModal(true)}
              >
                <div className="nftcard hover:scale-105 bg-nftCard w-[280px] h-[320px] small_l:w-[342px] small_l:h-[414px] rounded-[16px] relative">
                  <p className="text-sm bg-yellow mt-3 absolute mr-4 top-0 right-0 px-[8px] py-[6px] rounded-2xl">
                    {desc}
                  </p>
                  <p className="text-white mt-2 absolute bottom-0 mb-4 ml-4">
                    {title}
                  </p>
                  <img
                    className="absolute bottom-0 right-0 mr-4 mb-4 w-[6%]"
                    src={icon}
                    alt="icon"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        }

            {/* Unbroken Nfts */}

        {active === cardDataUnbroken && 
          <div className="flex gap-8 lg_lg:gap-16 max-w-[1240px] w-full flex-wrap justify-center ">
            {cardDataUnbroken.map(({ icon, title, desc, id }) => (
              <motion.button
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.7 }}
                key={id}
                className="text-black relative rounded"
                onClick={() => setShowModal(true)}
              >
                <div className="nftcard hover:scale-105 bg-nftCard w-[280px] h-[320px] small_l:w-[342px] small_l:h-[414px] rounded-[16px] relative">
                  <p className="text-sm bg-yellow mt-3 absolute mr-4 top-0 right-0 px-[8px] py-[6px] rounded-2xl">
                    {desc}
                  </p>
                  <p className="text-white mt-2 absolute bottom-0 mb-4 ml-4">
                    {title}
                  </p>
                  <img
                    className="absolute bottom-0 right-0 mr-4 mb-4 w-[6%]"
                    src={icon}
                    alt="icon"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        }

        {/* Modal Card  */}
        {showModal ? <NftPopup setShowModal={setShowModal} /> : null}
      </div>
    </motion.div>
  );
};

export default Cards;
