// const express = require("express"); // Method 1
import express from "express";  // Method 2

const app = express();

const PORT = 7000;

app.listen(PORT, () => {
    console.log(`server listen at port ${PORT}`);
})