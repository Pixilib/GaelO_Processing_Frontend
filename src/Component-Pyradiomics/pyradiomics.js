import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import apis from "../services/apis";
import pyradiomics from "../services/pyradiomics";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "./modal";

class Pyradiomics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listImages: [],
      listMasks: [],
      slectedImage: "",
      selectedMask: "",
      pyradiomicsAnswer: "Radiomics results",
      metadataImg: "Metadata Result",
      metadataMask: "Metadata Result",
      jsonInput : "Your JSON here",
      delete: null,
      hasError: false,
    };
    this.handleGetListImage = this.handleGetListImage.bind(this);
    this.handleGetListMask = this.handleGetListMask.bind(this);
    this.handleSelectedImage = this.handleSelectedImage.bind(this);
    this.handleSelectedMask = this.handleSelectedMask.bind(this);
    this.handlePyradiomics = this.handlePyradiomics.bind(this);
    this.handleGetMetadata = this.handleGetMetadata.bind(this);
    this.handleDeleteImg = this.handleDeleteImg.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleGetListImage = async () => {
    let answer;
    try {
      answer = await apis.getIdImage();
      this.setState({
        listImages: answer,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handlePyradiomics = async () => {
    let answer;
    try {
      answer = await pyradiomics.post_pyradiomcs(
        this.state.slectedImage,
        this.state.selectedMask,
        this.state.jsonInput,
      );
      this.setState({
        pyradiomicsAnswer: answer,
      });
    } catch (error) {
      this.setState({
        hasError: true,
      });
      console.log(error);
      console.log(this.state.pyradiomicsAnswer);
    }
  };

  handleGetListMask = async () => {
    let answer;
    try {
      answer = await apis.getIdMask();
      this.setState({
        listMasks: answer,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleSelectedImage(e) {
    this.setState({
      slectedImage: e,
    });
  }

  handleSelectedMask(e) {
    this.setState({
      selectedMask: e,
    });
  }

  handleGetMetadata = async () => {
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
      answer1 = await pyradiomics.get_metadata_img(this.state.slectedImage);
      answer2 = await pyradiomics.get_metadata_mask(this.state.selectedMask);

      this.setState({
        metadataImg: answer1,
        metadataMask: answer2,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteImg = async () => {
    let answer1;
    let answer2;
    try {
      answer1 = await pyradiomics.delete_img(this.state.slectedImage);
      answer2 = await pyradiomics.delete_mask(this.state.selectedMask);
      this.setState({
        delete: "Image " + this.state.slectedImage + " and mask " + this.state.selectedMask+ " deleted.",
        slectedImage: null,
        selectedMask: null,
      });
      alert(this.state.delete);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange(e){
  this.setState({
    jsonInput:e.target.value
  })
}

  render() {
    const {
      listImages,
      listMasks,
      pyradiomicsAnswer,
      metadataImg,
      metadataMask,
    } = this.state;
    const strPyradiomics = JSON.stringify(pyradiomicsAnswer, null, 4);
    const strMetadataImg = JSON.stringify(metadataImg, null, 4);
    const strMetadataMask = JSON.stringify(metadataMask, null, 4);
    const listIdImg = listImages.map((listImage, index) => (
      <Dropdown.Item
        id={index}
        key={index}
        onClick={() => {
          this.handleSelectedImage(listImage);
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
          this.handleSelectedMask(listMask);
        }}
      >
        {listMask}
      </Dropdown.Item>
    ));
    if (this.state.hasError) {
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
                  onClick={this.handleGetListImage}
                >
                  {listIdImg}
                </DropdownButton>
                <div className="div-selected">
                  Selected Image : {this.state.slectedImage}{" "}
                </div>
              </th>
              <th>
                <DropdownButton
                  title="Masks ID"
                  variant="info"
                  className="drop-btn"
                  onClick={this.handleGetListMask}
                >
                  {listIdMask}
                </DropdownButton>
                <div className="div-selected">
                  Selected Mask : {this.state.selectedMask}{" "}
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        <div className="box-textarea">
          <h4>Write or paste your JSON file here : </h4>
        <textarea className="json-input" type="texte" value={this.state.jsonInput} onChange={this.handleChange}/>
        </div>
        <div className="div-drop-form">
          <button
            className="btn btn-info btn-drop-form"
            onClick={this.handlePyradiomics}
          >
            Send
          </button>
          <button
            className="btn btn-danger btn-drop-form"
            onClick={this.handleDeleteImg}
          >
            Delete
          </button>
          <button
            className="btn btn-info btn-drop-form metadata"
            onClick={this.handleGetMetadata}
          >
            Metadata
          </button>
        </div>
        <div className="handleModal">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Exemple JSON
          </button>
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
}

export default Pyradiomics;
