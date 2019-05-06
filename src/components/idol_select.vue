<template>
    <v-select label="name" v-model="values" v-bind:reduce="idol => idol.id" v-bind:options="options" multiple="multiple"></v-select>
</template>

<script lang="ts">
    import Vue from "vue";
    import VueSelect from "vue-select"
    import * as api from "../components/api";

    export default Vue.extend({
        name: "idol_select",
        components: {
            "v-select": VueSelect,
        },
        data: function () {
            return {
                options: [],
                values: []
            };
        },
        mounted: function (): void {
            this.getIdolList();
        },
        methods: {
            getIdolList: function (): void {
                api.getIdolList().then((json: any) => {
                    this.options = json;
                });
            }
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