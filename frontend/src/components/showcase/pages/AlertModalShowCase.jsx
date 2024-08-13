import ShowCaseLayout from "../../ShowCaseLayout";
import AlertModal from "../components/AlertModal";
import AlertCode from "../../code/AlertCodeComponent";
import Sidebar from "../../Sidebar";

function AlertModalShowCase() {
  return (
    <div>
      <Sidebar />
      <ShowCaseLayout code=<AlertCode /> classes="mt-40" maintitle="Alert Dialog" component=<AlertModal /> />;
    </div>
  );
}

export default AlertModalShowCase;
