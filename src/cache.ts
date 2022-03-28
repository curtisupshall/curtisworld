import axios from 'axios'
import redis from 'redis'

const REDIS_PORT: number = 6379

const redisClient = redis.createClient()
redisClient.on('error', (error) => {
    console.error('Redis client error: ', error)
})

await redisClient.connect()

await redisClient.set('hello', 'world')

const response: string = `Hello, ${await redisClient.get('hello')}!`

console.log(response)

const mapRedisValues = (record: Record<string, string | number>): string[] => {
    return Object.keys(record).reduce((acc: string[], key) => {
        return [...acc, key, String(record[key])]
    }, [])
}
