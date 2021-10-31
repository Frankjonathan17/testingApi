const express = require('express');
const router = express.Router();

router.get('/', async (req,res)=>{
     try{
        res.send('THIS THING IS WORKED NOW')
     }
     catch(er){
          console.log('error',er);
          return res.status(400).send('server errro')
     }
})


module.exports = router