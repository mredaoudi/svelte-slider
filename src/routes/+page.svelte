<script lang="ts">
    import Puzzle from '$lib/Puzzle.svelte';
    import img from '$lib/images/picture.jpg';

    let solved: boolean;
</script>

<div class="content">
    {#if solved}
        <p>You did it!</p>
        <img class="full-image" src={img} alt="Finished"/>
    {:else}
        <p>Solve the puzzle!</p>
        <Puzzle bind:solved/>
    {/if}
</div>

<style>
    .full-image {
        border: 1px solid #dedede;
    }
</style>