import React from 'react';
import './topbar.scss';

const TopBar = () => {
  return (
    <section className='topbar'>
      <div className='banner'>
        <a href='#'>
          <img src='https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/bannertop.jpg?1650423295558' />
        </a>
      </div>
      <div className='container'>
        <div className='content content-text'>
          <a className='location' href='#'>
            <i className="location-icon fa-solid fa-location-dot"></i>
            Tìm<b>170+</b>cửa hàng
          </a>
          <a className='hotline' href='tel:1800 2086'>
            <i className="fa-solid fa-phone"></i>
            <b>1800 2086</b>
            <img src="//bizweb.sapocdn.net/100/438/408/themes/858544/assets/free_tb.png?1650423295558" alt="free"></img>
          </a>
          <a className='support' href='#'>
            <i className="fa-solid fa-envelope"></i>
            chamsockhachhang@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopBar;