const express=require("express");
const getUser=require("./router/user")
const db=require("./config/db")
const inven=require("./router/inventorys")
const auth=require("./router/login");
const login=require("./router/veryfileOrder");
const addnew=require("./router/addOrder")


const app=express();
const PORT=3000;
db();

// const whileList=["http://localhost:3001"];
// const corsOptions = {
//     origin: function (origin, callback) {
//       if (whileList.indexOf(origin) !== -1) {
//          callback(null, true);
//       }else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     },
//     methods: 'PUT,PATCH,GET,DELETE,UPDATE',
//   };
  
// app.use(cors(corsOptions))
app.use(express.json());
app.use("/addnew",addnew)
app.use("/login",login)
app.use("/authLogin",auth)
app.use("/inven",inven)
app.use("/",getUser)

app.listen(PORT,()=>{
    console.log(`sever is running at ${PORT} `)
})
