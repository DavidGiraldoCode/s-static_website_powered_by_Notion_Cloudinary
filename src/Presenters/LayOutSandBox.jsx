import data from "./data.json";
import Heading1 from "../Views/Heading1";
import "../global-style.css";
import "./LayOutSandBox.css";

function LayOutSandBox(props) {

    props.model.projectsCollection = data;
    return (
        <div className="layout_sand_box container">
            <h1>Sandbox</h1>
            <Heading1 text={props.model.projectsCollection.projectName}/>
        </div>
    )
}

export default LayOutSandBox;
