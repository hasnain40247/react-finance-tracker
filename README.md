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

The project's source code is located under the <p style="color:red; display:inline">./expenseTracker/src/ </p>      folder. The Root entrypoint is in the App.js along with all of the pages split into the subsequent <p style="color:red; display:inline">./expenseTracker/src/Screens/ </p> folder. Every Component that was used and created are stored in the <p style="color:red; display:inline">./expenseTracker/src/Components/ </p> folder. This app uses traditional state management using React's useContext methods with the Root App component wrapped in the <Provider />, located in the <p style="color:red; display:inline">./expenseTracker/src/Utilities/Context/ </p> folder with the Context.

The App also comes with a sample set of initial state which can be deleted and tested with your own samples.