import  "./VectorSVG.scss";

const VectorSVG = (props) => {
    const {height,width, positionWithSize,id} = props
    return (
        <div className={positionWithSize} key={id}>
        <svg width={width} height={height} viewBox="0 0 578 528" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M460.111 75.7686C506.768 95.8054 553.155 142.745 570.159 207.059C587.163 271.373 574.259 353.83 532.547 398.094C490.835 442.358 420.221 448.851 361.637 469.937C303.052 491.024 256.836 526.778 212.32 527.547C167.467 528.242 124.315 493.951 82.6293 449.818C40.6052 405.611 0.0470156 351.561 0.35209 292.399C0.564022 233.658 41.301 169.73 79.6848 113.238C118.069 56.7456 153.854 7.19349 193.551 0.939082C232.909 -5.39008 276.61 31.2318 321.493 46.4562C366.713 61.7554 413.547 55.3105 460.111 75.7686Z" fill="url(#paint0_linear_3858_331)" />
            <defs>
                <linearGradient id="paint0_linear_3858_331" x1="-43" y1="473.594" x2="510.347" y2="595.899" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#73E0A9" />
                    <stop offset="1" stopColor="#5B68DF" />
                </linearGradient>
            </defs>
        </svg>
        </div>

    )
}

export default VectorSVG
