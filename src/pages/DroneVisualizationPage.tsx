
import Navbar from "../components/Navbar";
import DroneVisualization from "./DroneVisualization";
import Footer from "../components/Footer";

const DroneVisualizationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DroneVisualization />
      </main>
      <Footer />
    </div>
  );
};

export default DroneVisualizationPage;
