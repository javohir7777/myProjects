// import { toast } from "react-toastify";
import { toast } from "react-toastify";
import { requies } from "../../server";

import "./Search.scss";

import PropTypes from "prop-types";

const Search = ({ setFilteredPosts }) => {
  const handleSearch = async (e) => {
    try {
      const {
        data: { data },
      } = await requies.get(`post?search=${e.target.value}`);
      setFilteredPosts(data);
    } catch (err) {
      toast.error("Error");
    }
  };
  return (
    <form className="container">
      <input
        type="search"
        onChange={handleSearch}
        placeholder="Searching ..."
      />
    </form>
  );
};
Search.propTypes = {
  setFilteredPosts: PropTypes.func,
};
export default Search;
