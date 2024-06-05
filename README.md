# s-static_website_powered_by_Notion_-Cloudinary
Exploring how to leverage Notion as a CMS and Cloudinary from a static website hosted on Firebase


## Notion API fundamentals

Notion creates a Bot that will interact with the user's workspace. For the integration to work, it need explicit permission.
There are two types of integration, **internal** and **public**. All intergation start as **internal** by default. The former refer one workspace, and the permissions can be granted via the Notion UI. Integration can be server-only or client-only.

This integration will be client-only

1. Go to `https://www.notion.com/my-integrations` to register a new integration.
2. Get the Key - API Secret (also called Integration Token), and save it as .env variable.
3. Go or create a page you want the integration to control and Connections option, select the name of the recently created integration
4. Install the notion Client `npm install @notionhq/client`


# DevLog
- Got a CORS error when trying to request a database, the Notion team [replied](https://github.com/makenotion/notion-sdk-js/issues/458#issuecomment-1743915685) to this matter:
>"Due to security concerns of exposing API tokens in the browser, Notion public API requests aren't able to be made from a web browser. You'll have to make the requests server side and then send the results to the browser. Apologies for any inconvenience."
- Created the Notion page as an empty (fullpage) database, [here they explain how to query it](https://developers.notion.com/reference/retrieve-a-database).
- Having troubles with reading .env variables in React. I will use notionConfig.js in the meantime and disregarded with .gitignore
```javascript
const notionConfig = {
    NOTION_ACCESS_TOKEN: "....",
    NOTION_DATABASE_ID: "...."
};
export default notionConfig;
```
https://www.npmjs.com/package/dotenv


# Next steps
[x] Try implementing the API calls from Firebase - Update, it cost, looking for free alternatives.
[ ] Research about implementing the [API and Functions](https://youtu.be/yLMODEUPJdU?si=YQ2nGSrJl3VbVOGo) on Vercel, here some links: [REST API](https://vercel.com/docs/rest-api) and [Functions API Reference](https://vercel.com/docs/functions/functions-api-reference).