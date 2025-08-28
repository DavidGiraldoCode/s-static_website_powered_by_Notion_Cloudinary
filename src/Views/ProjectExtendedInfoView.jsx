import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Paragraph from "./Paragraph";
import ListItem from "./ListItem";
import Callout from "./Callout";
import Image from "./Image";
import WhiteSpace from "./WhiteSpace";
import "../global-style.css";
import "./ProjectExtendedInfoView.css";
import BLOCK_LAYOUT from "../BlocksEmun";
import ProjectCoverView from "./ProjectCoverView";
import FixedHeaderView from "./FixedHeaderView";
import Thanks from "./Thanks";

function ProjectExtendedInfoView(props) {
    const COVER_HEIGHT = 700;
    const coverInfo = {
        shortDescription: props.projectsCollection.shortDescription,
        projectName: props.projectsCollection.projectName,
        clients: props.projectsCollection.clients,
        date: props.projectsCollection.date,
        coverImage: props.projectsCollection.coverImage,
        backgroundColor: props.projectsCollection.color
    }

    function blockRendererCB(block, i) {
        switch (block.type) {
            case BLOCK_LAYOUT.HEADING_1:
                return <Heading1 key={i} text={block.plain_text} />
            case BLOCK_LAYOUT.HEADING_2:
                return <Heading2 key={i} text={block.plain_text} />
            case BLOCK_LAYOUT.HEADING_3:
                return <Heading3 key={i} text={block.plain_text} />
            case BLOCK_LAYOUT.PARAGRAPH:
                return <Paragraph key={i} text={block.plain_text} />
            case BLOCK_LAYOUT.LIST_ITEM:
                return block?.list_items.map((item, j) => <ListItem key={`${i}_${j}`} text={item} />);
            case BLOCK_LAYOUT.IMAGE:
                return <Image key={i} url={block.url} />
            case BLOCK_LAYOUT.CALLOUT:
                return <Callout key={i} text={block.plain_text} />
            case BLOCK_LAYOUT.WHITE_SPACE:
                return <WhiteSpace key={i}/>
        }
    }

    return (
        <div className="project_extended_info_view container">
            <FixedHeaderView projectName={coverInfo.projectName} coverHeight={COVER_HEIGHT}/>
            <ProjectCoverView coverInfo={coverInfo} />
            {props.projectsCollection.contentBlocks.map(blockRendererCB)}
            {/* <WhiteSpace /> */}
            <Thanks message = {"Lets build something"}/>
            {/* <WhiteSpace /> */}
        </div>
    )
}

export default ProjectExtendedInfoView;