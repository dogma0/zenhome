import { getUserId } from '../utils'

export const User = {
  showings: (_parent, _args, ctx) => {
    return ctx.db.user(
      { id: getUserId(ctx) }).showings()
  },
}
