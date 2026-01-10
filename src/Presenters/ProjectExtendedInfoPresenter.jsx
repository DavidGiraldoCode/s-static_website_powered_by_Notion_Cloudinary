import { useQuery } from "@tanstack/react-query";
import SuspenseStateView from "../Views/SuspenseStateView";
import {
    useParams
} from "react-router-dom";
import ProjectExtendedInfoView from "../Views/ProjectExtendedInfoView";

function ProjectExtendedInfoPresenter(props) {
    const { id, key } = useParams();

    // TODO
    const portfolioShowcaseURL = props.model.portfolioShowcaseURL;
    const URL = `https://s-nodejs-serverless-func-notion-cms.vercel.app/api/project?id=${id != undefined ? id : portfolioShowcaseURL}${key != undefined ? "&key=" + key : "&key"}`;
    //

    console.log(`Fetching from: ${URL}`);
    async function getProject() {
        const response = await fetch(URL);
        if (!response.ok)
            throw new Error("Error on Notion Server");
        return response.json();
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: [`project`],
        queryFn: getProject,
    });
    console.log(error);
    if (isPending)
        return (<SuspenseStateView loading={true} />)
    if (isError)
        return (<SuspenseStateView loading={false} />)

    //https://s-nodejs-serverless-func-notion-cms.vercel.app/api/project?id=47f64375-b558-46af-b09d-4620f1181ceb&key
    return (
        <ProjectExtendedInfoView projectsCollection = {data}/>

    );

}
export default ProjectExtendedInfoPresenter;
/*
        <div className="project_extended_info_presenter">
            {data.contentBlocks.map(block => `${block.plain_text}`)}
        </div>
*/