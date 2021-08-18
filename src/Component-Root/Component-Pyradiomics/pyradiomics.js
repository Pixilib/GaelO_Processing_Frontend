import React, { useState, useEffect } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import apis from "../../services/apis";
import pyradiomics from "../../services/pyradiomics";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "./modal";

function Pyradiomics() {
  const [listImages, setlistImages] = useState([]);
  const [listMasks, setlistMasks] = useState([]);
  const [slectedImage, setslectedImage] = useState("");
  const [selectedMask, setselectedMask] = useState("");
  const [pyradiomicsAnswer, setpyradiomicsAnswer] =
    useState("Radiomics results");
  const [metadataImg, setmetadataImg] = useState("Metadata Result");
  const [metadataMask, setmetadataMask] = useState("Metadata Result");
  const [jsonInput, setjsonInput] = useState("Your JSON here");
  const [del, setdel] = useState(null);
  const [hasError, sethasError] = useState(false);

  const handleGetListImage = async () => {
    let answer;
    try {
      answer = await apis.getIdImage();
      setlistImages(answer);
    } catch (error) {
      console.log(error);
    }
  };

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
        sethasError(true)
    }
  };

  const handleGetListMask = async () => {
    let answer;
    try {
      answer = await apis.getIdMask();
      setlistMasks(answer);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedImage = (e) => {
    setslectedImage(e);
  };

  const handleSelectedMask = (e) => {
    setselectedMask(e);
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
      setdel("Image " + slectedImage + " and mask " + selectedMask + " deleted.")
      setslectedImage(null);
      setselectedMask(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    if (del==null){
      
    }else{
      alert(del)}
      setdel(null)
  },[del])

  const handleChange = (e) => {
      setjsonInput(e.target.value)
  };

  const strPyradiomics = JSON.stringify(pyradiomicsAnswer, null, 4);
  const strMetadataImg = JSON.stringify(metadataImg, null, 4);
  const strMetadataMask = JSON.stringify(metadataMask, null, 4);
  const listIdImg = listImages.map((listImage, index) => (
    <Dropdown.Item
      id={index}
      key={index}
      onClick={() => {
        handleSelectedImage(listImage);
      }}
    >
      {listImage}
    </Dropdown.Item>
  ));
  const listIdMask = listMasks.map((listMask, index) => (
    <Dropdown.Item
      id={index}
      key={index}
      onClick={() => {
        handleSelectedMask(listMask);
      }}
    >
      {listMask}
    </Dropdown.Item>
  ));
  if (hasError) {
    return <h1 className="wrong">Something went wrong please reload page</h1>;
  }
  return (
    <div className="container">
      <table className="table table-unbordered">
        <tbody>
          <tr>
            <th>
              <DropdownButton
                variant="info"
                title="Images ID"
                className="drop-btn"
                onClick={handleGetListImage}
              >
                {listIdImg}
              </DropdownButton>
              <div className="div-selected">
                Selected Image : {slectedImage}{" "}
              </div>
            </th>
            <th>
              <DropdownButton
                title="Masks ID"
                variant="info"
                className="drop-btn"
                onClick={handleGetListMask}
              >
                {listIdMask}
              </DropdownButton>
              <div className="div-selected">
                Selected Mask : {selectedMask}{" "}
              </div>
            </th>
          </tr>
        </tbody>
      </table>
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
        <button
          className="btn btn-info btn-drop-form"
          onClick={handlePyradiomics}
        >
          Send
        </button>
        <button
          className="btn btn-danger btn-drop-form"
          onClick={handleDeleteImg}
        >
          Delete
        </button>
        <button
          className="btn btn-info btn-drop-form metadata"
          onClick={handleGetMetadata}
        >
          Metadata
        </button>
      </div>
      <div className="handleModal">
        <Modal id="exampleModal" />
      </div>
      <div className="frame-strPyradiomics">{strPyradiomics}</div>
      <div className="frame-strMetadata">
        <b>Image Metadatas : </b> {strMetadataImg}
        <br />
        <b>Mask Metadatas : </b> {strMetadataMask}
        <br />
      </div>
    </div>
  );
}

export default Pyradiomics;
