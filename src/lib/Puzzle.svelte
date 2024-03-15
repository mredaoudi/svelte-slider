<script lang="ts">
    import { generateRandomOrderedList, isSolvable } from '$lib/utils';

    export let solved: boolean;

    type Image = {
        id: number;
        src: string;
    };

    let randomList;
    do {
        randomList = generateRandomOrderedList();
    } while (!isSolvable(randomList));

    let images: Image[] = randomList.map((n: number): Image => ({
        id: n,
        src: `src/lib/images/image_part_00${n}.jpg`,
    }));

    let emptyImageNumber: number = 9;

    function handleClick(clicked: Image) {
        const empty: Image = images.find((image) => image.id === emptyImageNumber)!;
        const emptyIndex = images.indexOf(empty);
        const clickedIndex = images.indexOf(clicked);

        if (clickedIndex === emptyIndex - 1 || clickedIndex === emptyIndex + 1) {
            images[emptyIndex] = clicked;
            images[clickedIndex] = empty;
        } else if (clickedIndex === emptyIndex - 3 || clickedIndex === emptyIndex + 3) {
            images[emptyIndex] = clicked;
            images[clickedIndex] = empty;
        }
        solved = images.every((image, index) => image.id === index + 1);
    }
</script>

<div class="container">
  <div class="grid-container">
    {#each images as image}
      {#if image.id === emptyImageNumber}
        <div class="grid-item"></div>
      {:else}
        <button class="grid-item" on:click={() => handleClick(image)}>
            <img class="grid-img" src={image.src} alt={`Image ${image.id}`} />
        </button>
      {/if}
    {/each}
  </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
    }
    .grid-container {
        display: grid;
        border: 1px solid #dedede;
        grid-template-columns: repeat(3, 200px);
        grid-auto-rows: 1fr;
        gap: 0;
    }

    .grid-item {
        all: unset;
        width: 200px;
        height: 200px;
        background-color: transparent;
    }

    .grid-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
</style>