import React from "react";
import "./_sectionblog.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const list_blog = [
  {
    image:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/articles/quan-ong-rong-mac-voi-ao-gi21-yody-vn.jpg?v=1650334699880",
    title: "Tia UV là gì? Tác hại và giải pháp bảo vệ làn da",
    description:
      "   Tia UV là “kẻ thù” lớn nhất của làn da mỗi khi mùa hè đến. Vậy tia UV là gì? Tìm hiểu tác hại nguy hiểm của tia UV và những giải pháp an toàn mà bạn...",
    icon: "fa-solid fa-clock",
    time: "19/04/2022",
  },
  {
    image:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/articles/quan-ong-rong-mac-voi-ao-gi21-yody-vn.jpg?v=1650334699880",
    title: "Tia UV là gì? Tác hại và giải pháp bảo vệ làn da",
    description:
      "   Tia UV là “kẻ thù” lớn nhất của làn da mỗi khi mùa hè đến. Vậy tia UV là gì? Tìm hiểu tác hại nguy hiểm của tia UV và những giải pháp an toàn mà bạn...",
    icon: "fa-solid fa-clock",
    time: "19/04/2022",
  },
  {
    image:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/articles/quan-ong-rong-mac-voi-ao-gi21-yody-vn.jpg?v=1650334699880",
    title: "Tia UV là gì? Tác hại và giải pháp bảo vệ làn da",
    description:
      "   Tia UV là “kẻ thù” lớn nhất của làn da mỗi khi mùa hè đến. Vậy tia UV là gì? Tìm hiểu tác hại nguy hiểm của tia UV và những giải pháp an toàn mà bạn...",
    icon: "fa-solid fa-clock",
    time: "19/04/2022",
  },
  {
    image:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/articles/quan-ong-rong-mac-voi-ao-gi21-yody-vn.jpg?v=1650334699880",
    title: "Tia UV là gì? Tác hại và giải pháp bảo vệ làn da",
    description:
      "   Tia UV là “kẻ thù” lớn nhất của làn da mỗi khi mùa hè đến. Vậy tia UV là gì? Tìm hiểu tác hại nguy hiểm của tia UV và những giải pháp an toàn mà bạn...",
    icon: "fa-solid fa-clock",
    time: "19/04/2022",
  },
  {
    image:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/articles/quan-ong-rong-mac-voi-ao-gi21-yody-vn.jpg?v=1650334699880",
    title: "Tia UV là gì? Tác hại và giải pháp bảo vệ làn da",
    description:
      "   Tia UV là “kẻ thù” lớn nhất của làn da mỗi khi mùa hè đến. Vậy tia UV là gì? Tìm hiểu tác hại nguy hiểm của tia UV và những giải pháp an toàn mà bạn...",
    icon: "fa-solid fa-clock",
    time: "19/04/2022",
  },
  {
    image:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/articles/quan-ong-rong-mac-voi-ao-gi21-yody-vn.jpg?v=1650334699880",
    title: "Tia UV là gì? Tác hại và giải pháp bảo vệ làn da",
    description:
      "   Tia UV là “kẻ thù” lớn nhất của làn da mỗi khi mùa hè đến. Vậy tia UV là gì? Tìm hiểu tác hại nguy hiểm của tia UV và những giải pháp an toàn mà bạn...",
    icon: "fa-solid fa-clock",
    time: "19/04/2022",
  },
  {
    image:
      "https://bizweb.sapocdn.net/thumb/grande/100/438/408/articles/quan-ong-rong-mac-voi-ao-gi21-yody-vn.jpg?v=1650334699880",
    title: "Tia UV là gì? Tác hại và giải pháp bảo vệ làn da",
    description:
      "   Tia UV là “kẻ thù” lớn nhất của làn da mỗi khi mùa hè đến. Vậy tia UV là gì? Tìm hiểu tác hại nguy hiểm của tia UV và những giải pháp an toàn mà bạn...",
    icon: "fa-solid fa-clock",
    time: "19/04/2022",
  },
];
const SectionBlog = () => {
  return (
    <div className="section-blog">
      <div className="container">
        <div className="content-title">
          <h2>#YODY LOVE</h2>
        </div>
        <div className="list-blog">
          <>
            <Swiper
              navigation={true}
              spaceBetween={20}
              slidesPerView={6}
              modules={[Navigation]}
              className="mySwiper"
            >
              {list_blog?.map((blog, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="blog-image">
                      <a href="">
                        <img src={blog.image} alt="" />
                      </a>
                    </div>
                    <div className="box-infor">
                      <div className="blog-title">
                        <a href="">{blog.title}</a>
                      </div>
                      <div className="blog-description">{blog.description}</div>
                      <div className="blog-time">
                        <span>
                          <i className={blog.icon}></i>
                          {blog.time}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        </div>
        <a href="" className="more">Xem thêm</a>
      </div>
    </div>
  );
};

export default SectionBlog;
