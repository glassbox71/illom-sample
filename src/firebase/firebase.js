// firebase앱을 초기화하는 함수
import { initializeApp } from "firebase/app"

// getAuth 인증 시스템 생성
// GoogleAuthProvider 구글 로그인 기능 제공
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 데이터베이스 -> json형태로 저장
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APP_ID,
// }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDgyRq9ymznzJi4HP6QkuVbQgXkX2LdEs",
  authDomain: "ott-sample-3c668.firebaseapp.com",
  projectId: "ott-sample-3c668",
  storageBucket: "ott-sample-3c668.firebasestorage.app",
  messagingSenderId: "85853357886",
  appId: "1:85853357886:web:f5258e7f05f0335b624e6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// 데이터 베이스 연결
export const db = getFirestore(app);

// storage 연결
export const storage = getStorage(app);