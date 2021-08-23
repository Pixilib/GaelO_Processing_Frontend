import React from "react";
import MyDropzone from './DropZone'
import Explanations from './explanations'
import Pyradiomics from '../Component-Pyradiomics/pyradiomics';
import IAModels from '../Component-IAModels/IaModels'
import Send from './send'


class Test extends React.Component{
    render(){
        return <div className="full-screen"> 
        <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="dragdrop-tab" data-bs-toggle="tab" data-bs-target="#dragdrop" type="button" role="tab" aria-controls="dragdrop" aria-selected="true">Drag and Drop</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pyradiomics-tab" data-bs-toggle="tab" data-bs-target="#pyradiomics" type="button" role="tab" aria-controls="pyradiomics" aria-selected="false">Pyradiomics</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="IAModels-tab" data-bs-toggle="tab" data-bs-target="#IAModels" type="button" role="tab" aria-controls="IAModels" aria-selected="false">IA Models</button>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade all-tab show active" id="dragdrop" role="tabpanel" aria-labelledby="dragdrop-tab">
      <div className='container'>
    <table className="table table-bordered tableBordered">
        <thead>
            <tr>
                <th className="text-center">Drag here your Image</th>
                <th className="text-center">Drag here your Mask</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>
                <MyDropzone/>
                </th>
                <th>
                <MyDropzone/>
                </th>
            </tr>
        </tbody>        
    </table>
    <Send/>
    <Explanations/>
    </div>
   
      </div>
      <div className="tab-pane fade all-tab" id="pyradiomics" role="tabpanel" aria-labelledby="pyradiomics-tab"><Pyradiomics/></div>
      <div className="tab-pane fade all-tab" id="IAModels" role="tabpanel" aria-labelledby="IAModels-tab"><IAModels/></div>
    </div>
    </div>
      }

}
export default Test