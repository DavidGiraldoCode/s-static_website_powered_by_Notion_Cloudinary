import "../global-style.css";
import "./ProjectCoverView.css";
import Heading1 from "./Heading1";
import ListItem from "./ListItem";
import Paragraph from "./Paragraph";


export default function ProjectCoverView(props) {
    const coverImageStyle = {
        backgroundImage: `url(${props.coverInfo.coverImage})`,
        backgroundPosition: 'center',
        backgroundSize: '1240px 600px',
        backgroundRepeat: 'no-repeat',
        backgroundColor: `#${props.coverInfo.backgroundColor}`
    };
    return (
        <div className="project_cover_view container" style={coverImageStyle}>
            {/*<img className="cover_image" src={props.coverInfo.coverImage} />*/}
            <div className="cover_row container">
                <div className="cover_content_container left">
                    <div className="m-bottom-s">
                        <p>
                            {props.coverInfo.date.split('-').join(" / ")}
                        </p>
                    </div>
                    <div className="m-bottom-l">
                        <h1>
                            {props.coverInfo.projectName}
                        </h1>
                    </div>
                    <div className="m-bottom-m">
                        <p>
                            {props.coverInfo.shortDescription}
                        </p>
                    </div>
                    {props.coverInfo.clients.map(client => {
                        return (
                            <div className="m-bottom-s">
                                <p>
                                    {client}
                                </p>
                            </div>)
                    })}
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
};


