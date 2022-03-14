import { MDBBtn, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const UploadVideo = () => {
    const [file, setFile] = useState()
    console.log(file)
    return (
        <MDBContainer>
            <MDBCol>
                <h1>Upload a video</h1>
                <p>Once you upload a video, the Bitblock community will be able to see your video and you may start collecting revenue</p>
                <input type='file' onChange={(event) => setFile(event.target.files[0])}/>
            </MDBCol>
            <MDBCol className="mb 9">
                {file && <ReactPlayer url={"https://www.youtube.com/watch?v=ysz5S6PUM-U"}></ReactPlayer>}
            </MDBCol>
            <MDBCol className="mb 9">
                <MDBBtn onClick={() => console.log('click')}>Upload Video</MDBBtn>
            </MDBCol>
        </MDBContainer>
    );
};

export default UploadVideo;