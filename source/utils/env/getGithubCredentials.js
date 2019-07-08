import { ValidationError } from '../errors';

export const getGithubCredentials = () => {
    const { GITHUB_ID, GITHUB_SECRET, GITHUB_CB } = process.env;

    if (!GITHUB_ID || !GITHUB_SECRET || !GITHUB_CB) {
        throw new ValidationError(
            'Environment variables GITHUB_ID, GITHUB_SECRET, GITHUB_CB should be specified', 500,
        );
    }

    return { GITHUB_ID, GITHUB_SECRET, GITHUB_CB };
};
