<template>
    <section>
        <img v-for="src in image_urls" v-bind:src="src" />
    </section>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        name: "viewer",
        props: [
            "image_urls"
        ],
    });
</script>

<style scoped>
    img {
        width: 100%;
        background-color: black;
        object-fit: contain;
    }

</style>