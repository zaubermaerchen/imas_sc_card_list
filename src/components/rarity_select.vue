<template>
    <v-select label="name" v-model="values" v-bind:reduce="rarity => rarity.id" v-bind:options="options" multiple="multiple"></v-select>
</template>

<script lang="ts">
    import Vue from "vue";
    import VueSelect from "vue-select"

    export default Vue.extend({
        name: "rarity_select",
        components: {
            "v-select": VueSelect,
        },
        data: function () {
            return {
                options: [
                    { id: 1, name: "N" },
                    { id: 2, name: "R" },
                    { id: 3, name: "SR" },
                    { id: 4, name: "SSR" },
                ],
                values: []
            };
        },
        watch: {
            values: {
                handler(values: number[]) {
                    this.$emit("change", values);
                }
            }
        }
    });
</script>

<style scoped>

</style>