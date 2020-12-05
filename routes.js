// dependencies
import express from "express";
const router = express.Router();
//controllers
import { SaveProduct, GetProduct, EditProduct, DeleteProduct } from "./server/controllers/product";

//|--------------------------------- APIS -------------------------------------|
router.post("/api/product", SaveProduct);
router.get("/api/product", GetProduct);
router.put("/api/product", EditProduct);
router.delete("/api/product/:id", DeleteProduct);

//|------------------------------------- Views---------------------------------|
router.get("/*", (req, res) => {
    res.sendFile(`${__dirname}/client/public/index.html`);
});

export default router;
