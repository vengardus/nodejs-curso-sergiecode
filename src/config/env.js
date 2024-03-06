import dotenv from 'dotenv';
import envVar from 'env-var';

dotenv.config();

export const envs = {
    PORT: envVar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envVar.get('PUBLIC_PATH').default('public').asString()
};

//export default envs;
