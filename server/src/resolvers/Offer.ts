import { AuthError, getUserId } from '../utils'

export const Offer = {
    creator: async (_parent, _, ctx) => {
        if(!await ctx.db.$exists.offer({
            id: _parent.id,
            creator: {
                id: getUserId(ctx)
            }
        })) throw new AuthError
        return ctx.db.offer({id: _parent.id}).creator()
    }
}