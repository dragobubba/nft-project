import React from "react";
import { VideoWrapper } from "./Home/styles";

const ImageBackground = () => {
    return (
        <VideoWrapper>
            <video autoplay="" loop muted playsinline dataWfIgnore="true" dataObjectFit="cover">
                <source src="https://uploads-ssl.webflow.com/620aa02f5d1169e3a89ae290/62143d5489bb581fe3fdad6b_UCC_Website_Gif_AdobeCreativeCloudExpress-transcode.mp4" data-wf-ignore="true" />
                <source src="https://uploads-ssl.webflow.com/620aa02f5d1169e3a89ae290/62143d5489bb581fe3fdad6b_UCC_Website_Gif_AdobeCreativeCloudExpress-transcode.webm" data-wf-ignore="true" />
            </video>
        </VideoWrapper>
    )
}

export default ImageBackground