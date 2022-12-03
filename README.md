# Welkom

This is my first project ever!

## Index

* Introduction
* Languages
* Tools & Dependencies
* API's & keys
* The Web Application
* How to get started
* How to log in

### Introduction

The Flexi WebApplication is designed to get easy acces to a big amount of recipes.
It's possible to filter it down to vegetarian recipes so you'll never be out of healthy ideas.
When you've found a dish you like, you can link to the recipe-page and there are the ingredients 
and instructions available for you.
But first you have sign-up for FREE!!!

### Languages

* HTML
* CSS
* Javascript
* React

### Tools & Dependencies

#### Tools
* Webstorm
* Figma

#### Dependencies
* react-router-dom
* framer-motion
* react-icons
* styled-components
* jwt-decode

### API's & keys

#### API
Spoonacular 

[https://spoonacular.com/food-api](https://spoonacular.com/food-api)

Novi backend 

[https://github.com/hogeschoolnovi/novi-educational-backend-documentation/blob/main/README.md#0-test](https://github.com/hogeschoolnovi/novi-educational-backend-documentation/blob/main/README.md#0-test)

#### keys
Copy these keys to .env:
REACT_APP_API_KEY1=31cd2d3fe3fb404dbb1113df8af265fc
REACT_APP_API_KEY2=60baf28a5fae40c1b3855f935798447b
REACT_APP_API_KEY3=610f34add1194424abfd818942853193

### The Web application

Home-page

![](images/Schermopname%20(21).png)

Search-page

![](images/Schermopname%20(22).png)

Recipe-page

![](images/Schermopname%20(24).png)

## How to get started

### 1 Open your Integrated Development Environment

And open the terminal in your IDE

### 2 `node -v`

Type this in your terminal to check if node-js is installed

If NOT?
Install here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### 3 Clone the project from gitHub

### 4 `npm install`

Type this in your terminal after you've cloned the project.
All the necessary dependencies will be installed

### 5 `npm run start`

Type this in your terminal and the app wil run in the development mode. 
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## How to log in

The NOVI backend supports the sign-up and log-in functionality.
It will delete every account by the hour.

### 1 Signing up!

* First you can sign-up on the home-page or by clicking on `Sign-up!` in the top right of the Menu-bar
* You have fill in emailadress "@" must be included!
* The username and password input-field needs at least 6 characters
* Finally click on the `Sign-up!` -button
* thereafter it will automatically navigate you to the log-in-page

![](images/Schermopname%20(29).png)

### 2 Logging in!

* Fill in your username and password
* Click on the `Log-in` -button
* You'll will be automatically navigated to the search-page, now it's possible for you to look up some recipes and get 
the ingredients and instructions

![](images/Schermopname%20(25).png)