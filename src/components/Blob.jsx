import React from 'react'


export function Blob(props) {

    const color = [...Object.values(props)];

    return (
        <>
            <div style={{position: 'absolute', height: '500px', width: '500px'}}>
                <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                    <g transform="translate(154.9557342529297, -6.678565979003906)">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{stopColor: color[0]}}></stop>
                                <stop offset='50%' style={{stopColor: color[1]}}></stop>
                                <stop offset="100%" style={{stopColor: color[2]}}></stop>
                            </linearGradient>
                        </defs>
                        <path fill="url(#gradient)" className="">
                            <animate attributeName="d" 
                                dur='10s'
                                repeatCount='indefinite'
                                values='M433,312Q421,374,365,402Q309,430,247,440Q185,450,138.5,407.5Q92,365,59.5,307.5Q27,250,63.5,195.5Q100,141,139,85Q178,29,243,50.5Q308,72,359,103Q410,134,427.5,192Q445,250,433,312Z;
                                M445.5,310.5Q417,371,369.5,422Q322,473,248.5,476Q175,479,134,421.5Q93,364,47.5,307Q2,250,45,191Q88,132,140.5,104Q193,76,257.5,52Q322,28,375,74Q428,120,451,185Q474,250,445.5,310.5Z;
                                M434,308Q409,366,357.5,393.5Q306,421,248,428Q190,435,137.5,402.5Q85,370,73,310Q61,250,56.5,178Q52,106,113.5,62.5Q175,19,242,43.5Q309,68,351.5,106.5Q394,145,426.5,197.5Q459,250,434,308Z;
                                M448.5,307.5Q408,365,364,416Q320,467,254.5,452Q189,437,128.5,410Q68,383,58.5,316.5Q49,250,78.5,198.5Q108,147,150.5,111Q193,75,259.5,46Q326,17,381,66Q436,115,462.5,182.5Q489,250,448.5,307.5Z;                                    
                                M433,312Q421,374,365,402Q309,430,247,440Q185,450,138.5,407.5Q92,365,59.5,307.5Q27,250,63.5,195.5Q100,141,139,85Q178,29,243,50.5Q308,72,359,103Q410,134,427.5,192Q445,250,433,312Z'
                            >
                            </animate>
                        </path>
                    </g>
                </svg>
            </div>
            <div style={{position: 'absolute', height: '500px', width: '500px', filter: 'blur(50px)'}}>
                <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                    <g transform="translate(154.9557342529297, -6.678565979003906)">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{stopColor: color[0]}}></stop>
                                <stop offset='50%' style={{stopColor: color[1]}}></stop>
                                <stop offset="100%" style={{stopColor: color[2]}}></stop>
                            </linearGradient>
                        </defs>
                        <path fill="url(#gradient)" className="">
                            <animate attributeName="d" 
                                dur='10s'
                                repeatCount='indefinite'
                                values='M433,312Q421,374,365,402Q309,430,247,440Q185,450,138.5,407.5Q92,365,59.5,307.5Q27,250,63.5,195.5Q100,141,139,85Q178,29,243,50.5Q308,72,359,103Q410,134,427.5,192Q445,250,433,312Z;
                                M445.5,310.5Q417,371,369.5,422Q322,473,248.5,476Q175,479,134,421.5Q93,364,47.5,307Q2,250,45,191Q88,132,140.5,104Q193,76,257.5,52Q322,28,375,74Q428,120,451,185Q474,250,445.5,310.5Z;
                                M434,308Q409,366,357.5,393.5Q306,421,248,428Q190,435,137.5,402.5Q85,370,73,310Q61,250,56.5,178Q52,106,113.5,62.5Q175,19,242,43.5Q309,68,351.5,106.5Q394,145,426.5,197.5Q459,250,434,308Z;
                                M448.5,307.5Q408,365,364,416Q320,467,254.5,452Q189,437,128.5,410Q68,383,58.5,316.5Q49,250,78.5,198.5Q108,147,150.5,111Q193,75,259.5,46Q326,17,381,66Q436,115,462.5,182.5Q489,250,448.5,307.5Z;                                    
                                M433,312Q421,374,365,402Q309,430,247,440Q185,450,138.5,407.5Q92,365,59.5,307.5Q27,250,63.5,195.5Q100,141,139,85Q178,29,243,50.5Q308,72,359,103Q410,134,427.5,192Q445,250,433,312Z'
                            >
                            </animate>
                        </path>
                    </g>
                </svg>
            </div>
        </>
    )
}
