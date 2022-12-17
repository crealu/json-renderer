# JSON Renderer
React app that recursively renders expandable JSON.

&nbsp;
## Stack & Tools
React 17.x  
Node 14.x  
Webpack 5.x  

Fetch API  
Random User Generator

&nbsp;
## Behavior

Using the Fetch API, the app retrieves random user data from a specified url and
displays it in an expandable JSON format. The app contains a recursive component,
JSONRenderer, that dynamically sets its own class and style attributes and
render method. There is an ExpandButton component allows a user to expand
properties that contain objects as their value.  
  
A live example can be found at https://json-renderer.herokuapp.com/.

&nbsp;
## Usage
Follow the steps below.
1. Fork or clone repository
2. Navigate to local directory
3. Run `npm run devf`
4. Open localhost:9000 in a browser window
