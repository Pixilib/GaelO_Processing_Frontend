import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Modal extends React.Component {
  render() {
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
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Exemple Json settings
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{exJson} <br/><h4>Documentation of all existing features : </h4>https://pyradiomics.readthedocs.io/en/latest/features.html</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
