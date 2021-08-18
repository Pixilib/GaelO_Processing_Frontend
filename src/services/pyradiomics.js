const pyradiomics = {
  post_pyradiomcs(slectedImage, selectedMask, jsonInput) {
    return fetch(
      "/app/radiomics/image/" + slectedImage + "/mask/" + selectedMask,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8",
        },
         body: jsonInput 
      }
    )
      .then((answer) => {
        return answer.json();
      })
      .catch((error) => {
        throw error;
      });
  },
  get_metadata_img(slectedImage) {
    return fetch("/app/images/" + slectedImage, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((answer) => {
        return answer.json();
      })
      .catch((error) => {
        throw error;
      });
  },

  get_metadata_mask(slectedMask) {
    return fetch("/app/masks/" + slectedMask, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((answer) => {
        return answer.json();
      })
      .catch((error) => {
        throw error;
      });
  },

  delete_mask(slectedMask) {
    return fetch("/app/masks/" + slectedMask, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .catch((error) => {
        throw error;
      });
  },

  delete_img(slectedImage) {
    return fetch("/app/images/" + slectedImage, {
      method: "DELETE",
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    })
    .catch((error) => {
      throw error;
    });
  },
};

export default pyradiomics;
