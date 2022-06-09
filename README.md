# NFT Collection Landing Page

## Demo

![Alt Text](https://media.giphy.com/media/i5edhk3E3ZnxOUpmiv/giphy.gif)

## Dependency setup

In the project directory, you can run:

### `npm install`

This will install the required dependencies

## Contract Deployment/Usage

Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software.It is inherent to the process of building smart contracts and dApps. All the required documentationo is located [here](https://hardhat.org/getting-started)

This project comes with a sample ERC721A pre-reveal smart contract. To deploy that contract, remember to change the contract name inside the "contracts" folder and Name/Symbol inside "StitchiesCollection.sol". The constructor arguments must also include the baseUri and hiddenuri for your test project in the "deploy.js" script:

![Alt Text](https://i.imgur.com/0IVuJ6n.png)

Check the "constants.js" file located in src/utils/constants.js. contractAddress and contractABI are there and the .json format for the contract abi must follow that format. Due to this it is recommended to deploy using Hardhat if you plan to implement this sample project

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Hardhat Scripts

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat node
npx hardhat run --network networkName scripts/deploy.js
npx hardhat help
npx hardhat test
npx hardhat verify --network networkName contractAddress "Constructor argument 1" . . .
```
