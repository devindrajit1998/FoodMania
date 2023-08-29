import React from "react";
import { Link } from "react-router-dom";
import HotMenuAPI from "../../../API/HotMenuAPI";

export default function HotMenu() {
  return (
    <>
      <section className="flat-row menu-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section style1 ">
                <div className="top-section">
                  <p>Discover</p>
                </div>
                <h1 className="title">Menu Hot</h1>
              </div>
            </div>
            {/*col-md-12*/}
          </div>
          {/*row*/}
          <div className="row">
            {HotMenuAPI.map((curElem) => {
              return (
                <>
                  <div className="col-sm-3 col-xs-6" key={curElem.id}>
                    <div className="product card1 effect1">
                      <div className="box-wrap">
                        <div className="box-image">
                          <Link>
                            <img src={curElem.thumbnail} alt="images" />
                          </Link>
                        </div>
                        <div className="box-content">
                          <h6>{curElem.title}</h6>
                          <ul>
                            <li>₹ {curElem.price}</li>
                            <li>
                            
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/*row*/}
        </div>
        {/*container */}
      </section>
    </>
  );
}
