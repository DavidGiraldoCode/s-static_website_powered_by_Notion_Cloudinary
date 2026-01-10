/**
 * PortfolioModel holds the projects, about and calls
*/
class PortfolioModel {
    #API_URL = "https://s-nodejs-serverless-func-notion-cms.vercel.app"
    #PROJECT_COLLECTION_ENDPOINT = "/api/projects";
    #PROJECT_ENDPOINT = "/api/project";
    projectOnFocus = null; // is then set to ProjectExtendedInfo
    projectsCollection = null;

    // Burned-in URL to make the visible URL more readable
    portfolioShowcaseURL = "2e2e6124750480608442d8de8e507946"

    constructor() {
        //this.projectsCollection = this.requestProjectCollection();
    }

    async requestProjectCollection() {
        const requesConfig = {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json'
            }
        };
        const response = await fetch(`${this.#API_URL}${this.#PROJECT_COLLECTION_ENDPOINT}`, requesConfig);
        const data = await response.json();
        this.projectsCollection = data;
        //return data;
    }
}
const portfolioModel = new PortfolioModel();
export default portfolioModel;