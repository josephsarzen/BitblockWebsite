import React from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { MDBContainer } from 'mdb-react-ui-kit';

const WhitePaper = () => {
    const docs = [
        { uri: require("../../assets/whitepaper/bitblock-whitepaper.pdf") }, // Local File
      ];

    return (
        <MDBContainer>
            <p>This is our whitepaper describing our vision for Bitblock</p>
            <p>Reach out here if you are interested about the project</p>
            <DocViewer
                pluginRenderers={DocViewerRenderers}
                documents={docs}
            />
        </MDBContainer>
    )
};

export default WhitePaper;