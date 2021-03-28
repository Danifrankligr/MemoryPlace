
## Dani´s Memory Place

A simple funny game to keep your memory trained. It takes just a few minutes to complete.
___
___

### Features:
-	react-redux: for global state management.
-	react-icons: for icons insert and handle.
-	react-toastify: for notifications management.
-	react-confetti: for completation state.
-	react-use: for browser screen size recognition.
___

## Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`
For dependencies installation

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Game Instructions:
Initially, all icons are hidden and you have to click any of the squares to reveal its own.
Per play, you must reveal two icons and then see which one of the following three scenarios happens:
1. The two icons revealed are the same: 
	- increases Right Counter and icons stay revealed.
2. The two icons revealed are diferent and both had been revealed previously: 
	- increases Wrong Counter and both icons go hidden again.
3. The two icons revealed are diferent and at least one of them had not been revealed previously: 
	- both icons go hidden with no counter modification
