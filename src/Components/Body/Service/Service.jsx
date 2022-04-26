import React from "react";
import "./_service.scss";

const services = [
  {
    img: "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/ser_1.png?1650597781514",
    title: "Miễn phí giao hàng",
    subtitle: "FREESHIP mọi đơn từ ",
    subtitlelight: "1/4-30/4",
  },
  {
    img: "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/ser_2.png?1650597781514",
    title: "Thanh toán COD",
    subtitle: "Thanh toán khi",
    subtitlelight: " nhận hàng (COD)",
  },
  {
    img: "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/ser_3.png?1650597781514",
    title: "Khách hàng VIP",
    subtitle: "Ưu đãi cho",
    subtitlelight: " khách hàng VIP",
  },
  {
    img: "https://bizweb.sapocdn.net/100/438/408/themes/858544/assets/ser_4.png?1650597781514",
    title: "Hỗ trợ bảo hành",
    subtitle: "đồ tại tất cả YODY store",
    subtitlelight_left: "Đổi sửa ",
  },
];
const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="row">
          {services.map((service, index) => {
            return (
              <div className="list-service col-3" key={index}>
                <img src={service.img} alt="" />
                <div className="description">
                  <div className="description-title">{service.title}</div>
                  <div className="description-sub-title">
                    <span className="description-sub-title-light">{service.subtitlelight_left}</span>
                    {service.subtitle}
                    <span className="description-sub-title-light">{service.subtitlelight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
