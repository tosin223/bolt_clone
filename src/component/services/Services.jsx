import { servicesDetails } from "../data/data";
import Card from "../card/Card";
const Services = () => {
  return (
    <div className="w-full ">
      <div className="max-w-[1110px] mx-auto px-[1rem] ">
        <div className="mb-8">
          <h2 className="text-[48px] leading-[56px] font-semibold text-center text-[#2f313f]">
            Our Services
          </h2>
        </div>
        <div className=" grid grid-cols-3 gap-4 pt-[2.5rem]">
          {servicesDetails.map((servicesDetail, i) => (
            <Card key={i} {...servicesDetail} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
