import User from "../models/dbModel.js";
import fs from "fs";

export const getData = async(req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getDataById = async(req, res) => {
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};
export const createData = async(req, res) => {
    try {
        await User.create(req.body)
        res.status(201).json({msg: "Data Created"});
    } catch (error) {
        console.log(error.message);
    }
};
export const updateData = async(req, res) => {
    try {
        await User.update(req.body, {
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
};
export const deleteData = async(req, res) => {
    try {
        await User.destroy({
            where: {},
            truncate: true
        })
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
};

export const getDataByProvince = async(req, res) => {
    try {
        const response = await User.findAll({
            order:[["score", "DESC"]],
            where:{
                Provinsi: req.query.Provinsi
            },
            // limit : 20
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};


export const createMultipleData = async(req, res) => {
    try {
        fs.readFile("./data/datafix.json", function(err, data){
            User.bulkCreate(JSON.parse(data.toString()))}
        )
        res.status(201).json({msg: "Data Created"});
    } catch (error) {
        console.log(error.message);
    }
};





