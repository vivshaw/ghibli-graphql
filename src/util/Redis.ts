import { RedisCache } from 'apollo-server-cache-redis';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.REDIS_URL);
const Redis = new RedisCache(process.env.REDIS_URL);

export default Redis;
