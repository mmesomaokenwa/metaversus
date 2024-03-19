import Image from "next/image";

const GroupCard = ({ groupImgUrl, groupTitle, groupSubtitle, customStyles }) => {
  return (
    <>
      <Image
        src={groupImgUrl}
        alt={groupTitle}
        layout="fill"
        objectFit="cover"
        className={`${customStyles}`}
      />
      <div className="absolute flex flex-col justify-center gap-2 right-0 bottom-0 left-0 p-4">
        <div className="w-full flex items-center gap-3">
          <div className="flex">
            {[1, 2, 3].map((item) => (
              <Image
                key={item}
                src={`/people-0${item}.png`}
                alt="people"
                width={18}
                height={18}
                objectFit="contain"
                className={`${item !== 1 && "ml-[-6px]"}`}
              />
            ))}
          </div>
          <p className="text-white text-[12px] truncate">{groupSubtitle}</p>
        </div>
        <p className="text-white text-[16px] font-bold truncate">{groupTitle}</p>
      </div>
    </>
  );
}

export default GroupCard