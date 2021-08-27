import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import sendfiles from "../../services/sendFiles";

export default function Dropzone(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [idimage, setidimage] = useState([null]);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  const __fileReader = (file) => {
    return new Promise((resolve) => {
      var filereader = new FileReader();
      filereader.readAsArrayBuffer(file);    
      filereader.onload = () => {
        resolve(filereader);        
      };
    });
  };

  const sendFiles = async () => {
    for (let file of acceptedFiles) {
      await __fileReader(file).then(async (reader) => {
        try {
          if (props.id === "image") {
            const stringBuffer = reader.result
            let response = await sendfiles.sendImgFiles(stringBuffer);
            let responsestr = JSON.stringify(response, null, 4);
            setidimage(responsestr);
          }
          if (props.id === "mask") {
            const stringBuffer = reader.result
            let response = await sendfiles.sendMaskFiles(stringBuffer);
            let responsestr = JSON.stringify(response, null, 4);
            setidimage(responsestr);
          }
        } catch (error) {
          console.log(error);
        }
      });
    }
  };

  return (
    <div>
      <section className="box">
        <div className="align" {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p className="text">Input your Nifti</p>
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </section>
      <div className="position">
        <button className="btn btn-info" onClick={sendFiles}>
          Send
        </button>
      </div>
      <div className="div-imageid">New image : {idimage}</div>
    </div>
  );
}