
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// console.log('inside firebase config', import.meta.env.VITE_PASS)

// const firebaseConfig = {
//   // apiKey:import.meta.env.VITE_APIKEY ,
//   // authDomain:import.meta.env.VITE_AUTHDOMAIN,
//   // projectId:import.meta.env.VITE_PROJECTID,
//   // storageBucket:import.meta.env.VITE_STORAGEBUCKET ,
//   // messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID ,
//   // appId:import.meta.env.VITE_APPID ,


//   apiKey: "AIzaSyAlhJjttd8r8p0X1yqnSW2qFFOVx0CMznc",
//   authDomain: "food-break-website.firebaseapp.com",
//   projectId: "food-break-website",
//   storageBucket: "food-break-website.appspot.com",
//   messagingSenderId: "63436685985",
//   appId: "1:63436685985:web:63fe0ca5b57498a07ba6e0",
//   measurementId: "G-6D8SX74E8M"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);












import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDOj9_ibGue9cUHfPqQt_OFf8P4LcVnyFw",
  authDomain: "form1-9b582.firebaseapp.com",
  projectId: "form1-9b582",
  storageBucket: "form1-9b582.appspot.com",
  messagingSenderId: "138459687661",
  appId: "1:138459687661:web:c2e1fc3ab25acdcd017ae4",
  measurementId: "G-KLSLG7H6GB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);