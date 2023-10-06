import { useParams } from "react-router-dom";
import { requies } from "../server";
import { useEffect, useState } from "react";

import "./BlogPost.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BlogPostPage = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    const { data } = await requies.get(`post/${id}`);
    setBlog(data);
  };
  let times = new Date(blog?.user?.updatedAt.split("T")[0]).toLocaleDateString(
    "en-Us",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <div className="container blog">
      <div className="blog-div">
        <LazyLoadImage
          className="img"
          src={`https://blog-backend-production-a0a8.up.railway.app/upload/${
            blog?.photo?._id
          }.${blog?.photo?.name.split(".")[1]}`}
          effect="blur"
          alt={`https://blog-backend-production-a0a8.up.railway.app/upload/${
            blog?.photo?._id
          }.${blog?.photo?.name.split(".")[1]}`}
        />
        <div className="blog-flex">
          <div className="blogs">
            <LazyLoadImage
              className="user-img"
              src={`https://blog-backend-production-a0a8.up.railway.app/upload/${
                blog?.photo?._id
              }.${blog?.photo?.name.split(".")[1]}`}
              alt=""
            />
            <div className="user-flex">
              <p className="user-p">
                {blog?.user?.first_name} {blog?.user?.last_name}
              </p>
              <p className="user-twos_p">
                {blog?.user?.role} {times}
              </p>
            </div>
          </div>
          <div className="user-texts">
            <h2 className="user-description">{blog?.description}</h2>
            <h6 className="user-role">Role ({blog?.user?.role})</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
