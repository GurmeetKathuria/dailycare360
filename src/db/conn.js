const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gurmeet:goGdcSckVfermN0g@cluster0.u0fiklg.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log("DB Connected Successfully");
})
// .catch((e) => {
//     console.log(`no connection`)
// })