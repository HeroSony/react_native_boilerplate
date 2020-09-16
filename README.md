## React Native Boilerplate

### Create new project (0.63)

Run follow command to init new project
```
npx react-native init MyApp --template react-native-template-typescript
```
Copy `src` folder to your root project, and from `index.js` import `src/App.tsx` as AppRegistry

### Packages
```
@react-native-community/async-storage
react-native-device-info
react-native-safe-area-context

// Splash Screen
react-native-bootsplash

// Redux
redux
redux-logger
redux-persist
redux-saga
@types/react-redux
@types/redux-logger

// UI Kitten
@ui-kitten/components
@eva-design/eva
react-native-svg
@ui-kitten/eva-icons

// Navigation
@react-navigation/native
react-native-reanimated
react-native-gesture-handler
react-native-screens
react-native-safe-area-context
@react-native-community/masked-view
@react-navigation/stack
@react-navigation/bottom-tabs
@react-navigation/drawer
```
Add above packages to `package.json` and run `yarn install`
