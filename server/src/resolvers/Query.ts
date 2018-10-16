import { getUserId } from '../utils'

export const Query = {
  me: (_parent, _args, ctx) => {
    return ctx.db.user({ id: getUserId(ctx) })
  },
  offers: (_parent, _args, ctx) => {
    return ctx.db.user(
      { id: getUserId(ctx) }).offers()
  },
  tourings: (_parent, _args, ctx) => {
    return ctx.db.user(
      { id: getUserId(ctx) }).tourings()
  },
}
