import React, { useState } from "react";
import DropDownBtn from "../Component-Pyradiomics/DropDownBtn";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import iamodels from "../../services/iaModels"


function IAModels() {
  const [selectedModel, setselectedModel] = useState("");
  const [slectedImage, setslectedImage] = useState("");
  const [selectedMask, setselectedMask] = useState("");
  const [selectedDicom, setselectedDicom] = useState("");
  const [iaAnswer, setiaAnswer] = useState("IA results");
  const [hasError, sethasError] = useState(false);


  const handleIaModels = async () => {
    let answer;
    try {
      console.log("hello")
      answer = await iamodels.post_iamodels(
        selectedModel,
        slectedImage,
      );
      setiaAnswer(answer);
    } catch (error) {
      sethasError(true);
    }
  };

  return (
    <div className="container">
      <Table className="table table-unbordered">
        <tbody>
          <tr>
            <th>
              <DropDownBtn
                id="models"
                data={selectedModel}
                fun={setselectedModel}
              />
            </th>
            <th>
              <DropDownBtn
                id="dicom"
                data={selectedDicom}
                fun={setselectedDicom}
              />
            </th>
            </tr>
            <tr>
            <th>
              <DropDownBtn
                id="image"
                data={slectedImage}
                fun={setslectedImage}
              />
            </th>
            <th>
              <DropDownBtn
                id="mask"
                data={selectedMask}
                fun={setselectedMask}
              />
            </th>
          </tr>
        </tbody>
      </Table>
      <Button
          className="btn btn-info btn-drop-form"
          onClick={handleIaModels}
        >
          Send
        </Button>
        <p>{iaAnswer}</p>
    </div>
  );
}
export default IAModels;
