import express from 'express';

// Instruments
import { app } from './server';
import { getPort } from './utils';

// Routers
import { users, login, logout, lessons, classes } from './routers';

const PORT = getPort();

app.use(express.json({ limit: '10kb' }));

app.use('/users', users);
app.use('/login', login);
app.use('/logout', logout);
app.use('/lessons', lessons);
app.use('/classes', classes);

app.listen(PORT, () => {
    console.log(`Server API is up on port ${PORT}`);
});
