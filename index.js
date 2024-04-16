const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require('./src/connection/db');
const os = require('os');
dotenv.config();
const authRouter = require('./src/routes/auth-routes');
const prodRouter = require('./src/routes/product-route')
const errorHandler = require('./src/middleware/error-handler');
connectDb();
const app = express();

const port = process.env.PORT || 3000;
const appIp = os.networkInterfaces();
const appAddress = `http://${appIp}:${port}/`;
console.log(`Connecting to ${appAddress}`);
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use( '/api/auth',authRouter);

app.use('/api/product', prodRouter)

app.use(errorHandler);
app.listen(port, () => {
  console.log(`product pulse app listening on port ${port} `);
});