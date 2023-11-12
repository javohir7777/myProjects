import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { requies } from "../server";
import { Link } from "react-router-dom";

import man from "../assets/photo/man.png";

import "swiper/css";

import "./HomePage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "../components/loading/Loading";
const HomePage = () => {
  const [post, setPost] = useState({});
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPost();
    getPosts();
    getCategory();
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
      setLoading(true);
      const { data } = await requies.get(`/post/lastones`);
      setPosts(data);
    } catch (error) {
      toast.error("Error");
    } finally {
      setLoading(false);
    }
  };

  const getCategory = async () => {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await requies.get(`/category`);
      setCategory(data);
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  const time = new Date(data).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  // let setTimes = posts.map((post) =>
  //   new Date(post?.createdAt.split("T")[0]).toLocaleDateString("en-Us", {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   })
  // );
  // console.log(times);
  console.log(posts[1]?.photo?._id);
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
            {/* <h1 className="bg-img__h1">{post?.category.name}</h1> */}
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
          {loading ? (
            <Loading />
          ) : (
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
                  <Link to={`blog/${post._id}`} className="card-decoration">
                    <div className="card">
                      <LazyLoadImage
                        src={`https://blog-backend-production-a0a8.up.railway.app/upload/${
                          post?.photo?._id
                        }.${post?.photo.name.split(".")[1]}`}
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
                          l Aug 23, 2021
                        </p>
                        <h5 className="card-title"> {post?.title}</h5>
                        <p className="cart-p">{post?.description}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
      <div className="container category">
        <h1 className="choose">Choose A Catagory</h1>
        {loading ? (
          <Loading />
        ) : (
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
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {category.map((post) => (
              <SwiperSlide key={post._id}>
                <Link to={`category/${post._id}`} className="card-link">
                  <div className="card-category">
                    <div className="card">
                      <LazyLoadImage
                        className="lazy-img"
                        src={`https://blog-backend-production-a0a8.up.railway.app/upload/${
                          post?.photo?._id
                        }.${post?.photo.name.split(".")[1]}`}
                        effect="blur"
                        alt=""
                      />
                    </div>
                    <div className="category-textes">
                      <h1 className="category-h1">{post.name}</h1>
                      <p className="category-p">{post.description}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </Fragment>
  );
};

export default HomePage;
