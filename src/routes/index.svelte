<script type="text/javascript" context="module">

  export const load = async ({ fetch }) => {

    const res = await fetch ("/data.json")
    const data = await res.json ()
    console.log (data)

    return {
      props: {
        data
      }
    }
  
  }

</script>


<script type="text/javascript">
  export let data
</script>


<h1>Homepage</h1>
<h2>{ data.x }</h2>