import { PropaneSharp } from '@mui/icons-material';
import * as React from 'react';

function QRCode(props) {
    const downloadimg = props.url;
    const exampleImage = <img id="example-qr" style={{ height: '250px', width: '250px' }} src={downloadimg} alt="" />;
    return exampleImage;
}

export default QRCode;
