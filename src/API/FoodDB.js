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


async function getApiProduct () {
    //console.log("api called")
    axios.get(process.env.REACT_APP_LIFOODIE_PRODUCT_API)
    .then(res => {
       localStorage.setItem('product', JSON.stringify(res.data.data))
    })
    .catch(err => {
        console.log(err)
    })
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


export {getApiProduct}