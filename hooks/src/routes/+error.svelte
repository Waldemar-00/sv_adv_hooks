<script>
// @ts-nocheck
    import {page} from '$app/state'
</script>
<h1>Common error page</h1>
<h2>{page.status}</h2>
<h2>{page.error?.message}</h2>
<h2>{page.error?.name}</h2>
<h3>{page.error?.code}</h3>