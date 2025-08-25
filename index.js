// const express = require("express"); // Method 1
import express from "express";  // Method 2
import dotenv from "dotenv";
dotenv.config({});

const app = express();

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`server listen at port ${PORT}`);
});