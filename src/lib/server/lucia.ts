import lucia from 'lucia-auth'
import { sveltekit } from 'lucia-auth/middleware'
import prismaAdapter from '@lucia-auth/adapter-prisma'
import { dev } from '$app/environment'
import { prisma } from './prisma'
import { discord } from '@lucia-auth/oauth/providers'
import {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_REDIRECT_URI,
  DISCORD_CLIENT_SECRET
} from '$env/static/private'

export const auth = lucia({
  adapter: prismaAdapter(prisma),
  env: dev ? 'DEV' : 'PROD',
  middleware: sveltekit(),
  transformDatabaseUser: (userData) => {
    return {
      userId: userData.id,
      discordUserId: userData.discordUserId,
      discordUsername: userData.discordUsername,
      discordAvatar: userData.discordAvatar
    }
  }
})

export type Auth = typeof auth

export const discordAuth = discord(auth, {
  clientId: DISCORD_CLIENT_ID,
  clientSecret: DISCORD_CLIENT_SECRET,
  redirectUri: DISCORD_CLIENT_REDIRECT_URI
})
