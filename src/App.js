import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RenderView from "./components/RenderView";

const tabsList = ["about_me", "experience", "projects"];

function App() {
  const [activeTab, setActiveTab] = useState("about_me");
  return (
    <div className="App">
      <Header
        tabsList={tabsList}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <RenderView activeTab={activeTab} />
    </div>
  );
}

export default App;
