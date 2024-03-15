<script>
    import './styles.css';
</script>

<div class="content">
    <h1><span class="name">Slider</span>: The Sliding Puzzle</h1>
    <slot/>
</div>

<style>
    .content {
        margin: 0 auto;
        width: 75%;
        text-align: center;
    }

    .name {
        font-size: 1.5em;
        color: #333003;
        font-style: italic;
    }
</style>