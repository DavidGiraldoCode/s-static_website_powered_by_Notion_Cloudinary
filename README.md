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
- Having troubles with reading .env variables in React. I will use notionConfig.js in the meantime and disregarded with .gitignore
```javascript
const notionConfig = {
    REACT_APP_NOTION_KEY: "....",
    authDomain: "...."
};
export default notionConfig;
```
https://www.npmjs.com/package/dotenv