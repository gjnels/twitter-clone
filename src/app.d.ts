declare global {
  namespace App {
    interface Locals {
      auth: import('lucia-auth').AuthRequest
    }
  }
}

/// <reference types="lucia-auth" />
declare global {
  namespace Lucia {
    type Auth = import('$lib/lucia').Auth
    type UserAttributes = {
      discordUserId: string
      discordUsername: string
      discordAvatar: string
    }
  }
}

export {}
