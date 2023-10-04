import man from "../assets/photo/man.png";

import "./HomePage.scss";
const HomePage = () => {
  return (
    <div
      className="bg-img"
      style={{
        backgroundImage: `url(${man})`,
      }}
    >
      HomePage
    </div>
  );
};

export default HomePage;
