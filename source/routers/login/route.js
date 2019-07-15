export const get = (req, res) => res.render('login');

export const post = (req, res, next) => next();

export const callback = (req, res) => res.redirect('/');
