import React from 'react'
import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const AnalyticsContext = createContext();

export const AnalyticsContextProvider = ({ children }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyC6kWUGdoxsLm6LM7wqr4cJZ8gpQNmrFxM",
        authDomain: "task-master-48e3f.firebaseapp.com",
        projectId: "task-master-48e3f",
        storageBucket: "task-master-48e3f.appspot.com",
        messagingSenderId: "209435015480",
        appId: "1:209435015480:web:f3464de8dc3ec68eae69cd",
        measurementId: "G-SFGS6F79XW"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    return <AnalyticsContext.Provider value={{ analytics }}>
        {children}
    </AnalyticsContext.Provider>
}