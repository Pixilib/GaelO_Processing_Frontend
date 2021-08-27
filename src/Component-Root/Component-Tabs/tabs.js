import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Drop from "./HandleDropZone";
import Pyradiomics from "../Component-Pyradiomics/Pyradiomics";
import IaModel from "../Component-IAModels/IaModels";
import { Fragment } from "react";

function ControlledTabs() {
  const [key, setKey] = useState(Tabs.DragNDrop);

  const getCurrentComponent = () => {
    switch (key) {
      case Tabs.DragNDrop:
        return <Drop />;
      case Tabs.Radiomics:
        return <Pyradiomics />;
      case Tabs.IA:
        return <IaModel />;
    }
  };
  return (
    <Fragment>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 tabs"
      >
        <Tab
          eventKey={Tabs.DragNDrop}
          title="Drag and Drop"
          className="DragDrop"
        ></Tab>
        <Tab eventKey={Tabs.Radiomics} title="Pyradiomics"></Tab>
        <Tab eventKey={Tabs.IA} title="Modeles IA"></Tab>
      </Tabs>
      {getCurrentComponent()}
    </Fragment>
  );
}
Tabs.IA = "IA";
Tabs.Radiomics = "Radiomics";
Tabs.DragNDrop = "Drag And Drop";

export default ControlledTabs;