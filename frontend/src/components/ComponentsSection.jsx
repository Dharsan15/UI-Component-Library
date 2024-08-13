import ComponentLayout from "./ComponentLayout";
import { Link } from "react-router-dom";

const ComponentsSection = () => {
  return (
    <>
      <div className="flex  items-center justify-center mt-40">
        <h1 className="text-4xl block font-bold m-auto">Components</h1>
      </div>
      <div className=" mx-auto   grid md:grid-cols-3 mt-10 ">
        <Link to="/components/accordian">
          {" "}
          <ComponentLayout title="Accordian" />{" "}
        </Link>
        <ComponentLayout title="Alert" />
        <Link to="components/buttons">
          <ComponentLayout title="Buttons" />
        </Link>

        <ComponentLayout title="Cards" />
        <ComponentLayout title="Input" />
        <ComponentLayout title="Notifications" />
        <ComponentLayout title="Navbar" />
      </div>
    </>
  );
};

export default ComponentsSection;
