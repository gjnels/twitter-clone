<script lang="ts">
  import type { LayoutData } from './$types'

  export let data: LayoutData
</script>

<h1>Twitter Clone</h1>

{#if data.user}
  <p>Welcome <span class="font-bold">{data.user.discordUsername}</span></p>
  <form
    action="/logout"
    method="post"
  >
    <button
      type="submit"
      class="inline-block rounded-md bg-slate-50 px-[1em] py-[0.5em] font-semibold hover:brightness-125"
      >Logout</button
    >
  </form>
{:else}
  <a
    href="/api/discord"
    class="inline-block rounded-md bg-slate-50 px-[1em] py-[0.5em] font-semibold hover:brightness-125"
    >Login with Discord</a
  >
{/if}
