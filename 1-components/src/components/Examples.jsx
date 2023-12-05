import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
  const [selectedTabContent, setSelectedTabContent] = useState();

  function handleSelect(selectedTab) {
    setSelectedTabContent(selectedTab);
  }

  let tabContent = <p>Select a tab above to see the example</p>;

  if (selectedTabContent) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTabContent].title}</h3>
        <p>{EXAMPLES[selectedTabContent].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTabContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTabContent === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTabContent === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTabContent === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTabContent === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
