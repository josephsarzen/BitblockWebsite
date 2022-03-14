import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import ReactPlayer from 'react-player/youtube'
import BitblockLogo from '../../assets/images/BitblockLogo.png';

const BrowseVideos = () => {
    const [url, setUrl] = useState("https://www.youtube.com/watch?v=ysz5S6PUM-U");
    return (
        <MDBContainer>
            <h1>Browse</h1>
            <MDBRow>
                <MDBCol md="9" className="mb-r">
                <ReactPlayer url={url} />
                </MDBCol>
                <MDBCol md="3">
                    <h5>Recomended Videos</h5>
                    <Recomendation src={BitblockLogo} text={"Video rec 1"} />
                    <Recomendation src={BitblockLogo} text={"cool video"} />
                    <Recomendation src={BitblockLogo} text={"Yar yar binks"} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

const Recomendation = ({src, text}) => {
    return (
        <MDBContainer onClick={() => {console.log('click')}}>
            <MDBCol>
                <img alt='alt' src={src} height={150} />
                <p>{text}</p>
            </MDBCol>
        </MDBContainer>
    );
}

export default BrowseVideos;