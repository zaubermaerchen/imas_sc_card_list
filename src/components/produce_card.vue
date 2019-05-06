<template>
    <div class="result">
        <div class="icon">
            <img width="96" height="96" v-bind:src="getIconImageUrl()" v-on:click="click" />
        </div>
        <div class="detail">
            <h1>{{ getName() }}</h1>

            <h2>レアリティ</h2>
            <p>{{ getRarity() }}</p>

            <h2>登場日</h2>
            <p>{{ getReleaseDate() }}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    function getAssetsUrl(hash: string): string {
        return "https://shinycolors.enza.fun/assets/" + hash;
    }

    export default Vue.extend({
        name: "produce_card",
        props: [
            "data"
        ],
        methods: {
            getName: function (): string {
                return this.data.name;
            },
            getRarity: function (): string {
                switch (parseInt(this.data.rarity)) {
                    case 1:
                        return "N";
                    case 2:
                        return "R";
                    case 3:
                        return "SR";
                    case 4:
                        return "SSR";
                    default:
                        return "";
                }
            },
            getReleaseDate: function (): string {
                return this.data.release_date;
            },
            getIconImageUrl: function (): string {
                return this.data.icon_hash != null ? getAssetsUrl(this.data.icon_hash) : null;
            },
            getCardImageUrl: function (): string {
                return this.data.card_hash != null ? getAssetsUrl(this.data.card_hash) : null;
            },
            getFesCardImageUrl: function (): string {
                return this.data.fes_card_hash != null ? getAssetsUrl(this.data.fes_card_hash) : null;
            },
            click: function (): void {
                let image_urls: string[] = [];
                if (this.getCardImageUrl() != null) {
                    image_urls.push(this.getCardImageUrl());
                }
                if (this.getFesCardImageUrl() != null) {
                    image_urls.push(this.getFesCardImageUrl());
                }
                if (image_urls.length > 0) {
                    this.$emit("click", image_urls);
                }
            }
        }
    });
</script>

<style scoped>
    .result {
        margin: 0 0 1em 0;
        display: flex;
        align-items: center;
    }

    .result > .detail {
        margin: 0 0.25em;
        padding: 5px;
        background-color: #eeeeee;
        border-radius: 0.5em;
        flex-grow: 1;
        order: 1;
    }

    .result > .icon {
        margin: 0 0.25em;
        order: 0;
        cursor : pointer;
    }
    .result > .detail > h1 {
        font-size: 120%;
        margin: 0 0 0.5em 0;

    }
    .result > .detail > h2 {
        font-size: 100%;
        margin: 0;
    }
    .result > .detail >  p {
        font-size: 100%;
        margin: 0 1em 0 0.5em;
    }
</style>