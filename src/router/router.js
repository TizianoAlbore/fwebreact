const express = require('express');
const router = express.Router();

router.get('/(home)',(req,res)=>{
res.send('./views/index.html');
})
router.get('/defaultview',(req,res)=>{
    res.send('./views/defaultview.html');
    })
    

export default router;