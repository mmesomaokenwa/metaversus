'use client';

import Image from "next/image";
import styles from "@/styles";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { GroupCard, TitleText, TypingText,  } from "@/components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image src="/map.png" alt="map" layout="fill" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-1 bg-[#5D6680] rounded-full">
          <Image src="/people-01.png" layout="fill" alt="people" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-1 bg-[#5D6680] rounded-full">
          <Image src="/people-02.png" layout="fill" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-1 bg-[#5D6680] rounded-full">
          <Image src="/people-03.png" layout="fill" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/4 left-[10%] w-[150px] h-[150px] p-1 bg-[#5D6680] rounded-[24px]">
          <GroupCard
            groupImgUrl={'/mask-group-01.png'}
            groupTitle={'The Upside Down'}
            groupSubtitle={'+273 has joined'}
            customStyles={'rounded-[24px]'}
          />
        </div>
        <div className="absolute top-[10%] left-[40%] w-[150px] h-[150px] p-1 bg-[#5D6680] rounded-[24px]">
          <GroupCard
            groupImgUrl={'/mask-group-02.png'}
            groupTitle={'Hawkins Labs'}
            groupSubtitle={'+273 has joined'}
            customStyles={'rounded-[24px]'}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
