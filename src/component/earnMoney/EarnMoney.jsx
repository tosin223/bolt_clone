import Button from "../shared/Button";
import fleetOwner from "../../asset/fleet-owner.png";
import restaurantOwner from "../../asset/restaurant-store-owner.png";
import courier from "../../asset/courier.png";
import driver from "../../asset/driver.png";

import { useState } from "react";
const EarnMoney = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1110px] mx-auto px-[1rem] pt-[7rem] pb-[4rem]">
        <div className="mb-8">
          <h2 className="text-[48px] leading-[56px] font-semibold text-center text-[#2f313f]">
            Earn money with Bolt
          </h2>
        </div>
        <div className="text-center justify-center gap-x-3 flex mb-8">
          <button
            onClick={() => setStep(0)}
            className="px-[1rem] py-[.4rem] rounded-full text-[14px] text-[#fafafb] bg-[#2e313f]"
          >
            Driver
          </button>
          <button
            onClick={() => setStep(1)}
            className="px-[1rem] py-[.4rem] rounded-full text-[14px] text-[#fafafb] bg-[#2e313f]"
          >
            Courier
          </button>
          <button
            onClick={() => setStep(2)}
            className="px-[1rem] py-[.4rem] rounded-full text-[14px] text-[#fafafb] bg-[#2e313f]"
          >
            Restaurant or store owner
          </button>
          <button
            onClick={() => setStep(3)}
            className="px-[1rem] py-[.4rem] rounded-full text-[14px] text-[#fafafb] bg-[#2e313f]"
          >
            Fleet owner
          </button>
        </div>
        <div className="flex justify-between items-center">
          {step === 0 && (
            <div className="w-[32rem]">
              {" "}
              <img className="rounded-lg" src={driver} alt="" />
            </div>
          )}
          {step === 1 && (
            <div className="w-[32rem]">
              <img className="rounded-lg" src={courier} alt="" />{" "}
            </div>
          )}
          {step === 2 && (
            <div className="w-[32rem]">
              <img className="rounded-lg" src={restaurantOwner} alt="" />
            </div>
          )}
          {step === 3 && (
            <div className="w-[32rem]">
              <img className="rounded-lg" src={fleetOwner} alt="" />
            </div>
          )}
          {step === 0 && (
            <div className="w-[30rem]">
              <div>
                <h3 className="font-semibold text-[#2f313f] leading-[48px] text-[40px] mb-6">
                  Drive and earn money
                </h3>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    1
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Drive more, earn more</h5>
                    </div>
                    <div className="w-[25rem]">
                      <p className="text-[#121D2B99]">
                        Our 150+ million riders will send you plenty of ride
                        requests. When demand is high, you can earn even more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    2
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Set your schedule</h5>
                    </div>
                    <div className="w-[25rem]">
                      <p className="text-[#121D2B99]">
                        Drive for as long and as often as you like. Weekdays;
                        weekends; evenings — fit driving around your lifestyle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    3
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Get paid each week</h5>
                    </div>
                    <div className="w-[25.5rem]">
                      <p className="text-[#121D2B99]">
                        You’ll receive your earnings at the end of each week —
                        no need to wait around for payday.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <Button
                  background="#061A370A"
                  fontWeight="600"
                  color="#2f313f"
                  fontSize="1rem"
                  width="9rem"
                  text=" Learn More"
                />
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="w-[30rem]">
              <div>
                <h3 className="font-semibold text-[#2f313f] leading-[48px] text-[40px] mb-6">
                  Make money delivering food
                </h3>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    1
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Earn extra income, fast</h5>
                    </div>
                    <div className="w-[25rem]">
                      <p className="text-[#121D2B99]">
                        There’s no subscription fee. You’ll receive your
                        earnings at the end of each week.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    2
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Make money whenever you like</h5>
                    </div>
                    <div className="w-[25rem]">
                      <p className="text-[#121D2B99]">
                        You decide when and how often you deliver — weekdays,
                        evenings, weekends, or just the occasional hour — it’s
                        up to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    3
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Deliver your way</h5>
                    </div>
                    <div className="">
                      <p className="text-[#121D2B99]">
                        Bike, scooter or car — you choose how to make
                        deliveries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <Button
                  background="#061A370A"
                  fontWeight="600"
                  color="#2f313f"
                  fontSize="1rem"
                  width="9rem"
                  text=" Learn More"
                />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className=" w-[30rem]">
              <div>
                <h3 className="font-semibold text-[#2f313f] leading-[48px] text-[40px] mb-6">
                  Increase your sales
                </h3>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    1
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Reach new customers</h5>
                    </div>
                    <div className="w-[25rem]">
                      <p className="text-[#121D2B99]">
                        Millions of our users are ordering food or goods from
                        restaurants and stores just like yours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    2
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Increase your earnings</h5>
                    </div>
                    <div className="w-[25rem]">
                      <p className="text-[#121D2B99]">
                        Our large network of users brings more customers and
                        business to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    3
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Let us handle delivery</h5>
                    </div>
                    <div className="w-[25rem]">
                      <p className="text-[#121D2B99]">
                        We’ll take care of the logistics, while you focus on
                        running your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <Button
                  background="#061A370A"
                  fontWeight="600"
                  color="#2f313f"
                  fontSize="1rem"
                  width="9rem"
                  text=" Learn More"
                />
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="w-[30rem]">
              <div>
                <h3 className="font-semibold text-[#2f313f] leading-[48px] text-[40px] mb-6">
                  Grow your transport business
                </h3>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    1
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Boost your earnings</h5>
                    </div>
                    <div className="w-[25rem]">
                      <p className="text-[#121D2B99]">
                        Our large rider community means more orders per day and
                        higher earnings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    2
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Manage your assets</h5>
                    </div>
                    <div className="w-[25rem]">
                      <p className="text-[#121D2B99]">
                        Easily view your vehicles, drivers and their current
                        status.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-3 w-[28rem]">
                  <p
                    className="w-6 mr-3 h-6 bg-[#27b973] text-white flex justify-center
                                items-center rounded-full text-xs font-semibold "
                  >
                    3
                  </p>
                  <div>
                    <div className="text-[18px] w-[18rem] text-[#2f313f] font-medium leading-[24px] mb-2">
                      <h5>Keep track of performance</h5>
                    </div>
                    <div className="w-[25rem]">
                      <p className="text-[#121D2B99]">
                        Get easy access to each driver’s completed trips,
                        invoices, and payout information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <Button
                  background="#061A370A"
                  fontWeight="600"
                  color="#2f313f"
                  fontSize="1rem"
                  width="9rem"
                  text=" Learn More"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EarnMoney;
