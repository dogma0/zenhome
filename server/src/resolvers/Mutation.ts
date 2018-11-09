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
  createShowing: async (_, { addr, datetime, phone }, ctx) => {
    return await ctx.db.createShowing({
      address: addr,
      datetime: datetime,
      phoneNumber: phone,
      creator: {
        connect: {
          id: getUserId(ctx)
        }
      }
    })
  },
  deleteShowing: async (_, { id }, ctx) => {
    if (!await ctx.db.$exists.Showing({
      id: id,
      creator: { id: getUserId(ctx) }
    })) throw new AuthError
    return await ctx.db.deleteShowing({
      id: id
    })
  },
}
