# Monorepo template

## Get Started

Then run the following command to install all the dependencies in the right location
`npx lerna bootstrap`

Go to the `core` directory and run
`yarn build`
This will build the files in the `core` directory and it will be ready to use


## Running the application
There are 2 ways to run the application on your desired platform

- Option 1(recommended): Using the feature of yarn workspaces, you can choose to run the workspace commands together or choose a particular workspace and run it's commands

For web
```bash
yarn workspace @project/web start
```

For mobile
```bash
# to run the metro server
yarn workspace @project/mobile start # after this, we build the application
yarn workspace @project/mobile ios
# OR
yarn workspace @project/mobile android
```

In event you want to run both the web and mobile servers together, you just need to run
```bash
yarn start
```
and this shall run `yarn start` in both the workspaces.

- Option 2: Open the desired platform's directory and run the following command

  - **For Web**:

  ```bash
  cd packages/web
  yarn start
  ```

  - **For Mobile**:

  ```bash
  cd packages/mobile
  # to run the metro server
  yarn start # after this, we build the application
  yarn ios
  # OR
  yarn android
  ```

## Creating new and independent packages

In order to create a new and independent package(**NOT** inside `packages` directory) which is managed inside the monorepo, do the following:
- Add the name of the independent folder inside the `workspaces` field at the root level `package.json` and in the `packages` field in `lerna.json`.
- To create module inside the new independent package, run the following command:
```bash
npx lerna create <name-of-module> [name-of-independent-package]
```


Note: The independent packages in this folder are: 
- `packages`
- `linters`

Check `package.json` and `lerna.json` for reference to the above.
## Most common errors

- version mistmatches in package.json in all the packages. All the dependencies should have the same verison
- Wrong node modules path in the mobile app native ios and android configs.
- while building ios, react-native directory won't be found in mobile/node_modules
- android builds might fail because of gradle versions

## Solutions
- make all versions the same and use lerna to manage the installation of node_modules
- rectify all node_module paths inside the native ios and android configs
- make sure that all the paths for react native in the Podfile have been changed and then run `npx pod-install`
- Do the following in case of failed builds:
  - Go to `android/gradle/wrapper/gradle-wrapper.properties`, and change the value of `distributionUrl` to `https\://services.gradle.org/distributions/gradle-6.7.1-bin.zip` like  this `distributionUrl=https\://services.gradle.org/distributions/gradle-6.7.1-bin.zip`
  - Download JDK 11 and set your `$JAVA_HOME` variable to JDK 11

## Tips
- To get a list of emulators; run this command: `emulator -list-avds`
- To increase performance of emulator; run this command:  `emulator -gpu host -feature HVF -avd <name-of-avd-from-list>`
- If you want to change the JDK version in android studio: [answer for this](https://stackoverflow.com/a/67414820/7879090)

## References
- [Edits to be made in cofig files](https://medium.com/@ratebseirawan/react-native-0-63-monorepo-walkthrough-36ea27d95e26)
