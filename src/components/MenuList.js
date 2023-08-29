import React from "react";
import MenuCategories from "../API/MenuCategories";
import { Link } from "react-router-dom";
import { useProductContext } from "../contexAPI/ProductContex";
import Card from "./Card";

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
                      <li key={curElem.menuId}>
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
                    <Card/>
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
