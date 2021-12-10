# Angular Folder Structure

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Requirement

Build an angular application that allows you to create and render a folder structure.

The ui should be backed by a JSON representation of the folder structure.

The structure consists of which are either files or folders.

Requirements

- The user should be able to add a root folder to the tree via the ìadd folder to rootî button.

- The user should be able to name the newly created node. Once named, it does not need to be renamable.

- The only validation required on the naming of a node is that the name can't be left blank.

If it is, the file/folder should be deleted.

A newly added node can be cancelled by pressing the cancel button during naming.

- The user should be able to add a node as a child to a folder by clicking a button that becomes visible on a folder upon hover.

The user should not be able to add a child node to a file.

Upon adding a child node to a folder, the user should be presented with two buttons to decide if the newly added child node is a file or a folder.

- The user should be able to delete a node via a delete button that becomes visible on a file or folder upon hover.

- A JSON object representing the folder structure should be visible in a read-only text area at the bottom of the page.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
