import express from "express";
import { getData, getDataById, createData, updateData, deleteData, getDataByProvince, createMultipleData } from "../controller/dataController.js";


const router = express.Router();

router.get('/data', getData);
router.get('/data/:id', getDataById);
router.post('/data/', createData);
router.patch('/data/:id', updateData);
router.delete('/data', deleteData);
router.get('/search', getDataByProvince);
router.post('/muldata', createMultipleData);



export default router;

