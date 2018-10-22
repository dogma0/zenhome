import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { APP_SECRET, getUserId, AuthError } from '../utils'

export const Mutation = {
  signup: async (_, { password, name, email }, ctx) => {
    const hashedPassword = await hash(password, 10)
    const user = await ctx.db.createUser({
      name,
      email,
      password: hashedPassword,
    })

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    }
  },
  login: async (_, { email, password }, ctx) => {
    const user = await ctx.db.user({ email })

    if (!user) {
      throw new Error(`No user found for email: ${email}`)
    }

    const valid = await compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    }
  },
  createOffer: async (_, { }, ctx) => {
    return await ctx.db.createOffer({
      user: {
        connect: {
          id: getUserId(ctx)
        }
      }
    })
  },
  deleteOffer: async (_, { id }, ctx) => {
    if (!await ctx.db.$exists.offer({
      id: id,
      creator: { id: getUserId(ctx) }
    })) throw new AuthError
    return await ctx.db.deleteOffer({
      id: id
    })
  },
  createTouring: async (_, { }, ctx) => {
    return await ctx.db.createTouring({
      user: {
        connect: {
          id: getUserId(ctx)
        }
      }
    })
  },
  deleteTouring: async (_, { id }, ctx) => {
    if (!await ctx.db.$exists.touring({
      id: id,
      creator: { id: getUserId(ctx) }
    })) throw new AuthError
    return await ctx.db.deleteTouring({
      id: id
    })
  },
}
