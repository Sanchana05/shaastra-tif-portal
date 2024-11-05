
import Numbersc from "./Numbersc.tsx";
import Texts1 from "./Texts1.tsx"
import Texts2 from "./Texts2.tsx"
const HeroSection: React.FC = () => { 

  const cardsData = [
    { targetNumber:250, startNumber: 105, title:"Startups" },
    { targetNumber: 75, startNumber: 26, title:"Companies incubated in research park"},
    { targetNumber: 20, startNumber: 9, title:"Project Domains" },
    { targetNumber: 350, startNumber: 260, title:"Online reach"},
  ];
  return(
    <div className="bg-[#9EC8B9]">
      <div className="">
      <p className="pt-11 flex justify-center items-center  bg-[#9EC8B9] text-4xl font-bold text-black">Creating new Innovation</p>
      <Texts1/>
      <p className="flex justify-center items-center  bg-[#9EC8B9] text-4xl font-bold text-black">Meets</p>
      <Texts2/>
</div>
    <div className=" grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 p-10">
    {cardsData.map((card, index) => (
      <Numbersc key={index} targetNumber={card.targetNumber} startNumber={card.startNumber} title={card.title} />
    ))}
  </div>
  </div>
  )

}

export default HeroSection;


