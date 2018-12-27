What is this?
In short, this is a webapplication for handling sending files to an API for conversion. The interface is designed to be simple and easy to use, and it handles single-, multiple- and folder uploads. The interface can have several different converters implemented, and switch between them through a dropdown menu.

What framework is it using?
This is a React-project, so everything is based on JSX. You will need a compiler to run the code, and I used Create-React-App for this (details at the bottom).

How does it work?
After a user has chosen a desired converter, he/she may either click or drag-and-drop the files which should be converted. After clicking “Convert”, the files are sent to the desired API, and the webapplication waits for one or several converted files to be returned. These can then be downloaded by clicking “download”. 
How can new converters be added?


All converters are handled in the json-file “converters”. Here you must specify certains parameters for the converter to work:
Id (must be unique)

Name

Route

Flavortext (not needed)

Uploadtype

Downloadtype

Multiupload


You can also add a route to a converter by adding the converters “id” in the switch statement in the file src -> currentpage -> mainpage -> mainpage.js:

	  <Route path='/DESIRED_ROUTE render={() => 
	  this.routeMount(CONVERTER_ID)
	  }/>






-
-
-
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
