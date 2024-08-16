import TemplateImg from "../assets/Template1.avif";

const TemplatesPage = () => {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold ml-48 mt-10 " >Templates</h1> */}
      <div className="flex items-center justify-evenly  min-h-screen ">
        <div className="bg-white rounded-lg h-[400px] pt-16 p-8 max-w-sm text-center">
          <h1 className="text-3xl font-bold mb-4">Agency LandingPage Template</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            This is a marketing template designed for SaaS companies focusing on marketing tools for social media. Comes
            with a beautiful design, lots of micro-interactions and responsiveness.
          </p>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full inline-flex items-center">
            <a href="https://github.com/Dharsan15/LandingPageTemplate/tree/main/blog-website">Free</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div>
          <img className="w-[500px] h-[400px]" src={TemplateImg}></img>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
