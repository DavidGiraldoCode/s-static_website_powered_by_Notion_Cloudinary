# s-static_website_powered_by_Notion_-Cloudinary
Exploring how to leverage Notion as a CMS and Cloudinary from a static website hosted on Firebase

# Model-View-Presenter pattern
This project follows a MVP patter to separate concerns within an application.
```
Model
├── Holds the ProjectCollection object as a member variable, fetched from the API.
└── Holds a member variable called projectOnFocus = null, that is set to ProjectExtendedInfo when the API returns the request

<App/>
├── > propsDown: Model
├── < eventsUp: 
└── <Router>
    ├── > propsDown: Model
    ├── /projects
    ├── /project?id:&key:

<ProjectCollectionPresenter collection />
├── Takes the ProjectCollection object and builds the project grid
└── <ProjectSelectorPresenter projectPreview />
    ├── Handles request to the API to set the projectOnFocus
    ├── Set the route to /project?id=12345&key=123, <ProjectExtendedInfoPresenter/>
    └── <ProjectCardView projectPreview onClick/>

<ProjectExtendedInfoPresenter/>
├── > propsDown: projectPreview
├── If the projectPreview protected == true, renders the <ProtectedProjectPresenter/>
├── <ProtectedProjectPresenter />
│   ├── > propsDown: projectPreview
│   ├── < eventUp: onValidKey() Flags the <ProjectExtendedInfoPresenter/> that the request is valid
│   └── Handles the request to the API using the inputed key 
└── <ProjectExtendedInfoView>
    ├── > propsDown: ProjectExtendedInfo
    ├── < eventsUp: 
    ├── Render and laysout all the HTML custom components that come from the project blocks
    ├── <Heading1 text/>
    ├── <Heading2 text/>
    ├── <Heading3 text/>
    ├── <Paragraph text/>
    ├── <Quote text/>
    ├── <ListItem items[]/>
    └── <Embed url/>


<ProjectSelectorPresenter>
├── Listen for click event to change the projectOnFocus

ProjectCardView

```

# Next steps
- [x] Add Fixed labels on edges _david_, _portfolio_, _2024_
- [x] Update font-family to Albert Sans
- [ ] *Update fixed header, and dates on fixed div at bottom
- [ ] **Create new layout for Showcase cover, no Date tag
- [ ] Review and refactor useEffect and useState on FixedHeadersView
- [ ] Note that fixed header are on top of everything, disabling highlighting and clicking.
- [x] Use custom domain `david.design` from porkhunt
- [x] Create <WhiteSpace> componets for better readability
- [x] Tinker with font styles
- [x] Design the layout and visuals of the suspense state
- [x] Create API call to projectExtendedInfo
- [x] Handle case for protected projets, <ProtectedProjectPresenter/>
- [x] Review race conditions with async await and handling loading states -> Solved with TanStack.
- [x] Create the model
- [x] Try implementing the API calls from Firebase - Update, it cost, looking for free alternatives.
- [x] Research about implementing the [API and Functions](https://youtu.be/yLMODEUPJdU?si=YQ2nGSrJl3VbVOGo) on Vercel, here some links: [REST API](https://vercel.com/docs/rest-api) and [Functions API Reference](https://vercel.com/docs/functions/functions-api-reference).

# DevLog
- Trying TankStack
`npm i @tanstack/react-query`
`npm i @tanstack/react-query-devtools`
`react-router-dom`
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

``` bash
Shift + command = Previous README
```