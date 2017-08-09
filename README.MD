# TimeRocketWebSearchSDK

### What is this repository for?

This is boilerplate for a TimeRocketWebSearchSDK.

### Folder Structure
```
|-- .TimeRocketWebSearchSDK
    |-- src
        |-- sdk
        |-- tests
    karma.conf.js
    package.json
    tsconfig.json
    README.MD
```

### Dependencies
* [jasmine](https://www.npmjs.com/package/jasmine) - Test Framework
* [karma](https://www.npmjs.com/package/karma) - Test execution Framework
* [karma-jasmine](https://www.npmjs.com/package/karma-jasmine) - Karma's dependency for integration with Jasmine
* [karma-phantomjs-launcher](https://www.npmjs.com/package/karma-phantomjs-launcher) - Console Browser. Used for test execution. 
* [karma-typescript](https://www.npmjs.com/package/karma-typescript) - TypeScript Support for Karma/Jasmine
* [typescript](https://www.npmjs.com/package/typescript) - TypeScript language
* [@types/jasmine](https://www.npmjs.com/package/@types/jasmine) - TypeScript typings/syntax for Jasmine


### How to install
* Download or clone this repo.
* Run `npm install`

Note: sometimes in WebStorm IDE typings for jasmine aren't indexed for some reason for the first time. You may need to restart your IDE to see the effect.

### How to use
* `npm test` or `karma start` - will run tests that are in the `tests` folder. It will also enable file watcher, so after each saved change you make tests will rerun automatically.
* `karma start --single-run` - will run tests once.
* For IDEA-based IDE's (like WebStorm) right click on the `karma.conf.js` file and in the context menu select `Run karma.conf.js`.