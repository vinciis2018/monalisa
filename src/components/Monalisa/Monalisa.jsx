import React from 'react';
import './Mona.css';

// import { PoRT } from "@_koi/port";
// const REACT_APP_NODE_URL = `https://mainnet.koii.live`


// const port = new PoRT({
//   trustedNodeAddress: REACT_APP_NODE_URL,
//   node: 5,
//   walletLocation: '',
//   connectionWait: false 
// });

export function Monalisa ({
  // screen="61e1532b4cdb8cfa375286da",
  // screen="61e10b9fe679b4afaf09b3a9",
  // monaName="monalisa_slideshow_1"
  screen, monaName
}){
  const screenId = screen;
  const monaClass = monaName ? monaName : 'monalisa_slideshow_full';
  const [index, setIndex] = React.useState(0);
  const delay = 2000;
  const timeoutRef = React.useRef(null);
  const [videos, setVideos] = React.useState([]);
  const [txId, setTxId] = React.useState('');

  function resetTimeout() {
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const response  = await window.fetch(`https://vblinds.herokuapp.com/api/screens/${screenId}/screenVideos`)
        const data = await response.json();
        setVideos(data)
        console.log(data)
        data.map((d) => d.thumbnail).map((i) => i.split("https://arweave.net/")[1]).map((txId) => setTxId(txId))
        // console.log(data.map(d => d.video).map(i => i.split("https://arweave.net/")[1]))
        resetTimeout()
        timeoutRef.current = setTimeout(() => {
          if(videos.length <= 1) {
            setIndex(index);
          } else {
            setIndex((prevIndex) => (prevIndex === (videos.length - 1 || videos.length) ? 0 : prevIndex + 1))
          }
        }, delay)
      } catch (r) {
        console.error(r)
      }
    }
    fetch()
  }, [index, videos.length, screenId])

  return (
    <div>
      <div className={monaClass}>
        <div className="monalisa_slideshowSlider" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
          {videos.map((video) => (
            <a key={video._id} aria-label="Blinds by Vinciis" href={`https://vblinds.herokuapp.com/video/${video._id}/${txId}`} target="_blank" rel="noopener noreferrer">
              <img 
                className="monalisa_slide"
                title="Blinds by Vinciis"
                key={txId}
                src={`https://arweave.net/${txId}`}
                // onLoad={() => triggerPort(txId)}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


// const triggerPort = (txId: any) => {
//   port.propagatePoRT(txId);
// };

export default Monalisa;