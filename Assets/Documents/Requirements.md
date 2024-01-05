# 19 Progressive Web Applications (PWA): Text Editor

## User Story

AS A developer - I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

<div style="font-size:24px">
GIVEN a text editor web application

<span style="color:orange;font-size:24px">WHEN I open my application in my editor</span><br/>
<span style="color:green">THEN I should see a client server folder structure</span><br/>

<span style="color:orange">WHEN I run `npm run start` from the root directory</span><br/>
<span style="color:green">THEN I find that my application should start up the backend and serve the client</span><br/>

<span style="color:orange">WHEN I run the text editor application from my terminal</span><br/>
<span style="color:green">THEN I find that my JavaScript files have been bundled using webpack</span><br/>

<span style="color:orange">WHEN I run my webpack plugins</span><br/>
<span style="color:green">THEN I find that I have a generated HTML file, service worker, and a manifest file</span><br/>

<span style="color:orange">WHEN I use next-gen JavaScript in my application</span><br/>
<span style="color:green">THEN I find that the text editor still functions in the browser without errors</span><br/>

<span style="color:orange">WHEN I open the text editor</span><br/>
<span style="color:green">THEN I find that IndexedDB has immediately created a database storage</span><br/>

<span style="color:orange">WHEN I enter content and subsequently click off of the DOM window</span><br/>
<span style="color:green">THEN I find that the content in the text editor has been saved with IndexedDB</span><br/>

<span style="color:orange">WHEN I reopen the text editor after closing it</span><br/>
<span style="color:green">THEN I find that the content in the text editor has been retrieved from our IndexedDB</span><br/>

<span style="color:orange">WHEN I click on the Install button</span><br/>
<span style="color:green">THEN I download my web application as an icon on my desktop</span><br/>

<span style="color:orange">WHEN I load my web application</span><br/>
<span style="color:green">THEN I should have a registered service worker using workbox</span><br/>

<span style="color:orange">WHEN I register a service worker</span><br/>
<span style="color:green">THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets</span><br/>

WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application

</div>

## Mock-Up

The following animation demonstrates the application functionality:

![Demonstration of the finished Module 19 Challenge being used in the browser and then installed.](./Assets/00-demo.gif)

The following image shows the application's `manifest.json` file:

![Demonstration of the finished Module 19 Challenge with a manifest file in the browser.](./Assets/01-manifest.png)

The following image shows the application's registered service worker:

![Demonstration of the finished Module 19 Challenge with a registered service worker in the browser.](./Assets/02-service-worker.png)

The following image shows the application's IndexedDB storage:

![Demonstration of the finished Module 19 Challenge with a IndexedDB storage named 'jate' in the browser.](./Assets/03-idb-storage.png)

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
