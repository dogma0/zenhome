import { Prisma } from '../src/generated/prisma-client'

const port = process.argv[2]

const db = new Prisma({
    endpoint: `http://localhost:${port}`,
    // secret: "mysecret45wrong"
})

const seedConfig = {
    numUser: 10,
    numOffer: 20,
    numTouring: 30
}

const seedGeneric = async (f: (number) => Object, endloop) => {
    try {
        for (let i = 1; i <= endloop; i++) {
            let res = await f(i)
            console.log(JSON.stringify(res))
        }
    } catch (e) {
        console.log(JSON.stringify(e))
        return e
    }
}

const seed = async () => {
    await seedGeneric((i) => db.createUser({
        name: `user${i}`,
        email: `user${i}@email.com`,
        password: `user${i}`
    }), seedConfig.numUser)
    await seedGeneric((i) => db.createOffer({
        creator: {
            connect: {
                email: `user${Math.floor(Math.random() * Math.floor(seedConfig.numUser) + 1)}@email.com`
            }
        }
    }), seedConfig.numOffer)
    await seedGeneric((i) => db.createTouring({
        creator: {
            connect: {
                email: `user${Math.floor(Math.random() * Math.floor(seedConfig.numUser) + 1)}@email.com`
            }
        }
    }), seedConfig.numTouring)
}

seed()
console.log("Sync code finished")