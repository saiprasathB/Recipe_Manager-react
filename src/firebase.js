// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getDocs } from 'firebase/firestore'; // Add this import



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCYZHHqRkgK83-rRMBz3VnrAF-onqTdZM",
  authDomain: "recipe-fcb50.firebaseapp.com",
  projectId: "recipe-fcb50",
  storageBucket: "recipe-fcb50.firebasestorage.app",
  messagingSenderId: "604055509162",
  appId: "1:604055509162:web:62f8c7c2604eec6bb358d3",
  measurementId: "G-RMBWPEN7ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


// Function to add a recipe to Firestore
export const createRecipe = async (recipeData) => {
  try {
    const recipesCollection = collection(db, 'recipes'); // Reference to the 'recipes' collection
    const docRef = await addDoc(recipesCollection, recipeData); // Add document to Firestore
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Function to get all recipes from Firestore
export const getRecipes = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "recipes")); // Get all documents from the 'recipes' collection
    const recipes = [];
    querySnapshot.forEach((doc) => {
      recipes.push({ id: doc.id, ...doc.data() }); // Push each recipe into the array
    });
    return recipes; // Return the recipes
  } catch (e) {
    console.error("Error getting recipes: ", e);
    return []; // Return an empty array in case of error
  }
};
import { doc, deleteDoc } from 'firebase/firestore'; // Import deleteDoc and doc from Firestore

// Function to delete a recipe from Firestore
export const deleteRecipe = async (recipeId) => {
  try {
    const recipeDocRef = doc(db, 'recipes', recipeId); // Get a reference to the document
    await deleteDoc(recipeDocRef); // Delete the document
    console.log(`Recipe with ID ${recipeId} deleted successfully!`);
  } catch (error) {
    console.error("Error deleting recipe: ", error); // Log the error if there's an issue
  }
};
