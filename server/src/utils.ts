import { verify } from 'jsonwebtoken'
import { APP_SECRET_PW } from './constants'

export const APP_SECRET = APP_SECRET_PW

class AuthError extends Error {
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
