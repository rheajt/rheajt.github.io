interface MapboxImageOptions {
    theme: string;
    lat: number;
    lng: number;
    zoom: number;
    token: string;
}

const defaultOpts: MapboxImageOptions = {
    theme: "dark-v10",
    lat: -77.4469,
    lng: 37.5628,
    zoom: 11.64,
    token: "pk.eyJ1IjoicmhlYWp0IiwiYSI6ImNqNjR1MWd0YTF2ZTIzM3E3OHVzNXh6YXQifQ.aDdsJcGnpBi5982--JQZVA",
};

export function buildMapboxSrc(opts = defaultOpts) {
    const url: string[] = [
        "https://api.mapbox.com/styles/v1/mapbox/",
        opts.theme,
        `/static/${opts.lat},${opts.lng},${opts.zoom},0/`,
        `500x400?access_token=${opts.token}`,
    ];

    return url.join("");
}
