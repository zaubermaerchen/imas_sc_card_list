<template>
    <div class="result">
        <div class="icon">
            <img width="96" height="96" v-bind:src="getIconImageUrl()" v-on:click="click" />
        </div>
        <div class="detail">
            <h1>{{ getName() }}</h1>

            <div class="data">
                <div class="summary">
                    <h2>レアリティ</h2>
                    <p>{{ getRarity() }}</p>
                    <h2>アイデア</h2>
                    <p>{{ getIdea() }}</p>
                    <h2>登場日</h2>
                    <p>{{ getReleaseDate() }}</p>
                </div>

                <div class="status">
                    <h2>ステータス</h2>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Vo</th>
                                <th>Da</th>
                                <th>Vi</th>
                                <th>Me</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>初期値</th>
                                <td>{{ getVocal() }}</td>
                                <td>{{ getDance() }}</td>
                                <td>{{ getVisual() }}</td>
                                <td>{{ getMental() }}</td>
                            </tr>
                            <tr>
                                <th>最大値</th>
                                <td>{{ getMaxVocal() }}</td>
                                <td>{{ getMaxDance() }}</td>
                                <td>{{ getMaxVisual() }}</td>
                                <td>{{ getMaxMental() }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    function getAssetsUrl(hash: string): string {
        return "https://shinycolors.enza.fun/assets/" + hash;
    }

    export default Vue.extend({
        name: "support_card",
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
            getVocal: function (): number {
                return parseInt(this.data.vocal);
            },
            getDance: function (): number {
                return parseInt(this.data.dance);
            },
            getVisual: function (): number {
                return parseInt(this.data.visual);
            },
            getMental: function (): number {
                return parseInt(this.data.mental);
            },
            getMaxVocal: function (): number {
                return parseInt(this.data.max_vocal);
            },
            getMaxDance: function (): number {
                return parseInt(this.data.max_dance);
            },
            getMaxVisual: function (): number {
                return parseInt(this.data.max_visual);
            },
            getMaxMental: function (): number {
                return parseInt(this.data.max_mental);
            },
            getIdea: function (): string {
                switch (parseInt(this.data.idea)) {
                    case 1:
                        return "ボーカル";
                    case 2:
                        return "ダンス";
                    case 3:
                        return "ビジュアル";
                    case 4:
                        return "トーク";
                    case 5:
                        return "アピール";
                    default:
                        return "";
                }
            },
            click: function (): void {
                let image_urls: string[] = [];
                if (this.getCardImageUrl() != null) {
                    image_urls.push(this.getCardImageUrl());
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
    .result > .detail h2 {
        font-size: 100%;
        margin: 0;
    }

    .result > .detail > .data {
        display: flex;
    }
    .result > .detail > .data > .summary {
        margin-right: 2em;
    }
    .result > .detail > .data > .summary > p {
        font-size: 100%;
        margin: 0 1em 0 0.5em;
    }
    .result > .detail > .data > .status th {
        padding: 0 1em;
        text-align: center;
        background-color: #aaaaee;
    }
    .result > .detail > .data > .status td {
        padding: 0 1em;
        text-align: right;
        background-color: #ccccff;
    }
</style>