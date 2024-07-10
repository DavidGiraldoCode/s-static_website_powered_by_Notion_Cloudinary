import "../global-style.css";
import "./ProjectCollectionView.css";

export default function ProjectCollectionView(props) {
    console.log(props.collection);
    const sortedCollection = props.collection.sort( (a, b) => a.order - b.order);
    console.log(sortedCollection);

    function renderThumbnail(project) {
        return (<div className={"project_thumbnail container"} style={{backgroundColor: `#${project.color}`}} >
            <h3>{project.projectName}</h3>
            <p>{project.shortDescription}</p>
            <p className="p-small">{project.clients.map( client => client)}</p>
            <p className="p-small">{project.tags.map( tag => tag)}</p>
            <img src="https://cataas.com/cat" width={"200px"} />
        </div>);
    }
    return (
        <div className="project_collection_view gallery">
            {sortedCollection.map(renderThumbnail)}
        </div>)
}