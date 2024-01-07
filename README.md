<a id="readme-top" name="readme-top"></a>

<p align="center"><img src="./assets/images/carleton-u-logo.jpg" height="250"></p>

<p align="center" style="margin-top:25px; margin-bottom:50px;">
	<a><img src="https://img.shields.io/static/v1.svg?label=License&message=Mozilla Public License&color=blue"/></a>
</p>

# Progrssive Web Applications (PWA)

<details style="margin-bottom: 25px; margin-top: 25px;">
	<summary>Table of Contents</summary>
	<ol>
		<li><a href="#Description">Generator Description</a></li>
		<li><a href="#installation">Installation</a></li>
          <li><a href="#plugins">Webpack Plugins</a></li>
		<li><a href="#usage">Application Usage</a></li>
		<li><a href="#contactme">Questions? Contact Me!</a></li>
		<li><a href="#license">License</a></li>
	</ol>
</details>

<div id="Description" style="margin-top: 25px;">

## Generator Description

This week has been all about PWA. This stands for Progressive Web App (PWA), an app that's built using web platform technologies, but that provides a user experience like that of a platform-specific app.

Based on [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app) this is the definition of Platform-Specific apps.
Platform-specific apps are developed for a specific operating system (OS) and/or class of device, like an iOS or Android device, generally using an SDK provided by the platform vendor. They are usually distributed using the vendor's app store, where the user can find and install them, and they subsequently seem to the user like a permanent extra feature of their device, expanding its capabilities in some way.

The template-base application was given to us. Our challenge was to make-prepare application to be installed as a PWA application.

Here is the snapshotJust Another Text Editor!

<div style="margin-top: 15px;"><img src="./assets/images/node001.png"></div>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

<div id="installation" style="margin-bottom: 20px;margin-top: 20px;">

## Installation
Please follow the instructions to install the JATE application

|Name|Description |
|---|---|
|[jate-repo][jate-repo]| Navigate to JATE github repo and clone application. |
|[install-dependancies][]| Navigate to Develop folder and install depandancies. `npm run install` |
|[build-develop][] | Run script `npm run start:dev`. This script will compile and create the JATE application, it generates the `dist` and starts the server. |

[jate-repo]: https://github.com/gusmiller/PWA-Editor
[install-dependancies]: install-dependacies
[build-develop]: build-develop

**NOTE** the client and server have their own dependancies and scripts. Please review each of the `package.json` for further details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

<div id="usage" style="margin-top: 25px;">

## Application Usage

The application is as simple, a text editor but, in the background it uses indexDB. Application is ready to be installed as a PWD, It includes the required manifas well as the service worker. Once the application is loaded it retrieves any existing data, then it listens for changes in the text editor, it saves or retrieves information from the local database.

The editor that we are using is called code mirror that allows a rich interface giving the user the experience of an awesome editor. The application is not meant to replace existing editors, but to prepare that developer to create a PWA application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

<div id="contactme" style="margin-top: 25px;">

## Questions? Contact Me 

The purpose of this JATE (Just Another Text Editor) is to understand the process of preparing a website to be migrated to a PWA. This is a new technology that will eventually replace the need of installing phone applications.

Do not hesitate in contacting me, Gustavo Miller - gustavo.miller@miller-hs.com.

You may find the application at: [https://github.com/gusmiller/PWA-Editor](https://github.com/gusmiller/PWA-Editor)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

<div id="license" style="margin-top: 25px;">

## License
Mozilla Public License Version 2.0

Copyright (c) 2024 PWA - Just Another Text Editor (JATE)

For this project I have yet used a different licence - trying to understand the differences between them. I have not customized the terms and conditions to the application in case. If one day I publish this application then I will, for now is up to you to make it yours.

Please read [License](/LICENSE)

<a href=""><img src="https://img.shields.io/static/v1.svg?label=License&message=Mozilla Public License&color=yellow"/></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved. Developed by Gustavo Miller.