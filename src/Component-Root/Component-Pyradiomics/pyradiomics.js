import React, { useState, useEffect } from "react";
import pyradiomics from "../../services/pyradiomics";
import Modal from "./Modal";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import DropDownBtn from "./DropDownBtn";

function Pyradiomics() {
  const [slectedImage, setslectedImage] = useState("");
  const [selectedMask, setselectedMask] = useState("");
  const [pyradiomicsAnswer, setpyradiomicsAnswer] = useState("Radiomics results");
  const [metadataImg, setmetadataImg] = useState("Metadata Result");
  const [metadataMask, setmetadataMask] = useState("Metadata Result");
  const [jsonInput, setjsonInput] = useState("Your JSON here");
  const [del, setdel] = useState(null);
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    if (del == null) {
    } else {
      alert(del);
    }
    setdel(null);
  }, [del]);

  const handlePyradiomics = async () => {
    let answer;
    try {
      answer = await pyradiomics.post_pyradiomcs(
        slectedImage,
        selectedMask,
        jsonInput
      );
      setpyradiomicsAnswer(answer);
    } catch (error) {
      sethasError(true);
    }
  };

  const handleGetMetadata = async () => {
    let answer1;
    let answer2;
    try {
      // if (this.state.slectedImage === "") {
      //   answer2 = await pyradiomics.get_metadata_mask(this.state.selectedMask);
      //   this.setState({
      //     metadataImg: "No image selected",
      //     metadataMask: answer2,
      //   });
      // }
      // if (this.state.slectedMask ==="") {
      //   answer1 = await pyradiomics.get_metadata_img(this.state.slectedImage);
      //   this.setState({
      //     metadataImg: answer1,
      //     metadataMask: "No mask selected",
      //   });
      // } else {}
      answer1 = await pyradiomics.get_metadata_img(slectedImage);
      answer2 = await pyradiomics.get_metadata_mask(selectedMask);
      setmetadataImg(answer1);
      setmetadataMask(answer2);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteImg = async () => {
    let answer1;
    let answer2;
    try {
      answer1 = await pyradiomics.delete_img(slectedImage);
      answer2 = await pyradiomics.delete_mask(selectedMask);
      setdel(
        "Image " + slectedImage + " and mask " + selectedMask + " deleted."
      );
      setslectedImage(null);
      setselectedMask(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setjsonInput(e.target.value);
  };

  if (hasError) {
    return <h1 className="wrong">Something went wrong please reload page</h1>;
  }
  return (
    <div className="container">
      <Table className="table table-unbordered">
        <tbody>
          <tr>
            <th>
              <DropDownBtn id="image" data={slectedImage} fun={setslectedImage}/>
            </th>
            <th>
              <DropDownBtn id="mask" data={selectedMask} fun={setselectedMask}/>
            </th>
          </tr>
        </tbody>
      </Table>
      <div className="box-textarea">
        <h4>Write or paste your JSON file here : </h4>
        <textarea
          className="json-input"
          type="texte"
          value={jsonInput}
          onChange={handleChange}
        />
      </div>
      <div className="div-drop-form">
        <Button
          className="btn btn-info btn-drop-form"
          onClick={handlePyradiomics}
        >
          Send
        </Button>
        <Button
          className="btn btn-danger btn-drop-form"
          onClick={handleDeleteImg}
        >
          Delete
        </Button>
        <Button
          className="btn btn-info btn-drop-form metadata"
          onClick={handleGetMetadata}
        >
          Metadata
        </Button>
      </div>
      <div className="handleModal">
        <Modal id="exampleModal" />
      </div>
      <div className="frame-strPyradiomics">
        {JSON.stringify(pyradiomicsAnswer, null, 4)}
      </div>
      <div className="frame-strMetadata">
        <b>Image Metadatas : </b> {JSON.stringify(metadataImg, null, 4)}
        <br />
        <b>Mask Metadatas : </b> {JSON.stringify(metadataMask, null, 4)}
        <br />
      </div>
    </div>
  );
}
export default Pyradiomics;