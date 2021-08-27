import React, { useState, useEffect } from "react";
import apis from "../../services/apis";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function DropdownBtn(props) {
    
  const [listModels, setlistModels] = useState([]);
  const [listImages, setlistImages] = useState([]);
  const [listMasks, setlistMasks] = useState([]);
  const [listDicoms, setlistDicoms] = useState([]);

  useEffect(() => {
    handleGetListMask();
    handleGetListImage();
    handleGetListModels();
    handleGetListDicoms();
  }, []);

  const handleGetListImage = async () => {
    let answer;
    try {
      answer = await apis.getIdImage();
      setlistImages(answer);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetListDicoms = async () => {
    let answer;
    try {
      answer = await apis.getIdDicom();
      setlistDicoms(answer);
    } catch (error) {
      console.log(error);
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
  const handleGetListModels = async () => {
    let answer;
    try {
      answer = await apis.getModels();
      setlistModels(answer);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedData = (e) => {
    props.fun(e);
  };


  const objet = Object.entries(listModels);
  const listAllModels = objet.map((list, index) => (
    <Dropdown.Item
      id={index}
      key={index}
      onClick={() => {
        handleSelectedData(list);
      }}
    >
      {list.splice(1)}
    </Dropdown.Item>
  ));
  const listIdImg = listImages.map((listImage, index) => (
    <Dropdown.Item
      id={index}
      key={index}
      onClick={() => {
        handleSelectedData(listImage);
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
        handleSelectedData(listMask);
      }}
    >
      {listMask}
    </Dropdown.Item>
  ));
  const listIdDicoms = listDicoms.map((listDicom, index) => (
    <Dropdown.Item
      id={index}
      key={index}
      onClick={() => {
        handleSelectedData(listDicom);
      }}
    >
      {listDicom}
    </Dropdown.Item>
  ))
  
  switch (props.id) {
    case "image":
      return (
        <div>
          <DropdownButton
            variant="info"
            title="Images ID"
            className="drop-btn"
            onClick={handleGetListImage}
          >
            {listIdImg}
          </DropdownButton>
          <div className="div-selected">Selected Image : {props.data} </div>
        </div>
      );
    case "mask":
      return (
        <div>
          <DropdownButton
            variant="info"
            title="Mask ID"
            className="drop-btn"
            onClick={handleGetListMask}
          >
            {listIdMask}
          </DropdownButton>
          <div className="div-selected">Selected Mask : {props.data} </div>
        </div>
      );
    case "models":
      return (
        <div>
          <DropdownButton
            variant="info"
            title="IA Models"
            className="drop-btn"
            onClick={handleGetListModels}
          >
            {listAllModels}
          </DropdownButton>
          <div className="div-selected">Selected Model : {props.data} </div>
        </div>
      );
      case "dicom":
      return (
        <div>
          <DropdownButton
            variant="info"
            title="Dicoms"
            className="drop-btn"
            onClick={handleGetListDicoms}
          >
            {listIdDicoms}
          </DropdownButton>
          <div className="div-selected">Selected Dicom : {props.data} </div>
        </div>
      );
  }
  return <div></div>;
}
export default DropdownBtn;
