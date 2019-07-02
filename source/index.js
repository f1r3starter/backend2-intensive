import express from 'express';

// Instruments
import { app } from './server';
import { getPort, logger, errorHandler } from './utils';

// Routers
import { users, login, logout, lessons, classes } from './routers';

const PORT = getPort();

app.all('*', [ logger ]);

app.use(express.json({ limit: '10kb' }));

app.use('/users', users);
app.use('/login', login);
app.use('/logout', logout);
app.use('/lessons', lessons);
app.use('/classes', classes);
app.use(errorHandler);
app.listen(PORT);
