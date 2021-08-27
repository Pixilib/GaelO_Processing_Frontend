const iamodels = {
    post_iamodels(slectedModel,slectedImage) {
        const json = '{"id":'+slectedImage+'}'
        const file= JSON.parse(json)
        console.log(slectedModel)
        console.log(slectedImage)
        console.log(file)
      return fetch(
        "/app/models/"+slectedModel+"/inference",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
          },
           body: file
        }
      )
        .then((answer) => {
            console.log(answer)
          return answer.json();
        })
        .catch((error) => {
          throw error;
        });
    },
};

export default iamodels;
