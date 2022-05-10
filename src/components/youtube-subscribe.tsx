import React, { useRef } from "react";
import { Helmet } from "react-helmet";

interface Props {
    channelId: string;
    layout: string;
    count: string;
}
const YoutubeSubscribe: React.FC<Props> = ({ channelId, layout, count }) => {
    const subBtn = useRef<HTMLDivElement>(null);

    return (
        <>
            <Helmet>
                <script src="https://apis.google.com/js/platform.js"></script>
            </Helmet>

            <div
                ref={subBtn}
                className="g-ytsubscribe"
                data-channelid={channelId}
                data-layout={layout}
                data-count={count}
            />
        </>
    );
};

export default YoutubeSubscribe;
