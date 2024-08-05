import SectionLayout from "./SectionLayout";
import { BasicButtons, ButtonsWithIcons, ButtonWithAnimation } from "./showcase/components/Buttons";

function ContentsLayout(props) {
  return (
    <div className="mt-32">
      <div className="mx-auto max-w-3xl space-y-30">
        <header>
          <h1 className="text-4xl block font-bold text-gray-800"> {props.title} </h1>
          <p className="mt-3 text-lg text-gray-800"> {props.description} </p>
        </header>

        <SectionLayout
          title="Basic Buttons"
          description="These buttons comes with three variants : Default , outlined , underlined"
          content=<BasicButtons />
        />
        <SectionLayout
          title="Buttons with Icons"
          description="Sometimes you need to have an icon inside the button inorder improve the UI of your website like. For example, A bin symbol inside the delete button"
          content=<ButtonsWithIcons />
        />
        <SectionLayout
          title="Buttons with minimal Animation"
          description="Having animated buttons on our website gives an asthetic look to our site"
          content=<ButtonWithAnimation />
        />
      </div>
    </div>
  );
}

export default ContentsLayout;
