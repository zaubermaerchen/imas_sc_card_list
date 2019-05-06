export function getIdolList(): Promise<any> {
    const url = new URL("https://zaubermaerchen.info/imas_sc/api/idol/list/");

    return fetch(url.href, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        mode: "cors",
        credentials: "omit"
    }).then((response: Response) => {
        return response.json();
    });
}

export function searchProduceCard(idol_id_list: number[] = [], rarity: number[] = [], limit: number | null = null, offset: number | null = null): Promise<any> {
    const url = new URL("https://zaubermaerchen.info/imas_sc/api/card/produce/search/");
    for(let i = 0; i < idol_id_list.length; i++) {
        url.searchParams.append("idol_id", idol_id_list[i].toString());
    }
    for(let i = 0; i < rarity.length; i++) {
        url.searchParams.append("rarity", rarity[i].toString());
    }
    if (limit != null) {
        url.searchParams.append("limit", limit.toString());
    }
    if (offset != null) {
        url.searchParams.append("offset", offset.toString());
    }

    return fetch(url.href, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        mode: "cors",
        credentials: "omit"
    }).then((response: Response) => {
        return response.json();
    });
}

export function searchSupportCard(idol_id_list: number[] = [], rarity: number[] = [], limit: number | null = null, offset: number | null = null): Promise<any> {
    const url = new URL("https://zaubermaerchen.info/imas_sc/api/card/support/search/");
    for(let i = 0; i < idol_id_list.length; i++) {
        url.searchParams.append("idol_id", idol_id_list[i].toString());
    }
    for(let i = 0; i < rarity.length; i++) {
        url.searchParams.append("rarity", rarity[i].toString());
    }
    if (limit != null) {
        url.searchParams.append("limit", limit.toString());
    }
    if (offset != null) {
        url.searchParams.append("offset", offset.toString());
    }

    return fetch(url.href, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        mode: "cors",
        credentials: "omit"
    }).then((response: Response) => {
        return response.json();
    });
}