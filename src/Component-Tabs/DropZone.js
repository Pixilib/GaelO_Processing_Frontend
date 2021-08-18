import React from 'react'
import { useDropzone } from 'react-dropzone'

export default function Dropzone() {

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path}
    </li>
  ))

  return (
    <section className="box">
      <div className="align" {...getRootProps({ className: 'dropzone' })} >
        <input {...getInputProps()} />
        <p className="text">Input your Nifti</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  )

}