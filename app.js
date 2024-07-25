const express = require('express');
const app = express();
const userModel = require('./models/users');
const postModel = require('./models/posts');


app.get('/', function(req,res){
    res.send("hii");
});


app.get('/post/create',async function(req,res){
    let post =  await postModel.create({
     postdata: "Hello Lavdu ",
     user: "66a1e1db449428a7947f6e2e"
    })
     
    let user  = await userModel.findOne({id:"66a1e1db449428a7947f6e2e"});
    user.posts.push(post._id);
    await user.save();
 
     res.send({post,user});
    })




app.listen(3000);

