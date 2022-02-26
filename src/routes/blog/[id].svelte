<script context="module">

  export const load = ({ params }) => {

    return {
      props: {
        id: params.id
      }
    }

  }
  
</script>


<script type="text/javascript">
  export let id
</script>


<h1>Blog post - { id }</h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac varius sem. Cras sodales arcu vel lectus commodo cursus. Aliquam in orci vestibulum, consequat lacus eu, ullamcorper quam. Duis hendrerit ex eu augue venenatis luctus. Etiam aliquam pulvinar arcu, ut feugiat lectus imperdiet sed. Ut gravida imperdiet tellus, ut finibus felis. Proin sed fermentum turpis, ac venenatis urna. Sed eu ex elit.
</p>