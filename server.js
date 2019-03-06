

var logger          = require('morgan'),
cors                = require('cors'),
http                = require('http'),
express             = require('express'),
bodyParser          = require('body-parser'),
mongoose            = require('mongoose'),
config              = require('dotenv').config();

var app = express();
var port = process.env.PORT || 3001;


app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(require('./routes/router'));

app.listen(port, function (err) {
    console.log('listening on port: ' + port);
});

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', (err) => {
    console.log('mongodb error: ', err);
    process.exit();
});

mongoose.connection.on('connected', () => {
    console.log('mongodb db connected to: ', process.env.MONGODB_URI);
});