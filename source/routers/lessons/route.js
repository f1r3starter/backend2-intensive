import {ValidationError} from "../../utils/errors";

export const get = (req, res) => {
    throw new ValidationError('123');
    try {
        const data = {};

        res.status(200).json({ data });
    }  catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    }  catch (error) {
        res.status(400).json({ message: error.message });
    }
};
