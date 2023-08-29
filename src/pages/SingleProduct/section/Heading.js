import React from "react";
import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <>
      <div className="page-title parallax parallax1 flat_strech">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading">
                <h1 className="title">Menu Single</h1>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home </Link>
                    </li>
                    <li>
                      <Link to="/pages/Menu/Menu.js">Our menu</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.page-title-captions */}
            </div>
            {/* /.col-md-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
}
