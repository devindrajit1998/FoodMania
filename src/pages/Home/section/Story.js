import React from 'react'

export default function Story() {
  return (
   <>
   <section className="flat-row flat-our">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="images/1_1.png" alt="images" />
      </div>
      {/*col-md-6*/}
      <div className="col-md-6">
        <div className="flat-divider d96px" />
        <div className="wrap-content-story">
          <div className="title-section style2">
            <h1 className="title">Our Story</h1>
          </div>
          <p className="content-story">
            Sumi is a restaurant, bar and coffee roastery located on a busy
            corner site in Farringdon's Exmouth Market. With glazed frontage on
            two sides of the building, overlooking the market and a bustling.
          </p>
          <ul className="iconlist">
            <li>
              <i className="fa fa-circle-o" /> Sumi is a restaurant, bar and
              coffee roastery located
            </li>
            <li>
              <i className="fa fa-circle-o" /> Sumi is a restaurant, bar and
              coffee
            </li>
            <li>
              <i className="fa fa-circle-o" /> Sumi is a restaurant, bar and
              coffee roastery located on a Sumi
            </li>
            <li>
              <i className="fa fa-circle-o" /> restaurant, bar and coffee
              roastery located
            </li>
          </ul>
        </div>
      </div>
      {/*/.col-md-6*/}
    </div>
    {/*/.row*/}
  </div>
  {/*/.container */}
</section>

   </>
  )
}
