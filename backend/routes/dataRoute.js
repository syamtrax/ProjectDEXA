import express from "express";
import { getData, getDataById, createData, updateData, deleteData, getDataByProvince } from "../controller/dataController.js";


const router = express.Router();

router.get('/data', getData);
router.get('/data/:id', getDataById);
router.post('/data/', createData);
router.patch('/data/:id', updateData);
router.delete('/data/:id', deleteData);
router.get('/search', getDataByProvince);



export default router;

