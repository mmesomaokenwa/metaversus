const GroupCard = ({ groupImgUrl, groupTitle, groupSubtitle, customStyles }) => {
  return (
    <>
      <img
        src={groupImgUrl}
        alt={groupTitle}
        className={`w-full h-full object-cover ${customStyles}`}
      />
      <div className="absolute flex flex-col justify-center gap-2 right-0 bottom-0 left-0 p-4">
        <div className="w-full flex items-center gap-3">
          <div className="flex">
            {[1, 2, 3].map((item) => (
              <img
                key={item}
                src={`/people-0${item}.png`}
                alt="people"
                className={`w-[18px] h-[18px] object-contain ${item !== 1 && "ml-[-6px]"}`}
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