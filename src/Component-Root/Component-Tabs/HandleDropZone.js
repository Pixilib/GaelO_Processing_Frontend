import React from "react";
import Explanations from "./Explanations";
import Table from "react-bootstrap/Table";
import MyDropzone from "./DropZone"

function HandleDropZone() {
  return (
    <div className="container">
      <Table className="table table-bordered">
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
      </Table>
      <Explanations />
    </div>
  );
}

export default HandleDropZone;
