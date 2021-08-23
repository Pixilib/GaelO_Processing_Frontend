import React, { useState }  from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import iaModels from "../../services/listModels";

function IAModels () {

  
    const [listModels, setlistModels]= useState([])
    const [selectedModel,setselectedModel]=useState("")
    

  const handleGetListModels = async () => {
    let answer;
    try {
      answer = await iaModels.getModels();
        setlistModels(answer)
      console.log(listModels)
      console.log(typeof (listModels))
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedModel = (e) => {
      setselectedModel(e)
    console.log(e)
    console.log(selectedModel)
  }


   
    // const models = listModels.map((listModel, index) => (
    //     <Dropdown.Item
    //       id={index}
    //       key={index}
    //       onClick={() => {
    //         handleSelectedModel(listModel);
    //       }}
    //     >
    //       {listModel}
    //     </Dropdown.Item>
    //   ));
    return (
      <div>
        <DropdownButton
          variant="info"
          title="IA Models"
          className="drop-btn"
          onClick={handleGetListModels}
        >
          {/* {models} */}
        </DropdownButton>

      </div>
    )
  


}
export default IAModels;