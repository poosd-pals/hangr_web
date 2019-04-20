var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var http = require('http');
var cors = require('cors');

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var clothingRouter = require('./routes/clothing');
var outfitsRouter = require('./routes/outfits');
var hamperRouter = require('./routes/hamper');

var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: "secret!",
	key: "",
	hasError: false,
	errorMessage: "",
	hasRegisterSuccess: false,
	uid: "",
	displayName: ""
}));

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/clothing', clothingRouter);
app.use('/outfits', outfitsRouter);
app.use('/hamper', hamperRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/hangr-web/index.html'));
  });
  
  /**
   * Get port from environment and store in Express.
   */
  const port = process.env.PORT || '3000';
  app.set('port', port);
  
  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);
  
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app;
