# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`


**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

The idea : 

The project is a Platform to give support in finding missing persons.

The users will be able to post a request for a missing person using a geo map and additional information that can help the platform users to find the missing person.

The main feature will be a search/discovery and entries listing, then maintain a communication channel between the people interested in the search quest.

Nowadays finding missing persons might take months or even years, and thanks to social media; it's easier to find common connections that facilitate accessing useful information about the area where the missing person might be, the last time was seen, or any doubt.


The platform:

Our platform consists of 2 core components, the backend is composed of some public and private APIs exposed mainly to any internet user and the frontend sides consume those APIs and also provide documentation to the public ones.

Backend:
This application will contain several API calls, all split by logic and common context. The private API will include :
User authentication
User profile
Person searches (list, create, update, delete)
Person Hints (list, create, update, delete)
Communication

The public API will be available for anyone on the internet to consume in order to give anyone the chance to broadcast our data anyone, build applications on top of us that might facilitate our mission more.
Person searches (list)
Person Hints (list)

The Frontend:
Creating a ReactJS frontend application to integrate all the APIs built; will offer a responsive web interface to our visitors in order to use all the features needed to accomplish a missing persons search or contribute to it.

The front page would be an introduction for our service it means we will explain to the users who are not signed in the core service we offer 
The front page also will allow to people to create an account or log in 
If the user is already logged in they can see : 
 News feed where there are entries and news about missing people 
They would be able to search as well 
They can also see a map 
And they can contribute or react to the news feed items. 
Any entry ( a post about the missing person ) will create its own page an entry with geological data and some information that can help find the missing person. 

Best benchmark so far : 
https://www.deeye.app/ 


