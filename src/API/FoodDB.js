/*  list item type
    menuName(breakfast & snacks) => type[lite]
    menuName(starter) => type[starter]
    menuName(soup) => type[soup]
    menuName(pizza) => type[pizza]
    menuName(lunch & dinner) => type[starter+soup+pizza+meal]
    menuName(dessert) => type[dessert]
    menuName(drink) => type[drink]
    menuName(pure-veg) => category(veg)
*/

import axios from "axios"

// it is very sad, have to shut down the express server due to lack of credits and hardcoded it. :smiling_face_with_tear :smiling_face_with_tear:
const DB = [
    {
        id:"2",offer:"0",rate:"150",imgName:"3-choco.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/3-choco.jpg?alt=media&token=e8ece963-b810-4f1a-b8f1-446746aa8b34",category:"non-veg",type:"dessert",name:"3-choco",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"1",offer:"0",rate:"150",imgName:"3-in-1.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/3-in-1.jpg?alt=media&token=0d74e1bc-5d15-4595-a13c-997343848b93",category:"veg",type:"dessert",name:"3 in 1 ice cream",
        des:"Product description ...",
        tag1:"strawberry",tag2:"vanilla",stock:"10"},
    {
        id:"95",offer:"0",rate:"170",imgName:"tanduri-chole.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/tanduri-chole.jpg?alt=media&token=5e0c1e10-46b7-453d-a87d-50f65fc22c03",category:"non-veg",type:"meal",name:"amritsari chole",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"3",offer:"0",rate:"180",imgName:"azmiri-fish.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/azmiri-fish.jpg?alt=media&token=aa37e5b7-bf31-464f-938a-1539afa6703d",category:"non-veg",type:"meal",name:"azmiri fish",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"12",offer:"0",rate:"40",imgName:"bananas.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/bananas.jpg?alt=media&token=910333dc-9c62-42d6-b8a8-9cd8c9188c10",category:"veg",type:"lite",name:"Banana",
        des:"Product description ...",
        tag1:"chocolate",tag2:"sugar",stock:"10"},
    {
        id:"13",offer:"0",rate:"200",imgName:"beef-stake.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/beef-stake.jpg?alt=media&token=2902d696-2fff-4b99-8260-4d9aa67dcf9d",category:"non-veg",type:"starter",name:"beef stake",
        des:"Product description ...",
        tag1:"stake",tag2:"juicy",stock:"10"},
    {
        id:"4",offer:"10",rate:"200",imgName:"berries-kiwie.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/berries-kiwie.jpg?alt=media&token=6168063c-fae3-4465-964c-90aea44939e0",category:"veg",type:"dessert",name:"berries kiwie",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"5",offer:"0",rate:"120",imgName:"beyti-kabab.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/beyti-kabab.jpg?alt=media&token=72e17599-4984-423d-8442-96c76f6dcfd5",category:"non-veg",type:"meal",name:"beyti kabab",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"11",offer:"0",rate:"120",imgName:"bread-soup.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/bread-soup.jpg?alt=media&token=715bc28a-95be-4c32-9862-c81bb9fc2897",category:"non-veg",type:"soup",name:"Bread soup",
        des:"Product description ...",
        tag1:"Stew",tag2:"paper",stock:"10"},
    {
        id:"6",offer:"0",rate:"100",imgName:"burger.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/burger.jpg?alt=media&token=3a54260b-37f2-4925-87bd-bc664c1dbc03",category:"non-veg",type:"lite",name:"burger",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"7",offer:"0",rate:"180",imgName:"burrah-kabab.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/burrah-kabab.jpg?alt=media&token=a0c79109-0cb1-49b4-812d-86aa0d719725",category:"non-veg",type:"starter",name:"burrah kabab",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"8",offer:"0",rate:"165",imgName:"butter-chicken.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/butter-chicken.jpg?alt=media&token=2b50620f-4b7f-40f0-9256-182bcd9ca99a",category:"non-veg",type:"meal",name:"butter chicken",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"9",offer:"0",rate:"220",imgName:"butter-panner.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/butter-panner.jpg?alt=media&token=d3372cb2-2d04-46da-8491-339a326bccf3",category:"veg",type:"meal",name:"butter panner",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"10",offer:"0",rate:"30",imgName:"butter-roti.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/butter-roti.jpg?alt=media&token=ff82c218-881e-4dd0-8430-a96d45872042",category:"veg",type:"meal",name:"butter roti",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"20",offer:"0",rate:"150",imgName:"cappuccino.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/cappuccino.jpg?alt=media&token=d95b46cc-3f55-40d9-acaf-14f76db11905",category:"veg",type:"drink",name:"cappuccino",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"14",offer:"10",rate:"1600",imgName:"champagne.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/champagne.jpg?alt=media&token=a82c2f6b-16b3-4de6-9c0f-e14c13b4e0a2",category:"veg",type:"drink",name:"champagne",
        des:"Product description ...",
        tag1:"smooth",tag2:"royal",stock:"10"},
    {
        id:"21",offer:"0",rate:"220",imgName:"chicken-biriyani.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/chicken-biriyani.jpg?alt=media&token=37008856-172f-42c4-a5b1-caf66558a91a",category:"non-veg",type:"meal",name:"chicken biriyani",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"22",offer:"0",rate:"250",imgName:"chicken-breast.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/chicken-breast.jpg?alt=media&token=80fbedfe-97c6-4c40-8399-32e7e1220748",category:"non-veg",type:"starter",name:"chicken star",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"24",offer:"0",rate:"150",imgName:"chicken-stew.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/chicken-stew.jpg?alt=media&token=90c15538-6811-433d-b705-c6845a11e3de",category:"non-veg",type:"soup",name:"chicken stew",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"25",offer:"0",rate:"250",imgName:"chicken-wings.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/chicken-wings.jpg?alt=media&token=bc00e34e-9eee-432d-91b4-d742cb6c5916",category:"non-veg",type:"starter",name:"chicken wings",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"26",offer:"0",rate:"800",imgName:"choco-holifield.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/choco-holifield.jpg?alt=media&token=322606a4-369a-422c-95c1-7ae2b61996b3",category:"non-veg",type:"dessert",name:"choco holifield",
        des:"Product description ...",
        tag1:"signature👌",tag2:"premium",stock:"10"},
    {
        id:"27",offer:"0",rate:"200",imgName:"chocolate-moose.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/chocolate-moose.jpg?alt=media&token=300e9742-3fbf-4792-8008-c4bddec2728e",category:"non-veg",type:"dessert",name:"chocolate moose",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"15",offer:"0",rate:"80",imgName:"coca-burst.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/coca-burst.jpg?alt=media&token=fabf1f39-2374-4a6c-a769-189ffc7bcbf6",category:"",type:"dessert",name:"coca burst",
        des:"Product description ...",
        tag1:"creamy",tag2:"moose",stock:"10"},
    {
        id:"29",offer:"0",rate:"200",imgName:"coco-star.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/coco-star.jpg?alt=media&token=840ceb4c-126c-4ff2-b8ff-014b238ec2ff",category:"non-veg",type:"dessert",name:"coco nest",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"28",offer:"0",rate:"180",imgName:"coco-rose.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/coco-rose.jpg?alt=media&token=11abe8f0-6adb-4dc9-b8e5-a131349cc11a",category:"non-veg",type:"dessert",name:"coco rose",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"16",offer:"0",rate:"50",imgName:"coffee.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/coffee.jpg?alt=media&token=8a2707f0-7ced-4073-971b-4f4610d07826",category:"",type:"drink",name:"coffee",
        des:"Product description ...",
        tag1:"hot",tag2:"southIndian",stock:"10"},
    {
        id:"18",offer:"0",rate:"75",imgName:"cornflakes.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/cornflakes.jpg?alt=media&token=45835d36-dfb3-4c2e-91aa-9536c35e73f9",category:"",type:"lite",name:"cornflakes",
        des:"Product description ...",
        tag1:"breakfast",tag2:"milk",stock:"10"},
    {
        id:"17",offer:"10",rate:"550",imgName:"italian-cuisine-pizza.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/italian-cuisine-pizza.jpg?alt=media&token=0c662184-8650-4008-a309-1179504673a2",category:"",type:"pizza",name:"cuisine pizza",
        des:"Product description ...",
        tag1:"signature👌",tag2:"thai",stock:"10"},
    {
        id:"19",offer:"0",rate:"80",imgName:"cupcake.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/cupcake.jpg?alt=media&token=eab3b662-1c57-4393-b2ee-90875754780d",category:"",type:"dessert",name:"cupcake",
        des:"Product description ...",
        tag1:"cream",tag2:"kids",stock:"10"},
    {
        id:"30",offer:"0",rate:"100",imgName:"dal-chawal.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/dal-chawal.jpg?alt=media&token=5bec8796-20f9-432e-a34d-200b50e1e606",category:"veg",type:"meal",name:"dal chawal",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"33",offer:"0",rate:"225",imgName:"de-latte.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/de-latte.jpg?alt=media&token=73f72789-3c61-4617-9f98-338043f26a7f",category:"non-veg",type:"dessert",name:"de latte",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"31",offer:"0",rate:"150",imgName:"dhosa.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/dhosa.jpg?alt=media&token=34174a5d-64c4-4976-a005-810c73b1acca",category:"veg",type:"meal",name:"dhosa",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"23",offer:"0",rate:"250",imgName:"chicken-drum-stick.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/chicken-drum-stick.jpg?alt=media&token=10bc7a54-3201-460d-b487-82f01d566f81",category:"non-veg",type:"starter",name:"drum stick",
        des:"Product description ...",
        tag1:"crunch",tag2:"American",stock:"10"},
    {
        id:"32",offer:"20",rate:"200",imgName:"dry-fruit-cake.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/dry-fruit-cake.jpg?alt=media&token=54ec730c-f733-44a3-abbf-ba35a6b69ec4",category:"non-veg",type:"dessert",name:"dry fruit cake",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"34",offer:"0",rate:"115",imgName:"ella-oslon.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/ella-oslon.jpg?alt=media&token=19ad6bdf-a419-46b7-91f3-05caa751ee8f",category:"veg",type:"dessert",name:"ella oslon",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"35",offer:"0",rate:"175",imgName:"fish-curry.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/fish-curry.jpg?alt=media&token=42ce5369-34eb-484a-8120-23209693c3ea",category:"non-veg",type:"meal",name:"fish curry",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"36",offer:"0",rate:"120",imgName:"fish-finger.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/fish-finger.jpg?alt=media&token=a0045007-5a4c-49bb-8e31-5a79298d1068",category:"non-veg",type:"starter",name:"fish nuggets",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"38",offer:"0",rate:"70",imgName:"french-fries.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/french-fries.jpg?alt=media&token=2102550e-193f-4094-9f68-6c1cf2ca6d9a",category:"",type:"lite",name:"french fries",
        des:"Product description ...",
        tag1:"kfc",tag2:"ketchup",stock:"10"},
    {
        id:"37",offer:"0",rate:"165",imgName:"fried-momo.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/fried-momo.jpg?alt=media&token=50e3ea0d-2913-40ed-a00a-2a77b9662662",category:"non-veg",type:"starter",name:"fried momo",
        des:"Product description ...",
        tag1:"chicken",tag2:"tag2",stock:"10"},
    {
        id:"39",offer:"0",rate:"60",imgName:"gulab-jamun.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/gulab-jamun.jpg?alt=media&token=cea51051-15a9-4bd6-b065-3560e85150fd",category:"veg",type:"dessert",name:"gulabjamun",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"43",offer:"0",rate:"80",imgName:"half-boiled-tost.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/half-boiled-tost.jpg?alt=media&token=40a22d2f-013b-4fac-bcf7-cfc21b27b017",category:"non-veg",type:"lite",name:"half boil",
        des:"Product description ...",
        tag1:"bread",tag2:"butter",stock:"10"},
    {
        id:"45",offer:"0",rate:"200",imgName:"pumpkin-soup.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/pumpkin-soup.jpg?alt=media&token=de2549e7-fb80-4b63-94d4-ea004d9ab360",category:"non-veg",type:"soup",name:"halo rice",
        des:"Product description ...",
        tag1:"lite",tag2:"hot",stock:"10"},
    {
        id:"41",offer:"10",rate:"250",imgName:"chicken-hari.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/chicken-hari.jpg?alt=media&token=d4ad11c0-badf-47fa-90aa-8e790b8e9338",category:"non-veg",type:"starter",name:"hariali korma",
        des:"Product description ...",
        tag1:"chicken",tag2:"desi",stock:"10"},
    {
        id:"40",offer:"0",rate:"100",imgName:"honey-lemon.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/honey-lemon.jpg?alt=media&token=91a653ae-d8de-4b69-8ccd-963626c466dd",category:"veg",type:"drink",name:"honey lemon",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"44",offer:"0",rate:"160",imgName:"hot-garlic-soup.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/hot-garlic-soup.jpg?alt=media&token=f13b3e8b-aff6-414f-9d8a-bf46ac8afed6",category:"non-veg",type:"soup",name:"hot garlic",
        des:"Product description ...",
        tag1:"paper",tag2:"hot_sause",stock:"10"},
    {
        id:"42",offer:"0",rate:"250",imgName:"chicken-leg.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/chicken-leg.jpg?alt=media&token=ed59f5b1-377c-45e4-b18b-ce3ebb95b8ef",category:"non-veg",type:"starter",name:"hot wings",
        des:"Product description ...",
        tag1:"chicken",tag2:"fried",stock:"10"},
    {
        id:"46",offer:"0",rate:"850",imgName:"indian-thali.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/indian-thali.jpg?alt=media&token=5917cd23-d04a-4260-8876-dafbe9771ce5",category:"non-veg",type:"meal",name:"indian thali",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"47",offer:"0",rate:"140",imgName:"isabella.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/isabella.jpg?alt=media&token=9fd4b215-f30f-41e2-8df1-0e0e1af7995f",category:"veg",type:"drink",name:"isabella",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"48",offer:"0",rate:"80",imgName:"jalebi.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/jalebi.jpg?alt=media&token=c193ac41-db35-4d8c-8994-3817364ef825",category:"veg",type:"dessert",name:"jalebi",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"51",offer:"0",rate:"300",imgName:"karwari-prawn.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/karwari-prawn.jpg?alt=media&token=32337f9c-5740-4919-b332-cbb375c633c7",category:"non-veg",type:"meal",name:"karwari prawn",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"49",offer:"0",rate:"120",imgName:"kashmiri-kewa.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/kashmiri-kewa.jpg?alt=media&token=9a8ad065-b6c2-48e0-ba31-7bf1ff2ff464",category:"veg",type:"drink",name:"kashmiri kewa",
        des:"Product description ...",
        tag1:"signature👌",tag2:"haven",stock:"10"},
    {
        id:"99",offer:"15",rate:"200",imgName:"veg-polao.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/veg-polao.jpg?alt=media&token=fa3ce185-ff0a-4846-ae11-b4e7e41cfd09",category:"veg",type:"meal",name:"kashmiri polao",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"50",offer:"0",rate:"250",imgName:"kashmiri-tuch.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/kashmiri-tuch.jpg?alt=media&token=9368536f-4204-4403-94e1-8b896b468e0b",category:"non-veg",type:"starter",name:"kashmiri tucch",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"52",offer:"0",rate:"100",imgName:"choco-lava.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/choco-lava.jpg?alt=media&token=8a666cc4-f494-4b5e-b109-8ff59aa16b23",category:"",type:"dessert",name:"lava stock",
        des:"Product description ...",
        tag1:"chocolate",tag2:"ice cream",stock:"10"},
    {
        id:"53",offer:"0",rate:"40",imgName:"laddu.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/laddu.jpg?alt=media&token=8f29cf7a-9aa5-4652-9411-46c2797502ef",category:"veg",type:"dessert",name:"laddu",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"54",offer:"15",rate:"300",imgName:"lamb-stake.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/lamb-stake.jpg?alt=media&token=d6384d7d-5ebf-44f6-9c48-a950c2865291",category:"non-veg",type:"starter",name:"lamb stake",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"55",offer:"20",rate:"300",imgName:"lisa-fotios.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/lisa-fotios.jpg?alt=media&token=44f42d48-d2a2-47f0-a3fe-4d29ab9afe92",category:"veg",type:"drink",name:"lisa fotios",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"105",offer:"0",rate:"65",imgName:"maggi.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/maggi.jpg?alt=media&token=e087a00e-8143-47ed-a784-921a2e26a514",category:"",type:"lite",name:"maggi",
        des:"Product description ...",
        tag1:"lite",tag2:"veg",stock:"10"},
    {
        id:"57",offer:"0",rate:"115",imgName:"manchurian.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/manchurian.jpg?alt=media&token=f45f5fba-57f4-419a-b43f-c77f26274ec7",category:"non-veg",type:"meal",name:"manchurian",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"62",offer:"15",rate:"500",imgName:"margareta-pizza.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/margareta-pizza.jpg?alt=media&token=c079a2e6-06db-4caf-a19a-b5fdf0859d74",category:"",type:"pizza",name:"margherita pizza",
        des:"Product description ...",
        tag1:"Italy",tag2:"cheese",stock:"10"},
    {
        id:"58",offer:"0",rate:"175",imgName:"max-griss.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/max-griss.jpg?alt=media&token=35891e1f-56fc-4dab-ba85-ed795bb1fe59",category:"veg",type:"dessert",name:"max griss",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"63",offer:"0",rate:"100",imgName:"mix-veg-soup.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/mix-veg-soup.jpg?alt=media&token=4e79b6c5-548e-47e5-ba4e-28e24567b166",category:"",type:"soup",name:"mix veg",
        des:"Product description ...",
        tag1:"carrot",tag2:"beans",stock:"10"},
    {
        id:"59",offer:"0",rate:"400",imgName:"mughlai-mutton.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/mughlai-mutton.jpg?alt=media&token=76d15777-14bb-4c4b-bbc6-01820964114e",category:"non-veg",type:"meal",name:"mughlai mutton",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"60",offer:"0",rate:"180",imgName:"murg-de-roti.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/murg-de-roti.jpg?alt=media&token=81f94a64-0c57-4c74-b16a-7823dffa9b2c",category:"non-veg",type:"meal",name:"murg de tandur",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"61",offer:"10",rate:"400",imgName:"mutton-biriyani.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/mutton-biriyani.jpg?alt=media&token=56509098-0685-4b34-a511-f96624a51f62",category:"non-veg",type:"meal",name:"mutton biriyani",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"64",offer:"0",rate:"200",imgName:"north-pool.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/north-pool.jpg?alt=media&token=37801bfc-5719-441b-83c6-1e335345d5c0",category:"veg",type:"drink",name:"north pool",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"65",offer:"0",rate:"145",imgName:"oleg-magni.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/oleg-magni.jpg?alt=media&token=86bdd914-078f-4e02-a992-34a4dcd07644",category:"veg",type:"drink",name:"oleg magni",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"67",offer:"0",rate:"150",imgName:"orange-smothee.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/orange-smothee.jpg?alt=media&token=4ac0c052-bc45-4ba4-a394-2c770fae0019",category:"veg",type:"lite",name:"orange moose",
        des:"Product description ...",
        tag1:"season",tag2:"sweet",stock:"10"},
    {
        id:"66",offer:"0",rate:"200",imgName:"oreo-shake.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/oreo-shake.jpg?alt=media&token=8c44f286-8d2e-4296-9340-375cd50755df",category:"veg",type:"drink",name:"oreo ritaE",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"68",offer:"0",rate:"190",imgName:"paneer-masala.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/paneer-masala.jpg?alt=media&token=58b588f2-60f0-4e45-88fe-44ef209ab246",category:"veg",type:"meal",name:"paneer mashala",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"69",offer:"0",rate:"130",imgName:"paneer-tikka.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/paneer-tikka.jpg?alt=media&token=a778cabf-3373-4032-a9af-0c09b1daf790",category:"veg",type:"starter",name:"paneer tikka",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"72",offer:"0",rate:"170",imgName:"papicana-soup.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/papicana-soup.jpg?alt=media&token=ffe8c53c-aa79-4fcc-a7e2-1a368522ba0d",category:"veg",type:"soup",name:"papicana",
        des:"Product description ...",
        tag1:"paper",tag2:"chili",stock:"10"},
    {
        id:"70",offer:"0",rate:"200",imgName:"pasta.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/pasta.jpg?alt=media&token=7cee35bc-a3c8-485a-8e80-85864ffb2ac7",category:"non-veg",type:"meal",name:"pasta",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"75",offer:"0",rate:"70",imgName:"pinaple-pancake.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/pinaple-pancake.jpg?alt=media&token=ac03c0f2-d0f5-4a3c-b907-a3d82144b518",category:"",type:"dessert",name:"pineapple pancake",
        des:"Product description ...",
        tag1:"jelly",tag2:"butter",stock:"10"},
    {
        id:"73",offer:"0",rate:"400",imgName:"bay-pizza.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/bay-pizza.jpg?alt=media&token=ebc72ae4-df5a-4e16-bf29-844e1269758f",category:"veg",type:"pizza",name:"Pizza bayGarlic",
        des:"Product description ...",
        tag1:"Cheese",tag2:"hand toast",stock:"10"},
    {
        id:"76",offer:"0",rate:"700",imgName:"fugazetta.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/fugazetta.jpg?alt=media&token=f5bcab4a-affb-49d6-a6d4-d58fb3edf12d",category:"",type:"pizza",name:"pizza fugazetta",
        des:"Product description ...",
        tag1:"colombia",tag2:"olive",stock:"10"},
    {
        id:"74",offer:"0",rate:"400",imgName:"chicken-origano.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/chicken-origano.jpg?alt=media&token=8e5bf82a-77f3-4eac-bf47-60025e782a45",category:"",type:"pizza",name:"Pugliese Pizza",
        des:"Product description ...",
        tag1:"signature👌",tag2:"mozzarella",stock:"10"},
    {
        id:"77",offer:"0",rate:"250",imgName:"raw-puli.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/raw-puli.jpg?alt=media&token=11db50ef-f607-43fb-b947-5ee6fda25adb",category:"veg",type:"dessert",name:"puli pitha",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"71",offer:"0",rate:"300",imgName:"punjabi-thali.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/punjabi-thali.jpg?alt=media&token=a231b876-f490-4bb4-b071-bb010437c6ef",category:"non-veg",type:"meal",name:"punjabi thali",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"56",offer:"0",rate:"20",imgName:"luchi.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/luchi.jpg?alt=media&token=5487a633-8294-4ed3-9393-ce66107002ef",category:"veg",type:"meal",name:"radhabalhavi",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"79",offer:"0",rate:"400",imgName:"rogan-josh.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/rogan-josh.jpg?alt=media&token=c6a09e74-fb34-4f23-93e2-6b0f52e92935",category:"non-veg",type:"meal",name:"rogan josh",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"78",offer:"0",rate:"130",imgName:"rose-pattle.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/rose-pattle.jpg?alt=media&token=6db99197-7a0b-4ca1-b96c-931ee9b2a149",category:"non-veg",type:"dessert",name:"rose petals",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"80",offer:"0",rate:"25",imgName:"rosogolla.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/rogan-josh.jpg?alt=media&token=c6a09e74-fb34-4f23-93e2-6b0f52e92935",category:"veg",type:"dessert",name:"rosogolla",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"84",offer:"0",rate:"250",imgName:"shahi-chicken.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/shahi-chicken.jpg?alt=media&token=bb57e7f8-3377-40d4-8554-cac5f376288c",category:"non-veg",type:"meal",name:"sahi chicken",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"91",offer:"0",rate:"120",imgName:"salmon-rost.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/salmon-rost.jpg?alt=media&token=33fab16b-eb59-4274-8b84-b784df3cdf58",category:"non-veg",type:"starter",name:"salmon rost",
        des:"Product description ...",
        tag1:"lemon",tag2:"bengali",stock:"10"},
    {
        id:"82",offer:"0",rate:"40",imgName:"samosa.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/samosa.jpg?alt=media&token=bdd14628-b1b8-43ca-986f-fe403d87bbde",category:"veg",type:"starter",name:"samosa",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"83",offer:"0",rate:"200",imgName:"sashmi-chicken.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/sashmi-chicken.jpg?alt=media&token=147464af-5b95-42f3-8044-b05ed87981ec",category:"non-veg",type:"starter",name:"sashmi chicken",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"81",offer:"0",rate:"250",imgName:"sahi-paneer.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/sahi-paneer.jpg?alt=media&token=8a6e4c9f-da35-4b13-b8b4-ae10d8d5ad4c",category:"veg",type:"meal",name:"schezwan paneer",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"92",offer:"0",rate:"120",imgName:"shawarma-wrap.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/shawarma-wrap.jpg?alt=media&token=c6d78d33-18eb-4efe-ab9a-ee124106a747",category:"non-veg",type:"meal",name:"shawarma wrap",
        des:"Product description ...",
        tag1:"chicken",tag2:"meo_mint",stock:"10"},
    {
        id:"85",offer:"0",rate:"210",imgName:"sheri-silver-ice.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/sheri-silver-ice.jpg?alt=media&token=1b1a0644-c59e-4b79-9dc6-51ba9c61c034",category:"non-veg",type:"dessert",name:"sheri silver",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"86",offer:"5",rate:"200",imgName:"sikh-kabab.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/sikh-kabab.jpg?alt=media&token=9cd0e623-50f9-473f-a631-0c38301b7cd6",category:"non-veg",type:"starter",name:"sikh kabab",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"107",offer:"0",rate:"200",imgName:"sondesh.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/sondesh.jpg?alt=media&token=55ef7c99-e088-43e5-b81f-ba0488ce6bd3",category:"veg",type:"dessert",name:"sondesh",
        des:"Product description ...",
        tag1:"signature👌",tag2:"lite",stock:"10"},
    {
        id:"90",offer:"0",rate:"500",imgName:"cheese-burst-olive.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/cheese-burst-olive.jpg?alt=media&token=1ab976b3-f1dd-480b-b101-042ec62cceb3",category:"non-veg",type:"pizza",name:"St. Louis Style",
        des:"Product description ...",
        tag1:"southAmerican",tag2:"basil",stock:"10"},
    {
        id:"87",offer:"0",rate:"150",imgName:"steam-momo.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/steam-momo.jpg?alt=media&token=e02a87ba-74ff-40dc-8cc8-7db21f0a90d6",category:"non-veg",type:"starter",name:"steam momo",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"88",offer:"0",rate:"170",imgName:"strawberry-pie.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/strawberry-pie.jpg?alt=media&token=ba1befd4-973e-4bf3-9600-5ff4f28fb085",category:"non-veg",type:"dessert",name:"strawberry pie",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"89",offer:"10",rate:"220",imgName:"strawberry-splash.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/strawberry-splash.jpg?alt=media&token=2ea7787b-fe97-48fc-865f-5523544d0ae0",category:"veg",type:"drink",name:"strawberry z",
        des:"Product description ...",
        tag1:"signature👌",tag2:"tag2",stock:"10"},
    {
        id:"94",offer:"0",rate:"700",imgName:"tanduri-chicken.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/tanduri-chicken.jpg?alt=media&token=2da65beb-b2fe-4fa3-a8f2-794bbac9d20f",category:"non-veg",type:"starter",name:"tandoori chicken",
        des:"Product description ...",
        tag1:"test",tag2:"topSeller",stock:"10"},
    {
        id:"93",offer:"0",rate:"80",imgName:"tomato-soup.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/tomato-soup.jpg?alt=media&token=fc5322c9-d54c-439e-b36a-a85c6c264e96",category:"veg",type:"soup",name:"tomato soup",
        des:"Product description ...",
        tag1:"tang",tag2:"lite",stock:"10"},
    {
        id:"102",offer:"0",rate:"110",imgName:"waffle-vanilla-love.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/waffle-vanilla-love.jpg?alt=media&token=c9d0d688-1f95-4c1e-89bc-9e148818458a",category:"non-veg",type:"dessert",name:"vanilla love",
        des:"Product description ...",
        tag1:"waffle",tag2:"ice ceam",stock:"10"},
    {
        id:"96",offer:"0",rate:"110",imgName:"vanila-splash.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/vanila-splash.jpg?alt=media&token=94acadfa-685c-4f5f-8f47-de058e8dcb4f",category:"veg",type:"dessert",name:"vanilla splash",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"97",offer:"0",rate:"180",imgName:"veg-biriyani.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/veg-biriyani.jpg?alt=media&token=b0c85f9b-a5cf-48e5-b72a-655e60fe4366",category:"veg",type:"meal",name:"veg biriyani",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"98",offer:"0",rate:"120",imgName:"veg-pakora.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/veg-pakora.jpg?alt=media&token=84603dea-7137-4e33-b5e6-b7694e5cb288",category:"veg",type:"starter",name:"veg pakora",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"100",offer:"0",rate:"160",imgName:"veg-saate.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/veg-saate.jpg?alt=media&token=8ada8e72-d6f9-4ea1-a261-0c6accf9a584",category:"veg",type:"starter",name:"veg satay",
        des:"Product description ...",
        tag1:"tag1",tag2:"tag2",stock:"10"},
    {
        id:"101",offer:"0",rate:"300",imgName:"veg-thali.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/veg-thali.jpg?alt=media&token=a1111c42-f896-47b8-a780-0f942233d9df",category:"veg",type:"meal",name:"veg thali",
        des:"Product description ...",
        tag1:"sabzi",tag2:"rice",stock:"10"},
    {
        id:"103",offer:"0",rate:"600",imgName:"old-wine.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/old-wine.jpg?alt=media&token=237a60b8-eb4b-434d-a429-cb62ce70a206",category:"drink",type:"drink",name:"wine",
        des:"Product description ...",
        tag1:"signature👌",tag2:"booze",stock:"10"},
    {
        id:"106",offer:"0",rate:"400",imgName:"zafrani-biriyani.jpg",imgUrl:"https://firebasestorage.googleapis.com/v0/b/lifoodie-backend.appspot.com/o/zafrani-biriyani.jpg?alt=media&token=31e0bc8f-8744-49ea-bc06-ca4ab39d4630",category:"non-veg",type:"meal",name:"zafrani biriyani",
        des:"Product description ...",
        tag1:"signature👌",tag2:"best_seller",stock:"10"
    }
]
async function getApiProduct() {
    //console.log("api called")
    // axios.get(process.env.REACT_APP_LIFOODIE_PRODUCT_API)
    //     .then(res => {
    //         localStorage.setItem('product', JSON.stringify(res.data.data))
    //         console.log(res.data.data)

    //         return true
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         return false
    //     })
    localStorage.setItem('product', JSON.stringify(DB))
    return true
}


// hl7  if require i will use this but not for now.
// async function getApiImg () {
//     axios.get(process.env.REACT_APP_LIFOODIE_ALL_IMG_API)
//     .then(res => {
//         localStorage.setItem('img-link', JSON.stringify(res.data))
//         console.log(res.data)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }


export { getApiProduct }