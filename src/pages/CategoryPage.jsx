import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { requies } from "../server";
import Search from "../components/search/Search";

import "./CategoryPage.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CategoryPage = () => {
  const [category, setCategory] = useState({});
  const [filteredPosts, setFilteredPosts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getCategoryOne();
    getCategory();
  }, []);

  const getCategoryOne = async () => {
    try {
      const { data } = await requies.get(`category/${id}`);
      setCategory(data);
    } catch (er) {
      toast.error("Error");
    }
  };

  const getCategory = async () => {
    try {
      const {
        data: { data },
      } = await requies.get("post");
      setFilteredPosts(data);
    } catch (er) {
      toast.error("Error");
    }
  };

  let filteredPost = filteredPosts.filter(
    (post) => post.name === category.name
  );

  return (
    <div>
      <div className="one-category">
        <h1 className="one-category__h1">{category.name}</h1>
        <p className="one-category__p">{category.description}</p>
        <p className="one-category__text">
          Blog {">"} {category.name}
        </p>
      </div>
      <Search setFilteredPosts={setFilteredPosts} />
      {filteredPost.map((categoryies) => (
        <div key={categoryies._id} className="categoryies-flex container">
          {/* <Link to={`blog/${categoryies._id}`}> */}
          <LazyLoadImage
            src={`https://blog-backend-production-a0a8.up.railway.app/upload/${
              categoryies?.photo?._id
            }.${categoryies?.photo?.name.slice(-3)}`}
            effect="blur"
            alt={`https://blog-backend-production-a0a8.up.railway.app/upload/${
              categoryies?.photo?._id
            }.${categoryies?.photo?.name.slice(-3)}`}
          />
          {/* </Link> */}
          <div className="categoryies-texts">
            <h3 className="categoryies-h3"> {categoryies?.category?.name}</h3>
            <h4 className="categoryies-h4">{categoryies?.title}</h4>
            <p className="categoryies-p">{categoryies?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
