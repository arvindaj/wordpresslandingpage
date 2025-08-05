import "bootstrap/dist/css/bootstrap.min.css";
import bgPattern from "../assets/img/bgPattern.jpg"; // Use your uploaded background image

const ExploreCard = () => {
  return (
    <div className="container my-0 mx-2">
      <div
        className="text-center text-white p-5 mx-auto"
        style={{
          maxWidth: "900px",
          borderRadius: "25px",
          background: `url(${bgPattern}) center/cover no-repeat, #000`,
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        }}
      >
        <h5 className="fw-bold mb-4">
          Ready to transform we specialize in delivering web design and
          development solutions that drive growth and success.
        </h5>
        <button
          className="btn px-4 py-2"
          style={{
            backgroundColor: "#8EC440",
            color: "#fff",
            borderRadius: "25px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default ExploreCard;
