const path = require('node:path');

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const serveStatic = require('serve-static');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const morgan = require('morgan');
const serveFavicon = require('serve-favicon');
const passport = require('passport');
const httpErrors = require('http-errors');

const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');

const app = express();


async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://0.0.0.0:27017/calculator_express');

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    
    app.use(morgan('dev'));
    
    app.use(serveStatic(path.join(__dirname, 'public')));
    
    app.use(serveFavicon(path.join(__dirname, 'public', 'img', 'calc.ico')));
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.use(cookieParser());
    
    app.use(
        expressSession(
            {
                secret: 'SqT3qKBxGV0N2rKo',
                resave: false,
                saveUninitialized: true,
                store: MongoStore.create(
                    {
                        client: mongoose.connection.getClient()
                    }
                )
            }
        )
    );
    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/', indexRoutes);
    app.use('/user', userRoutes);

    app.use((req, res, next) => next(httpErrors(404)));
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render(
            'error',
            {
                title: 'Error',
                message: err.message,
                error: {
                    status: err.status,
                    stack: err.stack
                }
            }
        );
    });

    app.listen(8000, () => console.log('Started Server On Port 8000'));
}

main();
