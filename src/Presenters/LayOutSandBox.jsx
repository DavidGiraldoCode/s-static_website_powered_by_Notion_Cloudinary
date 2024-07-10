import data from "./data.json";
import Heading1 from "../block_components/Heading1";
import Heading2 from "../block_components/Heading2";
import Heading3 from "../block_components/Heading3";
import Paragraph from "../block_components/Paragraph";
import ListItem from "../block_components/ListItem";
import Callout from "../block_components/Callout";
import Image from "../block_components/Image";
import "../global-style.css";
import "./LayOutSandBox.css";
import BLOCK_LAYOUT from "../BlocksEmun";
import ProjectCoverView from "../Views/ProjectCoverView";
import SuspenseStateView from "../Views/SuspenseStateView";
import ProjectCollectionView from "../Views/ProjectCollectionView";

function LayOutSandBox(props) {

    props.model.projectsCollection = data;
    const coverInfo = {
        shortDescription: props.model.projectsCollection.shortDescription,
        projectName: props.model.projectsCollection.projectName,
        clients: props.model.projectsCollection.clients,
        date: props.model.projectsCollection.date,
        coverImage: props.model.projectsCollection.coverImage,
    }

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
            <h1>Sandbox</h1>
            <ProjectCollectionView collection = {props.model.projectsCollection}/>
            {/* <SuspenseStateView loading={true}/> */}
            {/* <ProjectCoverView coverInfo = {coverInfo}/> */}
            {/* {props.model.projectsCollection.contentBlocks.map(blockRendererCB)} */}
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