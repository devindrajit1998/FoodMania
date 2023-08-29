import React from "react";
import { useProductContext } from "../contexAPI/ProductContex";
import { Link, NavLink } from "react-router-dom";

export default function Card({id}) {
  const filterCard = useProductContext();
  return (
    <>
      {filterCard.filterCategory.map((curElem) => {
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
                      cursor: "pointer",
                    }}
                  >
                    <Link>
                      <img
                        src={thumbnail}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        alt="images"
                      />
                    </Link>
                  </div>
                  <div className="box-content">
                    <NavLink to={`/pages/SingleProduct/SingleProduct/${id}`}>
                      {title}
                    </NavLink>
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
    </>
  );
}
