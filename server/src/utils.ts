import { verify } from 'jsonwebtoken'

export const APP_SECRET = 'appsecret321'

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

export function getUserId(ctx) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken: any = verify(token, APP_SECRET)
    return verifiedToken && verifiedToken.userId
  }

  throw new AuthError()
}
