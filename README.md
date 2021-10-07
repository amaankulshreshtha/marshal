[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Monorepo template

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the application](#running-the-application)
- [Commiting the code](#commiting-the-code)
- [Creating new and independent packages](#creating-new-and-independent-packages)
- [Most common errors](#most-common-errors)
- [Solutions](#solutions)
- [Tips](#tips)
- [References](#references)

## Prerequisites

- Follow the instructions from the [React Native Dev Env Setup](https://reactnative.dev/docs/0.64/environment-setup#installing-dependencies)
- You need to install commitizen globally for when you commit the code.

```bash
yarn global add git-cz
```

Or

```bash
npm i -g git-cz
```

## Getting Started

Run the following command to install all the dependencies in the right location

```bash
yarn
yarn core:build:w
```

This will build the files in the `core` directory and it will be ready to use. All changes to the files in the `core` directory will be "watched" and those changes will be reflected wherever these files are being consumed.

## Running the application

**For web**

```bash
yarn web:dev
```

**For iOS**

```bash
# to run the metro server
yarn metro # after this, we build the application
yarn pod-install
yarn ios
```

**For Android**

```bash
# to run the metro server
yarn metro # after this, we build the application
yarn android
```

## Building the application

**For Android**

```bash
cd packages/mobile/android
./gradlew assembleRelease
```

The generated APK will be at `packages/mobile/android/app/build/outputs/apk/release/app-release.apk`

_Generating signature hash for android_

```bash
# DEV
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64
# PROD
keytool -exportcert -alias SIGNATURE_ALIAS -keystore PATH_TO_KEYSTORE | openssl sha1 -binary | openssl base64
```

**For iOS**

```bash
cd packages/mobile
npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios
xcodebuild clean archive -workspace $(pwd)/mobile.xcworkspace -scheme mobile -archivePath $(pwd)/build/mobile.xarchive | xcpretty
```

## Commiting the code

This repository follows commit guidelines provided by commitizen. To verify the installation of commitizen, you can run `git cz`.

After staging the files that you have changed, instead of using `git commit`, use `git cz`. This will give you an interactive shell with the help of which you can draft your commit message.

## Creating new and independent packages

In order to create a new and independent package(**NOT** inside `packages` directory) which is managed inside the monorepo, do the following:

- Add the name of the independent folder inside the `workspaces` field at the root level `package.json` and in the `packages` field in `lerna.json`.
- To create module inside the new independent package, run the following command:

```bash
yarn lerna create <name-of-module> [name-of-independent-package]
```

Note: The independent packages in this folder are:

- `packages`
- `linters`

Check `package.json` and `lerna.json` for reference to the above.

## Most common errors

- Version mistmatches in `package.json` in all the packages. All the dependencies should have the same verison
- Wrong node modules path in the mobile app native ios and android configs.
- While building ios, `react-native` directory won't be found in `mobile/node_modules`
- Android builds might fail because of gradle versions
- `tried to synchronously call function from a different thread`
- `config["reactNativePath"] not working`
- Emulator process not killed (Windows)
- Application Building Issues for android

## Solutions

- Make all versions the same and use lerna to manage the installation of `node_modules`
- Rectify all `node_module` paths inside the native ios and android configs
- Make sure that all the paths for react native in the Podfile have been changed and then run `npx pod-install`
- Do the following in case of failed builds:
  - Go to `android/gradle/wrapper/gradle-wrapper.properties`, and change the value of `distributionUrl` to `https\://services.gradle.org/distributions/gradle-6.7.1-bin.zip` like this `distributionUrl=https\://services.gradle.org/distributions/gradle-6.7.1-bin.zip`
  - Download JDK 11 and set your `$JAVA_HOME` variable to JDK 11
- Refer to [yarn-workspaces-reanimated](https://github.com/nikolaigeorgie/yarn-workspaces-reanimated) repository for the setup
- Follow [this](https://github.com/facebook/react-native/issues/29371#issuecomment-658523434) solution
- `taskkill /F /IM "qemu-system-x86_64.exe" /T`
- Fix `node_modules` paths in `project.ext.rect` inside `app/build.gradle`

## Tips

- To get a list of emulators; run this command: `emulator -list-avds`
- To increase performance of emulator; run this command:

```bash
emulator -gpu host -feature HVF -avd <name-of-avd-from-list>
```

- If you want to change the JDK version in android studio: [answer for this](https://stackoverflow.com/a/67414820/7879090)

## References

- [Edits to be made in cofig files](https://medium.com/@ratebseirawan/react-native-0-63-monorepo-walkthrough-36ea27d95e26)
- [Commit message style](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type)
- [Fix for reanimated error: tried to synchronously call...](https://github.com/software-mansion/react-native-reanimated/issues/1720#issuecomment-789287795)
- [Project Ext React](https://github.com/facebook/react-native/blob/4305a291a9408ca65847994bbec42f1fbc97071d/RNTester/android/app/build.gradle)
- [Anroid Project Signing](https://developer.android.com/studio/publish/app-signing)
