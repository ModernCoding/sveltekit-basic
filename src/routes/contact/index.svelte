<script type="text/javascript">

  export let name, mail, ok

  $: console.log(`${ name }: ${ mail } => ${ ok }`)

  const submitForm = async () => {
    
    const submit = await fetch ('/api/contact', {
      method: "POST",
      body: JSON.stringify ({name, mail})
    })


    const data = await submit.json ()
    console.log (data)
    ok = data.message
  
  }

</script>


<h1>Contact</h1>

<form on:submit|preventDefault={ submitForm }>
  <input type="text" name="name" bind:value={ name }>
  <input type="mail" name="mail" bind:value={ mail }>
  <input type="submit" name="submit">
</form>

{#if ok}
  <h2>OK</h2>
{/if}