const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/register");
const Applicationform = require("./models/applicationform");
const Diseaseform = require("./models/diseaseform");
const e = require("express");


const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

// storage
// const Storage = multer.diskStorage({
//     destination:'upload',
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     },

// });


app.get("/", (req, res) =>{
    res.render("index")
})


app.get("/register",(req, res) => {
    res.render("register");
})

app.post("/register", async (req, res) => {
    try {
        
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword){
            const registerEmployee = new Register({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                phone:req.body.phone,
                gender:req.body.gender,
                password:password,
                confirmpassword:cpassword

            })

            const registered = await registerEmployee.save();
            res.redirect('/login');

        }else{
            res.send("password not matched")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

app.get("/login",(req, res) => {
    res.render("login");
})

app.post("/login", async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});
    
        if(useremail.password===password){
            res.status(201).render("indexhome");
        }else{
            res.send("password are not matching");
        }

        
    }catch(error){
        res.status(400).send("invalid Email")
    }
})
app.get("/index1",(req, res) => {
    res.render("index1");
})


app.get("/applicationform",(req, res) => {
    res.render("applicationform");
})

app.post("/applicationform", async (req, res) => {
    try {
            const applicationForm = new Applicationform({
                fullname:req.body.fullname,
                bloodgroup:req.body.bloodgroup,
                email:req.body.email,
                address:req.body.address,
                age:req.body.age,
                dob:req.body.dob,
                contact:req.body.contact,
                econtact:req.body.econtact,
                mstatus:req.body.mstatus,
                gender:req.body.gender,
                religion:req.body.religion,
                occupation:req.body.occupation
            })

            const applied = await applicationForm.save();
            res.redirect("/diseaseform");

        


    } catch (error) {
        res.status(400).send(error);
    }
})


app.get("/diseaseform",(req, res) => {
    res.render("index2");
})

app.post("/diseaseform", async (req, res) => {
    try {
        const diseaseForm = new Diseaseform({
            desillness: req.body.desillness,
            date: req.body.date,
            hlybs: req.body.hlybs,
            surgery: req.body.surgery,
            hopi: req.body.hopi,
            diagnosis: req.body.diagnosis,
            allergies: req.body.allergies,
            mediaction: req.body.mediaction,
        })

        await diseaseForm.save();
        res.redirect("/success");
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get('/success', (req, res) => {
    res.render("index3");
})

app.listen(port, () =>{
    console.log(`server is runing at port no ${port}`);
})