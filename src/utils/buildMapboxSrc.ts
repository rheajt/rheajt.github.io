interface MapboxImageOptions {
    theme: string;
    lat: number;
    lng: number;
    zoom: number;
    token?: string;
}

const defaultOpts: Omit<MapboxImageOptions, "token"> = {
    theme: "dark-v10",
    lat: -77.4469,
    lng: 37.5628,
    zoom: 11.64,
};

export function buildMapboxSrc(opts: MapboxImageOptions = defaultOpts) {
    const token = opts.token ?? import.meta.env.VITE_MAPBOX_TOKEN;

    if (!token) {
        return;
    }

    const url: string[] = [
        "https://api.mapbox.com/styles/v1/mapbox/",
        opts.theme,
        `/static/${opts.lat},${opts.lng},${opts.zoom},0/`,
        `500x400?access_token=${token}`,
    ];

    return url.join("");
}
