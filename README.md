
# Tempo Frontend challenge

![Main Screen](https://github.com/IMeinen/MEINEN_fe_ARTUR_exercise/blob/main/MainScreen.png)
# Solution Improvement

## Major design changes
	
 - ### Components strucutre: 
	 One of the main changes made was to change the structure of the components in order to segregate the responsibility of the code. In this case, a file was created for styles, another for types, hooks (functions and state handling), tests and the main file that groups it all together. In a project of this size, it might be considered over engineering, but as the application scales, this pattern makes code understanding, maintenance and testing easier.

	![ component structure](https://github.com/IMeinen/MEINEN_fe_ARTUR_exercise/blob/main/architecture_changes.png)
 - ### UI improvment:
	All the styles in the necessary components were changed to create a nice and fluid UI. In addition, some new components were created to improve the feedback for the user, making the navigation more intuitive.
- ### Creation of new tests and improve the legacy tests:
	The objective was to create all the necessary tests to guarantee the functioning of what was created in an application scale situation. Some old tests were restructured and others were created. All components have their own test and the 100% coverage metric has been reached.

![enter image description here](https://github.com/IMeinen/MEINEN_fe_ARTUR_exercise/blob/main/TestsCoverage.png)

- ### Folder structure changes:
	The folder structure has been changed. In the Pages and Components folder, an index file was created to import all the components in a grouped way, making it easier to import the components and reducing the verbosity of the code.
	
	![exports grouped](https://github.com/IMeinen/MEINEN_fe_ARTUR_exercise/blob/main/imports_grouped.png)

![calling imports grouped](https://github.com/IMeinen/MEINEN_fe_ARTUR_exercise/blob/main/call_imports_grouped.png)


## Minor changes:

- Names of variables and components that do not make sense in the context of the project have been changed.
- Replaced use of var with let and const where applicable.
- Added React-icons lib for using icons in the UI.
- Added Babel lib to improve verbosity of imports.

 
## To Run the project you must run:

```
npm install
```

## after the installation finished, you can run:

```
npm start
```

#### The project will open in your browser with the following url http://localhost:3000;

## To run the tests yo must run

```
npm run test
```
