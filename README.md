# React Fitness Tracker App

Install all the npx packages by moving into  the project directory and running the following command:
```
> npm i
```
Run the following command inside the project directory to start a metro bundler on a tunnelled localserver
```
> expo start --tunnel
```
The Application APK is located under ./expenseTracker/App APK/trackit.apk

The project's source code is located under the "./expenseTracker/src/" folder. The Root entrypoint is in the App.js along with all of the pages split into the subsequent "./expenseTracker/src/Screens/" folder. Every Component that was used and created are stored in the "./expenseTracker/src/Components/" folder. This app uses traditional state management using React's useContext methods with the Root App component wrapped in the <Provider />, located in the "./expenseTracker/src/Utilities/Context/" folder with the Context.

The App also comes with a sample set of initial state which can be deleted and tested with your own samples.
