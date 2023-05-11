import { discordAuth } from '$lib/server/lucia.js'

import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ cookies }) => {
  // get url to redirect the user to, with the state
  const [url, state] = await discordAuth.getAuthorizationUrl()

  // store state in cookies
  cookies.set('discord_oauth_state', state, {
    path: '/',
    maxAge: 60 * 60
  })

  // redirect to authorization url
  return new Response(null, {
    status: 302,
    headers: {
      location: url.toString()
    }
  })
}
