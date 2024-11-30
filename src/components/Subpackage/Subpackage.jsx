import React from 'react'
import './Subpackage.css'
import gallery1 from '../../asset/image/gallery-1.png'
import gallery2 from '../../asset/image/gallery-2.png'
import gallery3 from '../../asset/image/gallery-3.png'
import gallery4 from '../../asset/image/gallery-4.png'
import gallery5 from '../../asset/image/gallery-5.png'
import gallery6 from '../../asset/image/gallery-6.png'


const Subpackage = () => {
  return (
    <section>
      <div className="container_top">
        <div className="heading">
          <h1>Our Hotel <span>Gallery</span></h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
        </div>


        <div className='gallery'>

          <div><img src={gallery1} alt="" /></div>

          <div className='v-stretch'><img src={gallery2} alt="" /></div>

          <div className='h-stretch'><img src={gallery3} alt="" /></div>

          <div><img src={gallery4} alt="" /></div>

          <div><img src={gallery5} alt="" /></div>

          <div className='v-stretch'><img src={gallery6} alt="" /></div>

          <div className='big-stretch'><img src={gallery1} alt="" /></div>

          <div><img src={gallery2} alt="" /></div>

          <div className='h-stretch'><img src={gallery3} alt="" /></div>

          <div><img src={gallery4} alt="" /></div>

          <div><img src={gallery5} alt="" /></div>

          <div><img src={gallery6} alt="" /></div>

          <div className='v-stretch'><img src={gallery1} alt="" /></div>

          <div><img src={gallery2} alt="" /></div>

          <div className='big-stretch'><img src={gallery3} alt="" /></div>
        </div>

        <div className='btn'>
          <a href="#">More</a>
        </div>

      </div>
    </section >
  )
}

export default Subpackage