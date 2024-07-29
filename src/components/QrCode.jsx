import { useState } from 'react';
import'../CSS/QrCode.css';

export const QrCode = () => {
    const [img,setImg]= useState("");
    const[loading,setLoading] = useState(false);
    const[qrData,setQrData] = useState("keerthana");
    const[qrSize,setQrSize] = useState("150");


    async function generateQR(){
        setLoading(true)
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}*${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);

        }catch(error){
            console.error("Error generating QR Code",error);

        }finally{
            setLoading(false);
        }
    }

    function downloadQR(){
        fetch(img)
        .then((response) => response.blob())
        .then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error) => {
            console.error("Error downloading QR code", error);
        })
        
    }
  return (
    <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please Wait...</p>}
        {img && <img src={img} alt='profile' className='qr-code-img'/>}
        <div>
            <label htmlFor="dataInput" className='input-label'>
                Data for QR Code:
            </label>
            <input type='text' id="dataInput" value={qrData} placeholder='Enter OR Code' onChange={(e) => setQrData(e.target.value)}/>
            <label htmlFor="sizeInput" className='input-label'>
                Image Size(eg., 150):
            </label>
            <input type='text' id="sizeInput" value={qrSize} placeholder='Enter Image Size' onChange={(e) => setQrSize(e.target.value)} />
            <button className='generate-button' disabled={loading} onClick={generateQR}>Generate QR Code</button>
            <button className='download-button' onClick={downloadQR}>Download QR Code</button>
            

        </div>
        <p className='footer'>Designed By Keerthana</p>

    </div>
  )
}
