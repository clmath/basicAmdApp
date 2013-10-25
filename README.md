# basicAmdApp

Very basic node.js amd application to test grunt dojo plugin

## Getting Started

After cloning the repo, install all the dependencies using npm:  

	$ npm install

## Running the build
Two build tasks are available: one producing minified code with uglifyJS2, one only concatenating the amd modules.

To output the minified version, run :

	$ grunt dojo_build 
	
To output the concatenate-only version, run :

	$ grunt dojo_uglify 

## Launching the application

To launch the __unbuilt__ version of the application you can use:

	$ node start.js

To launch the __built__ version of the application you can use (don't forget to run the build command before running this):

	$ node start-b.js

## Results
In all cases, the application should output:

	foo
	bar
	 	

## Licensing

This project is distributed by the Dojo Foundation and licensed under the ["New" BSD License](https://github.com/dojo/dojo/blob/master/LICENSE#L13-L41).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).