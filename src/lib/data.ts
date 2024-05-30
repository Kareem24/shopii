import img1 from '../assets/images/clothe1.png'
import img2 from '../assets/images/clothe2.png'
import success from '../assets/images/sucess.png'
import failed from '../assets/images/Illustration.png'
export const products = [
  {
    product_id: "1",
    product_photos: [img1],
    product_title: "classic monotone Tees",
    offer: {
      price: '$350.00'
    }
  },
  {
    product_id: "2",
    product_photos: [img2],
    product_title: "essential neutrals",
    offer: {
      price: '$22.00'
    }
  }

]

export const paymentMessage = {
  success: {
    img: success,
    heading: 'thank you for shopping',
    message: 'your order has been  successfully placed and is now being processed',
    path: '',
    btnText: 'go to my account'
  },
  failed: {
    img: failed,
    heading: 'Oops! There was an issue',
    message: 'Oops! There was a problem processing your order. Please review the details and try again.',
    path: '',
    btnText: 'reorder'
  },
}
export const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);