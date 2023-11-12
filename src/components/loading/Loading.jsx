import img from "../../assets/loading.svg";
const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src={img} alt="" style={{ width: "120px", height: "120px" }} />
    </div>
  );
};

export default Loading;
