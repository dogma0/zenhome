import { AuthError, getUserId } from '../utils'

export const Touring = {
    creator: async (_parent, _, ctx) => {
        if(!await ctx.db.$exists.touring({
            id: _parent.id,
            creator: {
                id: getUserId(ctx)
            }
        })) throw new AuthError
        return ctx.db.touring({id: _parent.id}).touring()
    }
}