import { observer } from "mobx-react-lite";
/*
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
}
*/
function ProjectSelectorPresenter(props) {
    console.log("ProjectSelectorPresenter");
    console.log(props);
    return <div className="project_selector_presenter">
        <h1>{props.projectPreview.projectName}</h1>
        <p>{props.projectPreview.shortDescription}</p>
        <p>Clients: {props.projectPreview.clients.map( client => `${client}, `)}</p>
        <p>Tags: {props.projectPreview.tags.map( tag => `${tag}, `)}</p>
        <p>{props.projectPreview.protected ? "Projected" : ""}</p>
    </div>
}

export default observer(ProjectSelectorPresenter);