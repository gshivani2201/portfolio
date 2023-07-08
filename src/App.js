import { useState } from "react";

//styles
import "./App.css";

// child components
import Header from "./components/Header";
import RenderView from "./components/RenderView";
import Contact from "./components/Contact";

const tabsList = ["about_me", "experience", "projects"];

function App() {
  const [activeTab, setActiveTab] = useState("about_me");
  const [openContactModal, setOpenContactModal] = useState(false);
  return (
    <div className="App">
      <Header
        tabsList={tabsList}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        openModal={() => setOpenContactModal(!openContactModal)}
      />
      <RenderView activeTab={activeTab} />
      <Contact
        closeModal={() => setOpenContactModal(!openContactModal)}
        openContactModal={openContactModal}
      />
    </div>
  );
}

export default App;
