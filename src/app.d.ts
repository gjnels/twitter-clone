import type { PrismaClient } from '@prisma/client'

declare global {
  namespace App {
    interface Locals {
      auth: import('lucia-auth').AuthRequest
    }
  }

  let __prisma: PrismaClient

  /// <reference types="lucia-auth" />
  declare namespace Lucia {
    type Auth = import('$lib/lucia').Auth
    type UserAttributes = {
      discordUserId: string
      discordUsername: string
      discordAvatar: string
    }
  }
}

export {}
