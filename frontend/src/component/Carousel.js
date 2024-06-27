import React from 'react'

const Carousel = () => {
  return (
    <>
     <div id="carouselExampleIndicators" className="carousel-slide" data-bs-ride="true">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner custom-carousel">
      <div className="carousel-item active  custom-image">
        <img src="https://th.bing.com/th/id/OIP._gzyPAit71GmBgEGsia-YQHaFC?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100 custom-image" alt="..."/>
      </div>
      <div className="carousel-item  custom-image">
        <img src="https://th.bing.com/th/id/OIP.GyRmrVfJzkWrJzUnxRZWJAHaF7?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100  custom-image" alt="..."/>
      </div>
      <div className="carousel-item  custom-image">
        <img src="https://th.bing.com/th/id/OIP.J2dUCNvpgsN9iBaXxPxBJgHaFH?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100  custom-image" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </>
  )
}

export default Carousel