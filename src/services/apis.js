const idImages = {
  getIdImage() {
    return fetch("/app/images", {
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
  getIdMask() {
    return fetch("/app/masks", {
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
  getIdDicom() {
    return fetch("/app/dicoms", {
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
  getModels: () =>
  fetch("/app/models", {
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
    }),
}


export default idImages
