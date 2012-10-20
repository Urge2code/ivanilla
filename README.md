iVanilla
========
<p align="center"><img src="http://thibautvs.com/blog/img/urge2code/ivanilla.png" /></p>

_Vanilla software is computer software that is not customized from its delivered form – i.e. it is used without any customizations applied to it._
<span>(Wikipedia)</span>

iVanilla is a lightweight web project skeleton for mobile iDevices (iPhone, iPad, ...).
It provides you with an html, css and js file to help you get started quickly.

iVanilla.html
-------------

Valid HTML5 page structure, optimized for iDevices. It has correct viewport configuration so content is displayed nicely without the need to zoom.
Therefore, it also disables the zoom feature to improve the user experience, reproducing the feeling of a native application.

iVanilla.js
-----------

Provides the iVanilla object that you can use in your code to access various informations (such as the device being used, if it is retina-equipped, current orientation, ...).
It provides an event to notify your application when orientation changes.
It also features an automatic hide of the location bar when the orientation changes. Pretty sweet ! 

iVanilla.css
------------

Provides many media queries (for iPhone, iPad, retina screens, orientations, ...) so you just have to pick the ones you need for your project.

demo.html
---------

Demonstration page on how to use the JS and CSS sweetnesses of iVanilla. For reading convenience, the HTML, CSS and JS have been placed in the same page.

Requirements
============

iVanilla is built using jQuery, therefore a reference to this library is included in the project. It uses the code.jquery.com CDN but feel free to change it or update the version number
in the ```<script>``` tag.

Recommendations
===============

iVanilla enables you to accomplish some tasks (such as orientation detection) using CSS or JS. From a maintenance and performance point of view, it is recommended that you first follow
a CSS-based approach and for the cases where CSS cannot help, use the JS approach instead.

As this little project was designed to remain as lightweight as possible, features were intentionally kept to the minimum. However, it remains a very strong foundation on top of which
you can add some interesting libraries, such as:

* HammerJS
* jQueryMobile
* jQTouch
* ...