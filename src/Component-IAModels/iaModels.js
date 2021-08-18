import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import iaModels from "../services/listModels";

class IAModels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listModels: [],
            selectedModel:"",
        }
    };

    handleGetListModels = async () => {
        let answer;
        try {
          answer = await iaModels.getModels();
          this.setState({
            listModels: answer,
          });
          console.log(this.state.listModels)
          console.log(typeof(this.state.listModels))
        } catch (error) {
          console.log(error);
        }
      };

      handleSelectedModel(e) {
        this.setState({
        selectedModel: e,
        });
        console.log(e)
        console.log(this.state.selectedModel)
      }

render(){
    const {listModels
        
      } = this.state;
    // const models = listModels.map((listModel, index) => (
    //     <Dropdown.Item
    //       id={index}
    //       key={index}
    //       onClick={() => {
    //         this.handleSelectedModel(listModel);
    //       }}
    //     >
    //       {listModel}
    //     </Dropdown.Item>
    //   ));
    return(
        <div>
            <DropdownButton
                  variant="info"
                  title="IA Models"
                  className="drop-btn"
                  onClick={this.handleGetListModels}
                >
                    {/* {models} */}
                </DropdownButton>

        </div>
    )
}


}
export default IAModels;