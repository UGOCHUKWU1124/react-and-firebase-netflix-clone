    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { 
        createUserWithEmailAndPassword, 
        getAuth, 
        signInWithEmailAndPassword, 
        signOut} from "firebase/auth";//authentication
    import {
        addDoc, 
        collection,
        getFirestore } from "firebase/firestore/lite";//database connection
    import { toast } from "react-toastify";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId:import.meta.env.VITE_FIREBASE_APP_ID,
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app); //authentication
    const db = getFirestore(app); //database connection

    //user signUp
    const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user; //authentication

        await addDoc(collection(db, "user"), {  //database connection
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
    }
    };

    //user login

    const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
    }
    };

    const logout = ()=>{
        signOut(auth);
    }

    export {auth,db,login,signUp,logout}
