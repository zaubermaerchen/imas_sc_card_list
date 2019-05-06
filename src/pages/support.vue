<template>
    <section>
        <ul class="navigation">
            <li><router-link to="/produce">プロデュースアイドル</router-link></li>
            <li class="selected"><router-link to="/support">サポートアイドル</router-link></li>
        </ul>

        <table>
            <tr>
                <th>対象アイドル</th>
                <td><idol-select v-on:change="changeIdol"></idol-select></td>
            </tr>
            <tr>
                <th>対象レアリティ</th>
                <td><rarity-select v-on:change="changeRarity"></rarity-select></td>
            </tr>
        </table>

        <pager v-bind:count="count" v-bind:limit="limit" v-on:change="changePage"></pager>

        <ul class="cards">
            <li v-for="card in cards"><card v-bind:data="card" v-on:click="click"></card></li>
        </ul>

        <modal name="image">
            <viewer v-bind:image_urls="image_urls"></viewer>
        </modal>
    </section>
</template>

<script lang="ts">
    import Vue from "vue";
    import SupportCard from "../components/support_card";
    import Pager from "../components/pager";
    import Viewer from "../components/viewer";
    import RaritySelect from "../components/rarity_select";
    import IdolSelect from "../components/idol_select";
    import * as api from "../components/api";

    export default Vue.extend({
        name: "produce",
        components: {
            "card": SupportCard,
            "pager": Pager,
            "viewer": Viewer,
            "rarity-select": RaritySelect,
            "idol-select": IdolSelect,
        },
        data: function () {
            return {
                cards: [],
                count: 0,
                limit: 10,
                image_urls: [],
                rarities: [],
                idol_id_list: []
            };
        },
        mounted: function (): void {
            this.search()
        },
        methods: {
            search: function (offset: number = 0): void {
                api.searchSupportCard(this.idol_id_list, this.rarities, this.limit, offset).then((json: any) => {
                    this.count = json.count;
                    this.cards = json.results;
                });
            },
            changePage: function (offset: number): void {
                this.search(offset);
            },
            changeIdol: function (idol_id_list: number[]): void {
                this.idol_id_list = idol_id_list;
                this.search();
            },
            changeRarity: function (rarities: number[]): void {
                this.rarities = rarities;
                this.search();
            },
            click: function (image_urls: string[]): void {
                this.image_urls = image_urls;
                this.$modal.push("image");
            },
        },
    });
</script>

<style scoped>
    ul.navigation {
        list-style-type: none;
        display: flex;
        margin: 0.5em;
        padding: 0;
    }
    ul.navigation > li {
        margin-right: 0.5em;
    }
    ul.navigation > li.selected > a {
        font-weight: bold;
        color: inherit;
        text-decoration: none;
    }
    table {
        width: 100%;
        margin-bottom: 1em;
    }
    table th {
        width: 10em;
    }
    ul.cards {
        list-style-type: none;
        padding: 0 2em;
    }
</style>