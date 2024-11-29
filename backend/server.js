const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
//const contactRoute = require('./routes/contactRoutes.js');


const app = express();

const port = process.env.PORT || 5000;

const corsOptions = {
    origin: 'https://github.com/Awa91/ads281124/blob/main/en-ns1.json',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }



app.use(cors(corsOptions))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }

  
//app.use('/api/contact', contactRoute);
//require('./routes/contactRoutes.js')(app);



app.listen(port, () => console.log(`Server started on port ${port}`));