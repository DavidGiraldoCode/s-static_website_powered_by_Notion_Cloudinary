# s-static_website_powered_by_Notion_-Cloudinary
Exploring how to leverage Notion as a CMS and Cloudinary from a static website hosted on Firebase

# Next steps
[ ] Review race conditions with async await and handling loading states
[ ] Create the
[x] Try implementing the API calls from Firebase - Update, it cost, looking for free alternatives.
[x] Research about implementing the [API and Functions](https://youtu.be/yLMODEUPJdU?si=YQ2nGSrJl3VbVOGo) on Vercel, here some links: [REST API](https://vercel.com/docs/rest-api) and [Functions API Reference](https://vercel.com/docs/functions/functions-api-reference).

# DevLog
- 24 06 2024: Vercel API is working. I can retrieve a list of projects and a project content. This program knows nothing about Notion. Vercel serverless function handels that implementation.
- 12 06 2024: Created integration with Vercel: They offer a template with Node.js. The process creates a private repo on my GitHub and deploys it to the web. The source code is written in TypeScript.

- Steps:
- Created /app directory
- Added index.ts, and included code.
- Installed Express
- Added vercel.json
- deploy locally

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


