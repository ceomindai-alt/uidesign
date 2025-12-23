import Button from "../components/AnimatedButton";
import SectionHeading from "../components/SectionHeading";

const HomePage = ({ navigate }) => {
  return (
    <>
      <section className="h-screen bg-black text-white flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6">
            GLOBAL FLAVOURS.<br />INDIAN SOUL.
          </h1>
          <p className="text-gray-300 mb-8">
            A modern culinary movement inspired by Indian roots.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => navigate("menu")}>Order Online</Button>
            <Button variant="secondary" onClick={() => navigate("locations")}>
              Find Location
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <SectionHeading title="The PiRo Experience" subtitle="More Than Food" />
      </section>
    </>
  );
};

export default HomePage;
