import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../../contexAPI/ProductContex";

export default function AboutProduct() {
  const mainData = useProductContext();
  const { id } = useParams();
  const filterSingleId = mainData.filterCategory.filter((curElem) => {
    return curElem.id === parseInt(id);
  });
  const finalData = filterSingleId[0];
  const { title, category, price, description, details, thumbnail, image } =
    finalData;
  if (!finalData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flat-row flat-wooc">
        <div className="container">
          <div className="row">
            <div className="woocommerce-page clearfix">
              <div className="col-md-6">
                <div className="flat-product-single-slider" key={id}>
                  <div id="flat-product-flexslider">
                    <div
                      className="flex-viewport"
                      style={{ overflow: "hidden", position: "relative" }}
                    >
                      <ul
                        className="slides"
                        style={{
                          width: "800%",
                          transitionDuration: "0s",
                          transform: "translate3d(0px, 0px, 0px)",
                        }}
                      >
                        <li
                          className="flex-active-slide"
                          style={{
                            width: 570,
                            marginRight: 0,
                            float: "left",
                            display: "block",
                          }}
                        >
                          <img
                            width={570}
                            height={570}
                            alt="product-single"
                            src={thumbnail}
                            className="attachment-themesflat-gallery-product size-themesflat-gallery-product"
                            draggable="false"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /.flat-portfolio-single-slider */}
              </div>
              {/*/.col-md-6 */}
              <div className="col-md-6">
                <div className="entry-summary">
                  <h2 className="product_title">{title}</h2>
                  <ul className="favorite">
                    <li>
                      <i className="fa fa-heart" />
                      <i className="fa fa-heart" />
                      <i className="fa fa-heart" />
                      <i className="fa fa-heart" />
                      <i className="fa fa-heart" />
                    </li>
                  </ul>
                  <p className="price">₹ {price}</p>
                  <div className="description">
                    <p>{description}</p>
                  </div>
                  <ul className="iconlist">
                    <li>
                      <i className="fa fa-circle-o" /> {details.data1}
                    </li>
                    <li>
                      <i className="fa fa-circle-o" /> {details.data2}
                    </li>
                    <li>
                      <i className="fa fa-circle-o" /> {details.data3}
                    </li>
                    <li>
                      <i className="fa fa-circle-o" /> {details.data4}
                    </li>
                  </ul>
                  <form className="cart clearfix" method="post">
                    <div className="quantity">
                      <input
                        type="number"
                        step={1}
                        min={1}
                        name="quantity"
                        defaultValue={4}
                        title="Qty"
                        className="input-text qty text"
                        size={4}
                      />
                    </div>
                    <input
                      type="hidden"
                      name="add-to-cart"
                      defaultValue={191}
                    />
                    <button type="submit" className="single_booking_button">
                      Booking now
                    </button>
                    <button
                      type="submit"
                      className="single_add_to_cart_button border"
                    >
                      add to cart
                    </button>
                  </form>
                  <ul className="flat-socials">
                    <li>Share link: </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="facebook">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="instagram">
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li className="linkin">
                      <a href="#">
                        <i className="fa fa-pinterest-p" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.entry-summary */}
              </div>
              {/*/.col-md-8 */}
            </div>
            {/*/.woocommerce-page */}
          </div>
          {/*/.row */}
          <div className="row">
            <div className="col-md-12">
              <div className="flat-accordion">
                <div className="flat-toggle">
                  <h4 className="toggle-title active">DESCRIPTION</h4>
                  <div className="toggle-content" style={{ display: "block" }}>
                    <p>
                      Phasellus pulvinar fringilla sapien eu maximus.
                      Pellentesque nibh risus, ultrices sit amet efficitur eu,
                      ullamcorper ut tortor. Proin libero felis, imperdiet sed
                      aliquet suscipit, feugiat et lectus. Mauris libero ante,
                      elementum eget dapibus eu, fermentum nec libero. Aliquam
                      luctus neque eu nunc molestie placerat.
                      <br />
                      Ingredients
                      <br />
                      Phasellus malesuada facilisis purus, vitae lobortis dui
                      dapibus volutpat. Aenean eget aliquet massa. Sed bibendum
                      sed elit vel pretium.
                      <br />
                      Nutritions
                      <br />
                      Calories: 550KcalCholesterol: 2mgFiber: 5gSodium:
                      130mgCarbohydrates: 4.5gFat: 3.0gProtein: 23g
                    </p>
                  </div>
                </div>
              </div>
              {/* /.flat-accordion */}
            </div>
            {/*/.col-md-12 */}
          </div>
          {/*/.row */}
          {/*  <div class="flat-divider d62px"></div> */}
        </div>
        {/*/.container */}
      </div>
    </>
  );
}
