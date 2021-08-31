const iamodels = {
    post_iamodels(slectedModel,slectedImage) {

      return fetch(
        "/app/models/"+slectedModel+"/inference",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
          },
           body: JSON.stringify({
             id : slectedImage
           })
        }
      )
        .then((answer) => {
          console.log(answer)
          if(!answer.OK) throw answer
          return answer.json();
        })
        .catch((error) => {
          throw error;
        });
    },
};

export default iamodels;
