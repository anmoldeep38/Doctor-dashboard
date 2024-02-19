import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const weeklyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DoctorsdashboardPage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    {
      label: (
        <Img
          className="h-[18px] mt-[21px] text-blue_gray-100"
          src="images/img_home.svg"
          alt="home"
        />
      ),
    },
    { label: <Img className="h-5" src="images/img_file.svg" alt="file" /> },
    {
      label: (
        <Img
          className="h-[19px] w-[19px]"
          src="images/img_clock.svg"
          alt="clock"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[18px] w-[18px]"
          src="images/img_television.svg"
          alt="television"
        />
      ),
    },
    { label: <Img className="h-5" src="images/img_search.svg" alt="search" /> },
  ];

  return (
    <>
      <div className="bg-gray-900 flex sm:flex-col md:flex-col flex-row font-manrope gap-[54px] items-start justify-end mx-auto p-[25px] sm:px-5 w-full">
        <Sidebar className="!sticky !w-[60px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <Img
            className="h-[34px] ml-5 mr-[5px] w-[34px]"
            src="images/img_frame.svg"
            alt="frame"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: "19px",
                height: "60px !important",
                flexDirection: "column",
                borderRadius: "20px",
                [`&:hover, &.ps-active`]: {
                  color: "#ffffff",
                  backgroundColor: "#2c3a58ff !important",
                },
              },
            }}
            className="flex flex-col items-center justify-end mb-5 mt-[71px] pt-5 w-full"
          >
            <div className="flex flex-col gap-[13.99px] items-center justify-start w-full">
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <div className="flex flex-col gap-8 items-center justify-end mt-[325px] w-full">
              <MenuItem>
                <div className="flex items-center justify-end">
                  <Img
                    className="h-9 md:h-auto mt-[18px] object-cover rounded-[22px] w-[56%]"
                    src="images/img_imageremovebgpreview.png"
                    alt="imageremovebgpr"
                  />
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex items-center justify-end">
                  <Img
                    className="h-[18px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end p-[25px] md:px-5 rounded-[40px] w-full">
          <div className="flex md:flex-col flex-row md:gap-12 items-center justify-between mt-[23px] w-[96%] md:w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start w-[62%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Text
                  className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtManropeExtraBold28"
                >
                  <>
                    hello,
                    <br />
                    Dr. Colter!{" "}
                  </>
                </Text>
                <Img
                  className="h-[22px] md:ml-[0] ml-[13px] md:mt-0 mt-12 w-[22px]"
                  src="images/img_clock_lime_200.svg"
                  alt="clock_One"
                />
                <Input
                  name="groupFortyOne"
                  placeholder="Search"
                  className="capitalize font-medium leading-[normal] p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
                  wrapClassName="flex md:flex-1 mb-4 md:ml-[0] ml-[41px] w-[59%] md:w-full"
                  prefix={
                    <Img
                      className="h-6 mr-3.5 my-auto"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                  }
                  shape="round"
                  size="sm"
                ></Input>
                <div className="bg-blue-400 md:h-9 h-[60px] mb-4 ml-2.5 md:ml-[0] p-[19px] relative rounded-[20px] w-[60px]">
                  <Img
                    className="absolute h-5 inset-[0] justify-center m-auto"
                    src="images/img_icon.svg"
                    alt="icon"
                  />
                  <div className="absolute bg-red-A700 h-2.5 right-[32%] rounded-[50%] top-[32%] w-2.5"></div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[25px] items-center justify-start w-[42%] md:w-full">
                  <div className="bg-blue_gray-900 flex flex-col items-end justify-start sm:pl-5 pl-[25px] rounded-[30px] w-full">
                    <div className="flex flex-row gap-[29px] items-center justify-end w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[47%]">
                        <Text
                          className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtManropeBold32"
                        >
                          42
                        </Text>
                        <div className="flex flex-col relative w-full">
                          <Text
                            className="capitalize mx-auto text-base text-white-A700"
                            size="txtManropeBold16"
                          >
                            patients visited
                          </Text>
                          <Text
                            className="capitalize mt-[-0.01px] text-gray-300 text-xs z-[1]"
                            size="txtManropeMedium12"
                          >
                            this month
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-800_01 flex flex-col items-center justify-center p-[31px] sm:px-5 rounded-br-[30px] rounded-tr-[30px] w-[43%]">
                        <div className="bg-blue-400_7f h-[25px] mt-1 rounded-tl-[30px] rounded-tr-[30px] w-[99%]"></div>
                        <div className="bg-blue-400 flex flex-col items-center justify-start mb-[5px] p-[9px] rounded-bl-[30px] rounded-br-[30px] w-[99%] md:w-full">
                          <Img
                            className="h-2"
                            src="images/img_cursor.svg"
                            alt="cursor"
                          />
                          <Text
                            className="capitalize my-[3px] text-sm text-white-A700"
                            size="txtManropeBold14"
                          >
                            70%
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900 flex flex-col items-center justify-start p-[13px] rounded-[30px] w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start mb-1.5 w-[87%] md:w-full">
                      <div className="flex flex-row gap-[11px] items-start justify-start w-[78%] md:w-full">
                        <div className="bg-blue-400 flex flex-col items-center justify-start mb-0.5 p-[7px] rounded-[11px] w-[17%]">
                          <Img
                            className="h-2"
                            src="images/img_arrowright_black_900.svg"
                            alt="arrowright_One"
                          />
                        </div>
                        <Text
                          className="mt-0.5 text-base text-blue_gray-100"
                          size="txtManropeBold16Bluegray100"
                        >
                          Upcoming Events
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[25px] items-start justify-between w-full">
                        <div className="h-[79px] md:h-[83px] mt-1 relative w-[79px]">
                          <div className="bg-cyan-100 border border-black-900 border-solid flex flex-col h-full items-center justify-end m-auto rounded-[28px] w-[57px]">
                            <div className="flex flex-col items-center justify-start mt-2 w-[83%] md:w-full">
                              <Img
                                className="h-[45px] md:h-auto rounded-[50%] w-full"
                                src="images/img_imageremovebgpreview_45x47.png"
                                alt="imageremovebgpr_One"
                              />
                            </div>
                          </div>
                          <div className="!w-[79px] absolute h-[79px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[79px] absolute h-[79px] inset-[0] justify-center m-auto overflow-visible"
                              value={79}
                              strokeWidth={4}
                              styles={{
                                trail: { strokeWidth: 4, stroke: "#d9d9d9" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(90deg)",
                                  stroke: "#abefeb",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[55%]">
                          <Text
                            className="capitalize text-white-A700 text-xl"
                            size="txtManropeBold20"
                          >
                            aliza shah
                          </Text>
                          <div className="flex flex-row gap-2 items-start justify-start w-[92%] md:w-full">
                            <Img
                              className="h-3"
                              src="images/img_clock_white_a700.svg"
                              alt="clock_Two"
                            />
                            <Text
                              className="capitalize text-gray-300 text-xs"
                              size="txtManropeMedium12"
                            >
                              08:00-09:00 am
                            </Text>
                          </div>
                          <Text
                            className="bg-blue_gray-800 capitalize h-[25px] justify-center mt-[13px] pt-1.5 px-3 rounded-[10px] text-gray-300 text-xs w-[125px]"
                            size="txtManropeSemiBold12"
                          >
                            <span className="text-gray-300 font-manrope text-left font-medium">
                              Visited 7{" "}
                            </span>
                            <span className="text-gray-300 font-manrope lowercase text-left font-medium">
                              days ago
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_gray-900 flex md:flex-1 flex-col items-center justify-start p-[27px] sm:px-5 rounded-[40px] w-[55%] md:w-full">
                  <div className="flex flex-col gap-[35px] items-center justify-start mb-[26px] w-[98%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtManropeBold24"
                        >
                          Statistics
                        </Text>
                        <Text
                          className="capitalize mt-[3px] text-gray-300 text-xs"
                          size="txtManropeMedium12"
                        >
                          November 2023
                        </Text>
                      </div>
                      <SelectBox
                        className="capitalize sm:flex-1 font-semibold leading-[normal] mt-0.5 text-left text-xs w-[27%] sm:w-full"
                        placeholderClassName="text-gray-300"
                        indicator={
                          <Img
                            className="h-1 mr-[0] outline-blue_gray-100 outline-[0.5px] outline w-2"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="groupThirtyNine"
                        options={weeklyOptionsList}
                        isSearchable={false}
                        placeholder="Weekly"
                        shape="round"
                        color="blue_400"
                        variant="outline"
                      />
                    </div>
                    <div className="h-[155px] relative w-[96%]">
                      <div className="h-[155px] m-auto w-full">
                        <Img
                          className="absolute h-[155px] inset-[0] justify-center m-auto object-cover"
                          src="images/img_vector.png"
                          alt="vector"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-28 inset-x-[0] items-center justify-start mx-auto p-[42px] md:px-10 sm:px-5 top-[0] w-full"
                          style={{
                            backgroundImage: "url('images/img_group44.png')",
                          }}
                        >
                          <div className="bg-blue_gray-100_01 border-[5px] border-black-900 border-solid h-[25px] mb-[3px] rounded-[12px] w-[25px]"></div>
                        </div>
                      </div>
                      <Line className="absolute bg-gradient  bottom-[6%] h-[77px] inset-x-[0] mx-auto w-[3px]" />
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[46px] items-center justify-start p-[7px] right-[36%] rounded-[10px] top-[0] w-1/4"
                        style={{
                          backgroundImage: "url('images/img_group45.svg')",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-end justify-between mb-2.5 w-[87%] md:w-full">
                          <Text
                            className="capitalize text-sm text-white-A700"
                            size="txtManropeBold14"
                          >
                            82%
                          </Text>
                          <Img
                            className="h-[7px] mb-1 mt-2"
                            src="images/img_cursor.svg"
                            alt="cursor_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-[56%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtManropeBold24"
                  >
                    Active Patients
                  </Text>
                  <div className="bg-blue_gray-900 flex flex-col items-center justify-start p-4 rounded-[40px] w-full">
                    <div className="flex flex-col items-center justify-start mb-[21px] w-[93%] md:w-full">
                      <List
                        className="flex flex-col gap-[27px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-[18px] items-center justify-between mr-[3px] my-0 w-full">
                          <Text
                            className="capitalize text-blue_gray-100 text-xs"
                            size="txtManropeSemiBold12Bluegray100"
                          >
                            <span className="text-blue_gray-100 font-manrope text-left font-semibold">
                              08:00{" "}
                            </span>
                            <span className="text-blue_gray-100 font-manrope text-left font-semibold">
                              am
                            </span>
                          </Text>
                          <div className="md:h-12 h-[50px] relative w-[78%]">
                            <Line className="absolute bg-gray-700 h-px inset-[0] justify-center m-auto w-full" />
                            <div className="absolute bg-deep_orange-50 flex flex-col h-full inset-y-[0] items-start justify-start left-[6%] my-auto p-[5px] rounded-[20px] w-[76%]">
                              <div className="flex flex-row gap-[18px] items-start justify-start ml-1 md:ml-[0] w-[79%] md:w-full">
                                <div className="bg-purple-100 border border-blue_gray-900 border-solid flex flex-col h-9 items-center justify-end mt-0.5 pt-1.5 px-1.5 rounded-[50%] w-9">
                                  <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                                    <Img
                                      className="h-[30px] md:h-auto object-cover rounded-bl-[18px] rounded-br-[18px] w-full"
                                      src="images/img_imageremovebgpreview_30x23.png"
                                      alt="imageremovebgpr"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[62%]">
                                  <Text
                                    className="capitalize text-base text-black-900"
                                    size="txtManropeBold16Black900"
                                  >
                                    mark jaxon
                                  </Text>
                                  <div className="flex flex-row gap-1.5 items-start justify-start w-full">
                                    <Img
                                      className="h-2 w-[9px]"
                                      src="images/img_clock_black_900.svg"
                                      alt="clock"
                                    />
                                    <Text
                                      className="capitalize text-[9.41px] text-black-900"
                                      size="txtManropeMedium941"
                                    >
                                      08:00-09:00 am
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[17px] items-center justify-between my-0 w-full">
                          <Text
                            className="capitalize text-blue_gray-100 text-xs"
                            size="txtManropeSemiBold12Bluegray100"
                          >
                            <span className="text-blue_gray-100 font-manrope text-left font-semibold">
                              09:00{" "}
                            </span>
                            <span className="text-blue_gray-100 font-manrope text-left font-semibold">
                              am
                            </span>
                          </Text>
                          <div className="h-[50px] relative w-[78%]">
                            <Line className="absolute bg-gray-700 h-px inset-[0] justify-center m-auto w-[99%]" />
                            <div className="absolute bg-green-50 flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-[7px] right-[0] rounded-[20px] w-[76%]">
                              <div className="flex flex-row gap-[17px] items-center justify-start ml-1 md:ml-[0] w-4/5 md:w-full">
                                <div className="bg-cyan-100_02 border border-blue_gray-900 border-solid flex flex-col h-9 items-center justify-start pt-[5px] px-[5px] rounded-[50%] w-9">
                                  <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                                    <Img
                                      className="h-[31px] md:h-auto object-cover rounded-bl-[18px] rounded-br-[18px] w-full"
                                      src="images/img_imageremovebgpreview_31x25.png"
                                      alt="imageremovebgpr"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[63%]">
                                  <Text
                                    className="capitalize text-base text-black-900"
                                    size="txtManropeBold16Black900"
                                  >
                                    maira khan
                                  </Text>
                                  <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                                    <Img
                                      className="h-2 w-[9px]"
                                      src="images/img_clock_black_900.svg"
                                      alt="clock"
                                    />
                                    <Text
                                      className="capitalize text-[9.41px] text-black-900"
                                      size="txtManropeMedium941"
                                    >
                                      09:00-10:00 am
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-5 items-center justify-between mr-[3px] my-0 w-full">
                          <Text
                            className="capitalize text-blue_gray-100 text-xs"
                            size="txtManropeSemiBold12Bluegray100"
                          >
                            <span className="text-blue_gray-100 font-manrope text-left font-semibold">
                              10:00{" "}
                            </span>
                            <span className="text-blue_gray-100 font-manrope text-left font-semibold">
                              am
                            </span>
                          </Text>
                          <div className="md:h-12 h-[50px] relative w-[78%]">
                            <Line className="absolute bg-gray-700 h-px inset-[0] justify-center m-auto w-full" />
                            <div className="absolute bg-cyan-100_03 flex flex-col h-full inset-y-[0] items-start justify-start left-[1%] my-auto p-1.5 rounded-[20px] w-[76%]">
                              <div className="flex flex-row gap-[17px] items-start justify-start ml-1 md:ml-[0] w-3/4 md:w-full">
                                <div className="bg-green-100 border border-blue_gray-900 border-solid flex flex-col h-9 items-center justify-end rounded-[50%] w-9">
                                  <div className="flex flex-col items-center justify-start mt-1.5 w-[64%] md:w-full">
                                    <Img
                                      className="h-7 md:h-auto object-cover rounded-bl-[18px] rounded-br-[18px] w-full"
                                      src="images/img_imageremovebgpreview_28x23.png"
                                      alt="imageremovebgpr"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-3/5">
                                  <Text
                                    className="capitalize text-base text-black-900"
                                    size="txtManropeBold16Black900"
                                  >
                                    brick zon
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-full">
                                    <Img
                                      className="h-2 w-[9px]"
                                      src="images/img_clock_gray_900.svg"
                                      alt="clock"
                                    />
                                    <Text
                                      className="capitalize text-[9.41px] text-black-900"
                                      size="txtManropeRegular941"
                                    >
                                      10:00-11:00 am
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-row gap-[22px] items-end justify-between mt-[22px] w-full">
                        <Text
                          className="capitalize mb-1 mt-[7px] text-blue_gray-100 text-xs"
                          size="txtManropeSemiBold12Bluegray100"
                        >
                          <span className="text-blue_gray-100 font-manrope text-left font-semibold">
                            11:00{" "}
                          </span>
                          <span className="text-blue_gray-100 font-manrope text-left font-semibold">
                            am
                          </span>
                        </Text>
                        <div className="h-[29px] relative w-[78%]">
                          <Line className="absolute bg-gray-700 bottom-[45%] h-px inset-x-[0] mx-auto w-full" />
                          <Button
                            className="absolute capitalize cursor-pointer font-semibold h-full inset-[0] justify-center leading-[normal] m-auto min-w-[105px] rounded-[14px] text-center text-xs"
                            color="gray_900"
                          >
                            Break Time
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[19px] items-center justify-between mt-[25px] w-[99%] md:w-full">
                        <Text
                          className="capitalize text-blue_gray-100 text-xs"
                          size="txtManropeSemiBold12Bluegray100"
                        >
                          <span className="text-blue_gray-100 font-manrope text-left font-semibold">
                            12:00{" "}
                          </span>
                          <span className="text-blue_gray-100 font-manrope text-left font-semibold">
                            am
                          </span>
                        </Text>
                        <div className="md:h-12 h-[50px] relative w-[78%]">
                          <Line className="absolute bg-gray-700 h-px inset-[0] justify-center m-auto w-full" />
                          <div className="absolute bg-blue-100 flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-1.5 right-[5%] rounded-[20px] w-[76%]">
                            <div className="flex flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[3px] w-[78%] md:w-full">
                              <div className="bg-lime-100 border border-black-900 border-solid flex flex-col h-9 items-start justify-end rounded-[50%] w-9">
                                <div className="flex flex-col items-center justify-start mt-[3px] w-8 md:w-full">
                                  <Img
                                    className="h-[31px] md:h-auto rounded-[50%] w-8"
                                    src="images/img_imageremovebgpreview_31x32.png"
                                    alt="imageremovebgpr_Two"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[62%]">
                                <Text
                                  className="capitalize text-base text-black-900"
                                  size="txtManropeBold16Black900"
                                >
                                  Alexa Max
                                </Text>
                                <div className="flex flex-row gap-2 items-start justify-start w-full">
                                  <Img
                                    className="h-2 mt-0.5 w-[9px]"
                                    src="images/img_clock_black_900.svg"
                                    alt="clock_Three"
                                  />
                                  <Text
                                    className="capitalize text-[9.41px] text-black-900"
                                    size="txtManropeMedium941"
                                  >
                                    12:00-13:00 am
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-[42%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtManropeBold24"
                  >
                    Upcoming Events
                  </Text>
                  <div className="bg-blue_gray-900 flex flex-col items-center justify-end mt-[21px] p-6 sm:px-5 rounded-[40px] w-full">
                    <div className="flex flex-col gap-7 items-center justify-start mt-[3px] w-[98%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start mt-0.5">
                          <Text
                            className="capitalize text-white-A700 text-xl"
                            size="txtManropeBold20"
                          >
                            Team Meeting
                          </Text>
                          <div className="flex flex-row gap-[9px] items-start justify-start mt-0.5 w-[71%] md:w-full">
                            <Img
                              className="h-3.5"
                              src="images/img_search_blue_gray_100.svg"
                              alt="search_One"
                            />
                            <Text
                              className="capitalize text-gray-300 text-xs"
                              size="txtManropeMedium12"
                            >
                              05:00-06:00
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="round"
                          size="md"
                        >
                          <Img src="images/img_alarm.svg" alt="alarm" />
                        </Button>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex relative w-[47%]">
                          <div className="flex my-auto w-[82%]">
                            <div className="flex my-auto w-[70%]">
                              <div className="bg-purple-100 border border-blue_gray-900 border-solid flex flex-col h-9 items-center justify-end my-auto pt-1.5 px-1.5 rounded-[50%] w-9">
                                <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                                  <Img
                                    className="h-[30px] md:h-auto object-cover rounded-bl-[18px] rounded-br-[18px] w-full"
                                    src="images/img_imageremovebgpreview_30x23.png"
                                    alt="imageremovebgpr_Three"
                                  />
                                </div>
                              </div>
                              <div className="bg-cyan-100_02 border border-blue_gray-900 border-solid flex flex-col h-9 items-center justify-start ml-[-9px] my-auto pt-[5px] px-[5px] rounded-[50%] w-9 z-[1]">
                                <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                                  <Img
                                    className="h-[31px] md:h-auto object-cover rounded-bl-[18px] rounded-br-[18px] w-full"
                                    src="images/img_imageremovebgpreview_31x25.png"
                                    alt="imageremovebgpr_Four"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="bg-green-100 border border-blue_gray-900 border-solid flex flex-col h-9 items-center justify-end ml-[-9px] my-auto rounded-[50%] w-9 z-[1]">
                              <div className="flex flex-col items-center justify-start mt-1.5 w-[64%] md:w-full">
                                <Img
                                  className="h-7 md:h-auto object-cover rounded-bl-[18px] rounded-br-[18px] w-full"
                                  src="images/img_imageremovebgpreview_28x23.png"
                                  alt="imageremovebgpr_Five"
                                />
                              </div>
                            </div>
                          </div>
                          <Text
                            className="bg-gray-100 border border-black-900 border-solid capitalize flex h-9 items-center justify-center ml-[-15px] my-auto rounded-[50%] text-black-900 text-center text-sm w-9 z-[1]"
                            size="txtManropeBold14Black900"
                          >
                            4+
                          </Text>
                        </div>
                        <div className="bg-blue-400 flex flex-col items-center justify-start p-[13px] rounded-[15px] w-[23%]">
                          <Img
                            className="h-3.5"
                            src="images/img_arrowright_black_900.svg"
                            alt="arrowright_Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900 flex flex-col items-center justify-start mt-[25px] p-[26px] sm:px-5 rounded-[40px] w-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start mb-1 w-full">
                      <div className="flex flex-row items-start justify-start w-full">
                        <Text
                          className="capitalize text-blue_gray-100 text-sm"
                          size="txtManropeMedium14"
                        >
                          Consultation
                        </Text>
                        <div className="bg-black-900 h-1.5 mb-[9px] ml-[126px] mt-1 rounded-[50%] w-1.5"></div>
                        <div className="bg-black-900 h-1.5 mb-[9px] ml-[3px] mt-1 rounded-[50%] w-1.5"></div>
                        <div className="bg-black-900 h-1.5 mb-[9px] ml-[3px] mt-1 rounded-[50%] w-1.5"></div>
                      </div>
                      <div className="flex flex-row gap-11 items-end justify-start w-[95%] md:w-full">
                        <div className="flex flex-col gap-[29px] items-start justify-start w-[45%]">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtManropeBold24"
                          >
                            82/100
                          </Text>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[101px] rounded-[10px]"
                            rightIcon={
                              <div className="mt-[5px] mb-1.5 ml-[15px] outline-white-A700 outline-[1px] outline">
                                <Img
                                  src="images/img_cursor_white_a700.svg"
                                  alt="cursor"
                                />
                              </div>
                            }
                          >
                            <div className="capitalize font-bold leading-[normal] text-base text-left">
                              82%
                            </div>
                          </Button>
                        </div>
                        <div className="!w-20 h-20 mt-4 overflow-visible">
                          <CircularProgressbar
                            className="!w-20 h-20 mt-4 overflow-visible"
                            value={74}
                            strokeWidth={18}
                            styles={{
                              trail: { strokeWidth: 18, stroke: "#f1f1f1" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(90deg)",
                                stroke: "#409bee",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col items-center justify-center p-[22px] sm:px-5 rounded-[40px] w-[35%] md:w-full">
              <div className="h-[150px] md:h-[182px] mt-8 relative w-[150px]">
                <div className="!w-[150px] h-[150px] m-auto overflow-visible">
                  <CircularProgressbar
                    className="!w-[150px] h-[150px] m-auto overflow-visible"
                    value={74}
                    strokeWidth={4}
                    styles={{
                      trail: { strokeWidth: 4, stroke: "#151c39" },
                      path: {
                        strokeLinecap: "square",
                        height: "100%",
                        transformOrigin: "center",
                        transform: "rotate(90deg)",
                        stroke: "#409bee",
                      },
                    }}
                  ></CircularProgressbar>
                </div>
                <div className="absolute bg-blue-100_01 flex flex-col h-max inset-[0] items-center justify-center m-auto pt-[15px] px-[15px] rounded-[50%] w-[110px]">
                  <div className="flex flex-col items-center justify-start mt-[3px] w-[99%] md:w-full">
                    <Img
                      className="h-[92px] md:h-auto object-cover rounded-bl-[55px] rounded-br-[55px] w-full"
                      src="images/img_imageremovebgpreview_92x79.png"
                      alt="imageremovebgpr_Six"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="lowercase mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtInterRegular24"
              >
                <span className="text-white-A700 font-manrope uppercase text-left font-bold">
                  A
                </span>
                <span className="text-white-A700 font-manrope text-left font-bold">
                  LIAM{" "}
                </span>
                <span className="text-white-A700 font-manrope uppercase text-left font-bold">
                  C
                </span>
                <span className="text-white-A700 font-manrope text-left font-bold">
                  OLTER
                </span>
              </Text>
              <Text
                className="capitalize mt-[7px] text-base text-blue_gray-100"
                size="txtManropeMedium16"
              >
                Physician
              </Text>
              <div className="flex flex-col font-manrope gap-[25px] items-center justify-start mb-2 mt-[22px] w-[99%] md:w-full">
                <div className="bg-blue_gray-900_01 flex flex-row items-center justify-between p-[22px] sm:px-5 rounded-[30px] w-full">
                  <Text
                    className="ml-1.5 text-lg text-white-A700"
                    size="txtManropeSemiBold18"
                  >
                    Active Patients
                  </Text>
                  <div className="flex mr-[7px] relative w-[38%]">
                    <div className="flex my-auto w-[78%]">
                      <div className="flex my-auto w-[71%]">
                        <div className="bg-red-200 border border-black-900 border-solid flex flex-col h-9 items-center justify-end my-auto rounded-[50%] w-9">
                          <div className="flex flex-col items-center justify-start mt-[5px] w-[30px] md:w-full">
                            <Img
                              className="h-[29px] md:h-auto rounded-[50%] w-[30px]"
                              src="images/img_imageremovebgpreview_29x30.png"
                              alt="imageremovebgpr_Seven"
                            />
                          </div>
                        </div>
                        <div className="bg-lime-100 border border-black-900 border-solid flex flex-col h-9 items-start justify-end ml-[-10px] my-auto rounded-[50%] w-9 z-[1]">
                          <div className="flex flex-col items-center justify-start mt-[3px] w-8 md:w-full">
                            <Img
                              className="h-[31px] md:h-auto rounded-[50%] w-8"
                              src="images/img_imageremovebgpreview_31x32.png"
                              alt="imageremovebgpr_Eight"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-cyan-100_04 border border-black-900 border-solid flex flex-col h-9 items-center justify-end ml-[-10px] my-auto rounded-[50%] w-9 z-[1]">
                        <div className="flex flex-col items-center justify-start mt-0.5 w-[84%] md:w-full">
                          <Img
                            className="h-8 md:h-auto object-cover rounded-bl-[18px] rounded-br-[18px] w-full"
                            src="images/img_imageremovebgpreview_32x30.png"
                            alt="imageremovebgpr_Nine"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="bg-gray-100 border border-black-900 border-solid capitalize flex h-9 items-center justify-center ml-[-10px] my-auto rounded-[50%] text-black-900 text-center text-sm w-9 z-[1]"
                      size="txtManropeBold14Black900"
                    >
                      8+
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end p-2.5 rounded-[40px] w-full">
                  <div className="flex flex-col gap-[13px] items-center justify-start mt-2 w-full">
                    <div className="flex flex-col justify-start w-[91%] md:w-full">
                      <div className="flex flex-row items-start justify-start w-full">
                        <div className="bg-lime-100 flex flex-col h-[46px] items-start justify-start pr-1 pt-1 rounded-[50%] w-[46px]">
                          <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
                            <Img
                              className="h-[41px] md:h-auto object-cover rounded-bl-[23px] rounded-br-[23px] w-full"
                              src="images/img_imageremovebgpreview_41x39.png"
                              alt="imageremovebgpr_Ten"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start ml-[15px] mt-0.5">
                          <Text
                            className="capitalize text-base text-white-A700"
                            size="txtManropeBold16"
                          >
                            Alexa Max
                          </Text>
                          <Text
                            className="capitalize mt-1 text-blue_gray-100 text-xs"
                            size="txtManropeMedium12Bluegray100"
                          >
                            Active 5 min ago
                          </Text>
                        </div>
                        <Button
                          className="flex h-10 items-center justify-center ml-[106px] my-[3px] w-10"
                          shape="round"
                          size="sm"
                        >
                          <Img
                            className="h-3.5"
                            src="images/img_call.svg"
                            alt="call"
                          />
                        </Button>
                      </div>
                      <Line className="bg-white-A700_33 h-px mt-[15px] w-full" />
                      <Text
                        className="bg-blue_gray-50 capitalize h-[34px] justify-center md:ml-[0] ml-[61px] mr-[119px] mt-3 pl-[13px] sm:pr-5 pr-[35px] py-2 rounded-[14px] text-black-900 text-xs w-[120px]"
                        size="txtManropeSemiBold12Black900"
                      >
                        Hi, Doctor.
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-start mt-3.5 w-[76%] md:w-full">
                        <div className="bg-lime-100 flex flex-col h-[46px] items-start justify-start my-[7px] pr-1 pt-1 rounded-[50%] w-[46px]">
                          <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
                            <Img
                              className="h-[41px] md:h-auto object-cover rounded-bl-[23px] rounded-br-[23px] w-full"
                              src="images/img_imageremovebgpreview_41x39.png"
                              alt="imageremovebgpr_Eleven"
                            />
                          </div>
                        </div>
                        <div className="bg-blue_gray-50 flex flex-col items-end justify-start p-[11px] rounded-[14px]">
                          <Text
                            className="capitalize leading-[146.60%] mb-0.5 mr-[3px] text-black-900 text-xs"
                            size="txtManropeSemiBold12Black900"
                          >
                            <span className="text-black-900 font-manrope text-left font-normal">
                              I{" "}
                            </span>
                            <span className="text-black-900 font-manrope text-left font-normal">
                              <>
                                got knee jerk. What
                                <br />
                                should i do right now?
                              </>
                            </span>
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="capitalize md:ml-[0] ml-[61px] mt-2 text-blue_gray-100 text-xs"
                        size="txtManropeSemiBold12Bluegray100"
                      >
                        tue 02:32pm
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-end md:ml-[0] ml-[133px] mt-1.5 w-[56%] md:w-full">
                        <Text
                          className="bg-blue-100_02 capitalize h-[34px] justify-center my-1.5 pl-[17px] sm:pr-5 pr-[35px] py-2 rounded-[14px] text-black-900 text-xs w-[104px]"
                          size="txtManropeSemiBold12Black900"
                        >
                          Hi, Alexa.
                        </Text>
                        <div className="bg-blue-100_02 flex flex-col h-[46px] items-center justify-end pt-1.5 px-1.5 rounded-[50%] w-[46px]">
                          <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                            <Img
                              className="h-[38px] md:h-auto object-cover rounded-bl-[23px] rounded-br-[23px] w-full"
                              src="images/img_imageremovebgpreview_38x33.png"
                              alt="imageremovebgpr_Twelve"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-100_02 flex flex-col items-center justify-start md:ml-[0] ml-[46px] mr-[63px] mt-2 p-3 rounded-[14px]">
                        <Text
                          className="capitalize leading-[146.60%] text-black-900 text-xs w-[94%] sm:w-full"
                          size="txtManropeSemiBold12Black900"
                        >
                          <span className="text-black-900 font-manrope text-left font-medium">
                            T
                          </span>
                          <span className="text-black-900 font-manrope lowercase text-left font-medium">
                            his help maintain balance and posture.
                          </span>
                          <span className="text-black-900 font-manrope uppercase text-left font-medium">
                            {" "}
                            d
                          </span>
                          <span className="text-black-900 font-manrope lowercase text-left font-medium">
                            ont worry.
                          </span>
                        </Text>
                      </div>
                      <Text
                        className="capitalize md:ml-[0] ml-[163px] mt-2 text-blue_gray-100 text-xs"
                        size="txtManropeSemiBold12Bluegray100"
                      >
                        tue 02:32pm
                      </Text>
                    </div>
                    <Input
                      name="groupTwo"
                      placeholder="Type your text......"
                      className="!placeholder:text-white-A700 !text-white-A700 capitalize font-semibold leading-[normal] p-0 text-left text-xs w-full"
                      wrapClassName="flex rounded-[29px] w-full"
                      prefix={
                        <div className="mr-[30px] sm:w-full sm:mx-0 w-[5%] outline-blue_gray-100 outline-[1px] outline my-5">
                          <Img
                            className="my-auto"
                            src="images/img_menu.svg"
                            alt="menu"
                          />
                        </div>
                      }
                      suffix={
                        <div className="h-[60px] ml-[35px] w-[60px] bg-blue-400 p-5 rounded-[20px]">
                          <Img
                            className="h-[19px] rounded-[1px] my-auto"
                            src="images/img_save.svg"
                            alt="save"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsdashboardPage;
