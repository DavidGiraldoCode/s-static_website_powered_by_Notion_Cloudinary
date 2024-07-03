import data from "./data.json";
import Heading1 from "../Views/Heading1";
import Heading2 from "../Views/Heading2";
import Heading3 from "../Views/Heading3";
import Paragraph from "../Views/Paragraph";
import ListItem from "../Views/ListItem";
import "../global-style.css";
import "./LayOutSandBox.css";
import BLOCK_LAYOUT from "../BlocksEmun";

function LayOutSandBox(props) {

    props.model.projectsCollection = data;

    function blockRendererCB(block) {
        switch (block.type) {
            case BLOCK_LAYOUT.HEADING_1:
                return <Heading1 text={block.plain_text} />
            case BLOCK_LAYOUT.HEADING_2:
                return <Heading2 text={block.plain_text} />
            case BLOCK_LAYOUT.HEADING_3:
                return <Heading3 text={block.plain_text} />
            case BLOCK_LAYOUT.PARAGRAPH:
                return <Paragraph text={block.plain_text} />
            case BLOCK_LAYOUT.LIST_ITEM:
                return (<span>List Items Pending ⚠️</span>)
            case BLOCK_LAYOUT.EMBED:
                return (<span>Embed Pending ⚠️</span>)
            case BLOCK_LAYOUT.CALLOUT:
                return (<span>Callout Pending ⚠️</span>)
        }

    }

    return (
        <div className="layout_sand_box container">
            {props.model.projectsCollection.contentBlocks.map(blockRendererCB)}
        </div>
    )
}

export default LayOutSandBox;
/*
<h1>Sandbox</h1>
            <Heading1 text={props.model.projectsCollection.projectName} />
            <Heading2 text={props.model.projectsCollection.clients[0]} />
            <Heading3 text={props.model.projectsCollection.date} />
            <Paragraph text={props.model.projectsCollection.shortDescription} />
            <ListItem text={props.model.projectsCollection.shortDescription} />
*/