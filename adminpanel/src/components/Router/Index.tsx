import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import Header from "../Header/Index";
import Footer from "../Footer/Index";

const Router = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<AppLayout />}
                />
            </Routes>
            <Footer/>
        </>
    );
}

export default Router;