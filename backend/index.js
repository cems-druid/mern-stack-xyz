import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/soccerRoutes";

const mongoName = env.userName;
const mongoPasswd = env.userPass;

const app = express();
const PORT = 4000;

//mongodb connection
const uri =`mongodb+srv://${mongoName}:{mongoPasswd}@cluster0-cs.yit7w.mongodb.net/soccerDB-tutorial?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//CORs 
app.use(cors());

//routing
routes(app)

app.get("/", (req, res) => {
    res.send(`The application is running on ${PORT}`);
});

app.listen(PORT, ()=> {
    console.log(`The server is running on the port ${PORT}`);
})
