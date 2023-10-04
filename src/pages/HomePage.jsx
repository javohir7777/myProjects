import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { requies } from "../server";
import { Link } from "react-router-dom";

import man from "../assets/photo/man.png";
import women from "../assets/women/women.png";

import "swiper/css";

import "./HomePage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const HomePage = () => {
  const [post, setPost] = useState({});
  const [posts, setPosts] = useState([]);

  const [data, setData] = useState("");

  useEffect(() => {
    getPost();
    getPosts();
  }, []);

  const getPost = async () => {
    try {
      const { data } = await requies.get(`/post/lastone`);
      setPost(data);
      setData(data?.createdAt.split("T")[0]);
    } catch (error) {
      toast.error("Error");
    }
  };

  const getPosts = async () => {
    try {
      const { data } = await requies.get(`/post/lastones`);
      setPosts(data);
    } catch (error) {
      toast.error("Error");
    }
  };

  const time = new Date(data).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  console.log(posts);
  return (
    <Fragment>
      <div
        className="bg-img"
        style={{
          backgroundImage: `url(${man})`,
        }}
      >
        <div className="container">
          <div className="bg-img__texts">
            <h5 className="bg-img__h5">
              Posted on <span className="startup">{post?.title}</span>
            </h5>
            <h1 className="bg-img__h1">{post?.description}</h1>
            <p className="bg-img__p">
              By{" "}
              <span className="bg-img__span">
                {post?.user?.first_name} {post?.user?.last_name}
              </span>{" "}
              | {time}
            </p>
            <p className="bg-img__text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <Link className="read-more">Read More {">"}</Link>
          </div>
        </div>
      </div>
      <section className="popular">
        <div className="container">
          <h3 className="popular__h3">Popular blogs</h3>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {posts.map((post) => (
              <SwiperSlide key={post._id}>
                <div className="card">
                  <LazyLoadImage
                    src={`https://blog-backend-production-a0a8.up.railway.app/api/v1/upload/${post?.photo?._id}.jpg`}
                    className="card-img-top"
                    effect="blur"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="cart-name">
                      By{" "}
                      <span className="cart-name__span">
                        {post?.user?.first_name} {post?.user?.last_name}
                      </span>{" "}
                      l Aug 23, 2021{" "}
                    </p>
                    <h5 className="card-title"> {post?.title}</h5>
                    <p className="cart-p">{post?.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
