import React from "react";
import MenuCategories from "../API/MenuCategories";
import { Link } from "react-router-dom";
import { useProductContext } from "../contexAPI/ProductContex";

export default function MenuList() {
  const allFilterData = useProductContext();

  return (
    <>
      <section className="flat-row flat-tab-menu menu-2">
        <div className="container">
          <div className="row"></div>
          {/*/.row*/}
          <div className="row">
            <div className="col-md-12 flat-tabs">
              <div className="bg-tabs">
                <div className="title-section style1 martp-0px">
                  <div className="top-section">
                    <p>Find About</p>
                  </div>
                  <h1 className="title marbt-33px ">Our Menu</h1>
                </div>
                <ul className="menu-tab">
                  {MenuCategories.map((curElem) => {
                    return (
                      <li key={curElem.id}>
                        <Link onClick={allFilterData[curElem.click]}>
                          {curElem.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/*/.bg-tabs*/}
              <div className="flat-divider d67px" />
              <div className="content-tab">
                <div className="content-inner">
                  <div className="row">
                    {allFilterData.filterCategory.map((curElem) => {
                      const { id, title, thumbnail, price } = curElem;
                      return (
                        <>
                          <div className="col-sm-3 col-xs-6" key={id}>
                            <div className="product card1 effect1">
                              <div className="box-wrap">
                                <div
                                  className="box-image"
                                  style={{
                                   
                                    height: "250px",
                                  
                                    transition: "transform 0.3s ease",
                                    cursor: "pointer"
                                  }}
                                 
                                >
                                  <Link>
                                    <img src={thumbnail} style={{ width: "100%", height: "100%", objectFit: "cover" }}   alt="images" />
                                  </Link>
                                </div>
                                <div className="box-content">
                                  <h6>{title}</h6>
                                  <ul>
                                    <li>₹ {price}</li>
                                    <li>
                                      <i className="fa fa-heart" />
                                      <i className="fa fa-heart" />
                                      <i className="fa fa-heart" />
                                      <i className="fa fa-heart" />
                                      <i className="fa fa-heart" />
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
                </div>
              </div>
              {/* /.content-tab */}
            </div>
            {/*flat-tabs*/}
          </div>
          {/*row*/}
        </div>
        {/*container */}
      </section>
    </>
  );
}
