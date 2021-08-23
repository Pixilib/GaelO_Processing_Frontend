import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyDropzone from './DropZone'
import Explanations from './explanations'
import Pyradiomics from '../Component-Pyradiomics/pyradiomics';
import Test from './test';

function ControlledTabs(props) {


  const [key, setKey] = useState('Drag and Drop');


  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 tabs"
    >
      <Tab eventKey="Drag and Drop" title="Drag and Drop" className="DragDrop">
        <div className='container'>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center">Drag here your Image</th>
                <th className="text-center">Drag here your Mask</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <MyDropzone id="image" />
                </th>
                <th>
                  <MyDropzone id="mask" />
                </th>
              </tr>
            </tbody>
          </table>
          <Explanations />
        </div>
      </Tab>

      <Tab eventKey="Pyradiomics" title="Pyradiomics">
        <Pyradiomics></Pyradiomics>
      </Tab>

      <Tab eventKey="Modeles IA" title="Modeles IA">
        <h1>Modeles IA</h1>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;
