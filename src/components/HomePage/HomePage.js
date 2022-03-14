import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import filecoinlogo from '../../assets/images/filecoinlogo.png';
import BitblockLogo from '../../assets/images/BitblockLogo.png';

const HomePage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <h1>Welcome to Bitblock</h1>
                    <p>Bitblock is a decentralized video sharing platform hosted on the <a href="https://filecoin.io/">Filecoin network</a></p>
                
                    <p>
                    Our platform lets the creators and viewers both profit from creating and watching videos instead of centralized content platforms that keep all profits to themselves.
                    </p>
                    <p> We are able to do this by issuing our XXXXXX token to creators for bringing viewers and issuing XXXX tokens to viewers who watch advertisments and help support the platform.</p>
                    <p> Filecoin network provides low fees that allow us to take minimal profits while storing the videos and distributing on our behalf</p>
                    <p>If you are interested in participating in this platform please reach out here</p>
                </MDBCol>
                <MDBCol>
                    <img src={BitblockLogo} height={300} />
                    <img src={filecoinlogo} height={100}  />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default HomePage;