import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';


function MyDropzone() {



  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    
    <li key={file.path}>
      {file.path} 
    </li>
  ));
  console.log(files)
  
   return (
    <section className="box">
      <div className="align" {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p className="text">Input your Nifti</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
  
}

export default MyDropzone