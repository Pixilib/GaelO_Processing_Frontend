import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const json = {
    setting: {
      minimumROIDimensions: 2,
      minimumROISize: 1,
      binWidth: 3.5,
      normalize: false,
      force2D: false,
      label: 1,
      label_channel: 1,
    },
    imageType: {},
    featureClass: {
      shape: ["Elongation", "Flatness"],
      firstorder: ["10Percentile", "90Percentile"],
      glcm: ["Autocorrelation", "JointAverage"],
      glrlm: ["LongRunHighGrayLevelEmphasis"],
      glszm: ["SizeZoneNonUniformity"],
      gldm: ["DependenceEntropy"],
    },
    voxelSetting: {},
  };
  const exJson = JSON.stringify(json, null, 4);
  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        Example JSON
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Exemple Json settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {exJson} <br />
          <h4>Documentation of all existing features : </h4>
          https://pyradiomics.readthedocs.io/en/latest/features.html{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modals;
