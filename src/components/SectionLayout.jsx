import { BasicButtons } from "./showcase/components/Buttons";

function SectionLayout(props) {
  return (
    <div>
      <div className="space-y-10 md:space-y-16">
        {/* content section */}
        <div>
          {/* section heading */}
          <h2 className="text-2xl font-bold mt-20  text-gray-700"> {props.title} </h2>

          {/* section description  */}
          <p className="mt-2 text-lg text-gray-600"> {props.description} </p>

          {/* section preview area */}
          <div className="mt-3">
            <div className="flex flex-col rounded-xl border p-6 shadow-sm">
              <div className="flex flex-wrap">
                {props.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionLayout;
