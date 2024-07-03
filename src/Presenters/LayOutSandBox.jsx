import data from "./data.json";
import Heading1 from "../Views/Heading1";
import Heading2 from "../Views/Heading2";
import Heading3 from "../Views/Heading3";
import Paragraph from "../Views/Paragraph";
import ListItem from "../Views/ListItem";
import "../global-style.css";
import "./LayOutSandBox.css";

function LayOutSandBox(props) {

    props.model.projectsCollection = data;
    return (
        <div className="layout_sand_box container">
            <h1>Sandbox</h1>
            <Heading1 text={props.model.projectsCollection.projectName} />
            <Heading2 text={props.model.projectsCollection.clients[0]} />
            <Heading3 text={props.model.projectsCollection.date} />
            <Paragraph text={props.model.projectsCollection.shortDescription} />
            <ListItem text={props.model.projectsCollection.shortDescription} />

        </div>
    )
}

export default LayOutSandBox;
