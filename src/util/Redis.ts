import { RedisCache } from 'apollo-server-cache-redis';

const Redis = new RedisCache(process.env.REDIS_URL);

export default Redis;
