import Image from "next/image";
import styles from "@/styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <Image
        src={imgUrl}
        alt="icon"
        width={30}
        height={30}
        objectFit="contain"
        className="w-1/2 h-1/2"
      />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      {title}
    </h1>
    <p className="mt-[16px] font-normal text-[14px] leading-[24px] text-[#B0B0B0]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
