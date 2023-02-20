const express=require("express")
const app=express()
const port=800
const path=require("path")
//--------------------------------------------------------
//template engine (hbs)
app.set("view engine","hbs");
app.get("",(req,res)=>{
    res.render("index",{
        name:"MOhit"      // dynamic content
    })
})


//--------------------------------------------------------
//serving a static website
//console.log(path.join(__dirname, "../public"));
const staticPath=path.join(__dirname, "../public")
// app.use(express.static(staticPath))


//---------------------------------------------------------
// basics of express
// home
app.get("/",(req,res)=>{
    res.send("hello from express");
})

//about
app.get("/about",(req,res)=>{
    res.write("this is about page")
    res.write("<h2>this is html</h2>")
    res.send()
})


//---------------------------------------------------------
//query string


app.get("/demo",(req,res)=>{
    console.log(req.query);
    console.log(req.query.city);
    res.render("index",{
      city : req.query.city,
      country : req.query.country
    })
    })
    


//---------------------------------------------------------
// invalid route

app.get("/about/*",(req,res)=>{
    res.render("404",{
        error :"about us page not found"
    })
})


app.get("*",(req,res)=>{
    res.render("404",{
        error :"page not found"
    })
})


//---------------------------------------------------------
app.listen(port,()=>{
    console.log(`running on ${port}`);
})