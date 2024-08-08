import React from "react";
import { Card } from "./CardPool";
import { PoolDeatils } from "../../lib/utils";
import { dollar, locked } from "../../assets";

const Stake = () => {
  const handleCardClick = (id) => {};
  return (
    <div className="flex flex-col h-full w-full overflow-auto no-scrollbar bg-black">
      <div className="pink_gradient" />
      <div className="flex-grow">
        <div className="flex flex-col p-10 px-15 w-[70%] mx-auto justify-center">
          <h1 className="text-white font-bold text-5xl tracking-wide mb-5">
            Liquidity Pools
          </h1>
          <p className="text-dim-white font-poppins font-medium mt-3 text-base">
            Add liquidity to Stargate&apos;s omnichain protocol and earn
            stablecoin rewards on every Stargate transfer. Liquidity providers
            can also farm their LP tokens to receive STG token rewards.
          </p>
        </div>
        <div className="flex mt-10 bg-site-black w-[50%] mx-auto justify-center h-32 rounded-lg">
          <div className="flex flex-col w-[50%] mx-2 my-2">
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm m-3">
                Available to stake
              </span>
              <img src={dollar} className="w-5 m-2" alt="dollar" />
            </div>
            <div className="text-[#50BEAF] text-xl ml-3 my-2">$1500</div>
          </div>
          <div className="bg-gray-600 w-[1px] h-[80%] mt-2" />
          <div className="flex flex-col w-[50%] mx-2 my-2 justify-center">
            <div className="flex flex-col w-[100%] mx-2 my-2">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm m-3">Staked</span>
                <img src={locked} className="w-3.5 m-3" alt="locked" />
              </div>
              <div className="text-[#50BEAF] text-xl ml-3 my-2">$0</div>
            </div>
          </div>
        </div>
        <div className="flex text-gray-400 justify-center mt-10 mx-auto hover:underline hover:text-white cursor-pointer">
          Available Pools
        </div>
        <div className="p-10 h-full">
          <div className="flex flex-wrap justify-evenly w-full mx-auto mt-10">
            {PoolDeatils.map((card) => (
              <Card
                key={card.id}
                token={card.token}
                liquidity={card.liquidity}
                volume={card.volume}
                balance={card.balance}
                img={card.img}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="blue_gradient" />
    </div>
  );
};

export default Stake;
