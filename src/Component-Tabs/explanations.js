import React from 'react'

function Explanations() {

  return <div className="container">
    <div className="card">
      <div className="card-header cardHeader">
        Explanations
      </div>
      <div className="card-body cardBody">
        <h5 className="card-title">What we can do</h5>
        <p className="card-text">Enter your image and mask. Then retrieve the id of the latter.<br />
          By clicking on the pyradiomics tab you can select an image and a mask via their id.
          You can then extract the radiomics characteristics, recover metadatas and delete images.
        </p>
        <a href="https://www.google.fr/" className="btn btn-secondary">Go Somewhere</a>
      </div>
    </div>
  </div>
}

export default Explanations