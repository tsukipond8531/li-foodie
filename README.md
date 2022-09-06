![Screenshot (203)](https://user-images.githubusercontent.com/99950805/188583085-4138cf64-eb9d-4c90-9ac8-9db504d2ca0f.png)
# LiFoodie

## LiFoodie is an online restaurant website and a pwa (progressive web app) installable in any device with browser.

A family restaurant and cafe that offers online order services, is one of the most interesting projects I am planning to implement. The goal of this project is to make this restaurant landing page look almost like an actual working business. It should have all the interactivity usual e-commerce websites have.


Live Version: [LiFoodie](https://lifoodie-dev.web.app/)


## Contents
- [Getting Started with Create React App](#gettingStarted)
- [Goals](#goals)
- [Plan](#plan)
- [User End](#user)
- [Used Dependencies](#dependencies)

- [Designing and Styling](#design)
- [Deployment Servers](#server)
## Getting Started with Create React App <a id="gettingStarted"></a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To get started you need to:

1. Clone the project
2. npm install
3. Install listed dependencies
4. Use available scripts, like npm start

## Goals <a id="goals"></a>

The goal of this project is to learn React and become a bit closer to real life projects. Most of the projects I worked with are only small pieces that are not much useful on it's own. By doing this project I will have to think not only as a developer but as a business and a customer.

## Plan <a id="plan"></a>

When working on a big project it definitely gets harder to have all the ideas and plans in your head. When working on a big project, it definitely gets harder to have all the ideas and plans in your head. My first choice was storing all necessary product information locally and finish the project as front-end only, but that's not enough to satisfy a big project so I learned a little bit of **`node`, `express Js`** and about crating own rest API.

**Note: At this time I don't know much about apis so i will not share this api.**

User authentication, login, registration, password recovery system was performed using **`Firebase Authentication`** and user order information and reviews are stored in **`Firebase Firestore`**.

## User End <a id="user"></a>

As a user,  I can add items in my cart even if I an not logged in or registered. When browsing to the restaurant page, I want to see menu items that have pictures, name, pricing and a discount option. In cart page I can add new items in cart, totally clear the cart, increase/decrease the quantity of any product or remove that product. Also, I can see the total amount I have to pay while checkout. More specifically, I found the sort summarize list of all items, my contact number, shipping address and tip menu before making payments. The system ensure that I must log in. After payment system let me write a review, but it is not mandatory. 
Also, while logged in I found my previous activities like my previous order and reviews. I can change my personal details (name, contact number, email, shipping address) anytime.


## Used Dependencies <a id='dependencies'></a>
<a href='https://www.npmjs.com/package/react-toastify' target='_blank'>React-Toastify</a> <br/>
<a href='https://www.npmjs.com/package/react-typing-effect' target='_blank'>react-typing-effect</a> <br/>
<a href='https://www.npmjs.com/package/react-parallax' target='_blank'>react-parallax</a> <br/>
<a href='https://www.npmjs.com/package/react-parallax-tilt' target='_blank'>react-parallax-tilt</a><br/>
<a href='https://www.npmjs.com/package/axios' target='_blank'>axios</a><br/>
<a href='https://www.npmjs.com/package/react-router' target='_blank'>react-router</a>

## Designing And Styling  <a id='design'></a>
<a href='https://tailwindcss.com/' target='_blank'>tailwindcss</a> <br/>
<a href='https://mui.com/' target='_blank'>mui</a> <br/>
<a href='https://swiperjs.com'>Swiper</a><br/>
<a href='https://pixabay.com/'>pixabay</a>

## Deployment Servers<a id='server'></a>
### Project Server : <a href='https://firebase.google.com/' target='_blank'>firebase</a> <br/>
### Api Server : <a href='https://www.heroku.com/platform' target='_blank'>heroku</a>