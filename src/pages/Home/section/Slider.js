import React from "react";
import SliderAPI from "../../../API/SliderAPI";

export default function Slider() {
  return (
    <>
      <div className="flat-sliders-container">
        <div className="tp-banner-container">
          <div className="tp-banner">
            <ul>
              {SliderAPI.map((curElem) => {
                return (
                  <li
                    data-transition="random-static"
                    data-slotamount={7}
                    data-masterspeed={1000}
                    data-saveperformance="on"
                    key={curElem.id}
                  >
                    <img src={curElem.img} alt="" />
                    <div
                      className="tp-caption sfl title-slide style6"
                      data-x={140}
                      data-y={320}
                      data-speed={1500}
                      data-start={1500}
                      data-easing="Sine.easeInOut"
                    >
                      {curElem.title}
                    </div>
                    <div
                      className="tp-caption sfr description-slider style1"
                      data-x={140}
                      data-y={450}
                      data-speed={1000}
                      data-start={1500}
                      data-easing="Power3.easeInOut"
                    >
                      {curElem.sub}
                    </div>
                    <div
                      className="tp-caption sft desc-slide blue-color center style3"
                      data-x={40}
                      data-y={250}
                      data-speed={1000}
                      data-start={1500}
                      data-easing="Power3.easeInOut"
                    >
                      <span className="sub_txt"> {curElem.ver_title}</span>{" "}
                      <br />
                      {curElem.ver_sub1} <br />
                      {curElem.ver_sub2} <br />
                      {curElem.ver_sub3}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
