import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";
import { requies } from "../server";

import "./MyBlogsPage.scss";
import Search from "../components/search/Search";
import { Button, Modal } from "react-bootstrap";
const MyBlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getBlogs();
    getCategory();
  }, []);

  const getBlogs = async () => {
    try {
      const {
        data: { data },
      } = await requies.get("post");
      setBlogs(data);
    } catch (err) {
      toast.error("Error");
    }
  };
  console.log(blogs);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const getCategory = async () => {
    try {
      const {
        data: { data },
      } = await requies.get("/category");
      setCategory(data);
    } catch (err) {
      toast.error("Error");
    }
  };

  return (
    <div className="my-blogs container">
      <div className="my-blogs__flex">
        <h1 className="my-blogs__h1">My posts</h1>
        <button className="my-blogs__btn" onClick={openModal}>
          Add post
        </button>
        <Modal show={show} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Category modal</Modal.Title>
          </Modal.Header>
          <form className="container">
            <input className="my-2" type="text" placeholder="Category name" />
            <input className="my-2" type="text" placeholder="Discripttion" />

            <select className="my-4 form-select" name="cars" id="cars">
              {category.map((ell) => (
                <option key={ell._id} id={ell.name} value={ell.name}>
                  {ell.name}
                </option>
              ))}
            </select>
            <input type="text" placeholder="Title" />

            <input type="file" />
          </form>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={closeModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <hr />
      <div className="all-post__basis">
        <Search setFilteredPosts={setBlogs} />
        {blogs.map((blogs) => (
          <div key={blogs._id} className="all-post__flex">
            <LazyLoadImage
              className="all-post__img"
              src={`https://blog-backend-production-a0a8.up.railway.app/upload/${
                blogs?.photo?._id
              }.${blogs?.photo?.name.split(".")[1]}`}
              effect="blur"
              all=""
            />
            <div className="all-post__texts">
              <h6 className="all-post__h6">{blogs?.category?.name}</h6>
              <h1 className="all-post__h1">{blogs?.title}</h1>
              <p className="all-post__p">{blogs?.category?.description}</p>
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogsPage;
