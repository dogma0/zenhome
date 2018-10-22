import { getUserId } from '../utils'

export const Query = {
  me: (_parent, _args, ctx) => {
    return ctx.db.user({ id: getUserId(ctx) })
  },
  testAllOffers: (_, __, ctx) => ctx.db.offers(),
  testAllTourings: (_, __, ctx) => ctx.db.tourings()
}
