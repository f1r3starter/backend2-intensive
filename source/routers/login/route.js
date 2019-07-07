import jwt from 'jsonwebtoken';
import { ValidationError } from '../../utils/errors';

export const post = (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            throw new ValidationError('Email is required');
        }

        const token = jwt.sign({ email }, 'secret');

        res.setHeader('x-token', token);
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
