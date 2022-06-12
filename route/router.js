import express from "express";
import { homeView ,addView,updateView,deleteView,addProduct } from "../controller/controller.js";
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

router.get('/',homeView)
router.get('/add',addView)
router.post('/add', addProduct)
router.get('/update',updateView)
router.get('/delete',deleteView)
  
 export {router}
