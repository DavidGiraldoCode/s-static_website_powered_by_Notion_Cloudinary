import { observer } from "mobx-react-lite";
import ProjectSelectorPresenter from "./ProjectSelectorPresenter";
/*
[
    {
        "shortDescription": "...",
        "clients": ["...", n],
        "date": "2024-06-20",
        "projectId": "47f64375-b558-46af-b09d-4620f1181ceb",
        "projectName": "Lost To Time",
        "tags": [ "Gaming", "Unity C#" ],
        "protected": false,
        "order": 3,
        "previewThumbnailUrl": "https://cataas.com/cat"
    }, {} , {}
]
*/
function ProjectCollectionPresenter(props) {

    function buildGrid(project) {
        return <ProjectSelectorPresenter key={project.projectId} projectPreview={project} />
    }

    //console.log("ProjectCollectionPresenter", props.collection);

    return <div className="project_collection_presenter">
        <h1>Project Collection Presenter</h1>
        {props?.collection.map(buildGrid)}
    </div>
}

export default observer(ProjectCollectionPresenter);