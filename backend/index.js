const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());


app.get("/" , (req, res)=>{
    res.send("This is Home route");
})

async function connectToDB(){
    const sequelize = new Sequelize(process.env.DBNAME,process.env.USER ,process.env.PASSWORD , {
        host: 'localhost',
        dialect:'mysql'
      });
      try {
          await sequelize.authenticate();
          console.log('Connection has been established successfully.');
      } 
      catch (error) {
          console.error('Unable to connect to the database:', error);
      }
}

app.listen(port, async()=>{
    await connectToDB();
    console.log(`Server is running on port: ${port}`);
})


