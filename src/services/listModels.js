const iaModels = {
    getModels() {
      return fetch("/app/models", {
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
}
export default iaModels;