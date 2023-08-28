import React from 'react'

export default function HotMenu() {
  return (
   <>
   <section className="flat-row flat-imagebox index-1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="title-section style2">
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
      <div className="flat-divider d10px" />
      <div className="item">
        <div className="imagebox effect1">
          <div className="box-wrap">
            <div className="box-image">
              <a href="#">
                <img src="images/2.jpg" alt="images" />
              </a>
            </div>
            <div className="box-content">
              <h5>ITALIAN SOURCE MUSHROOM</h5>
              <ul>
                <li>$19.9</li>
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
      <div className="item">
        <div className="imagebox effect1">
          <div className="box-wrap">
            <div className="box-image">
              <a href="#">
                <img src="images/3.jpg" alt="images" />
              </a>
            </div>
            <div className="box-content">
              <h5>CRAB WITH CURRY SOURCES</h5>
              <ul>
                <li>$19.9</li>
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
      <div className="item">
        <div className="imagebox effect1">
          <div className="box-wrap">
            <div className="box-image">
              <a href="#">
                <img src="images/4.jpg" alt="images" />
              </a>
            </div>
            <div className="box-content">
              <h5>PORK WITH ITALIAN SALSA</h5>
              <ul>
                <li>$19.9</li>
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
    </div>
    {/*row*/}
  </div>
  {/*container */}
</section>

   </>
  )
}
