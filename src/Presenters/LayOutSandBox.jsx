import data from "./data.json";
import Heading1 from "../Views/Heading1";
import Heading2 from "../Views/Heading2";
import Heading3 from "../Views/Heading3";
import Paragraph from "../Views/Paragraph";
import ListItem from "../Views/ListItem";
import Callout from "../Views/Callout";
import Image from "../Views/Image";
import "../global-style.css";
import "./LayOutSandBox.css";
import BLOCK_LAYOUT from "../BlocksEmun";

function LayOutSandBox(props) {

    props.model.projectsCollection = data;

    function blockRendererCB(block, i) {
        switch (block.type) {
            case BLOCK_LAYOUT.HEADING_1:
                return <Heading1 key = {i} text={block.plain_text} />
            case BLOCK_LAYOUT.HEADING_2:
                return <Heading2 key = {i}  text={block.plain_text} />
            case BLOCK_LAYOUT.HEADING_3:
                return <Heading3 key = {i}  text={block.plain_text} />
            case BLOCK_LAYOUT.PARAGRAPH:
                return <Paragraph key = {i}  text={block.plain_text} />
            case BLOCK_LAYOUT.LIST_ITEM:
                return block?.list_items.map( (item, j) => <ListItem key = {`${i}_${j}`} text={item} />);
            case BLOCK_LAYOUT.IMAGE:
                return <Image key = {i}  url={block.url}/>
            case BLOCK_LAYOUT.CALLOUT:
                return <Callout key = {i}  text={block.plain_text}/>
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