import VectorSVG from "./VectorSVG"; 

const svgGeneration = [
    {id:1,height: 451, width:567 , positionWithSize: 'leftHexagon'},
    {id:1,height: 517, width:567 , positionWithSize: 'rightHexagon'},
    {id:1,height: 336, width:373 , positionWithSize: 'leftHexagonSmall'},
    {id:1,height: 319, width:427 , positionWithSize: 'rightHexagonSmall'},
    {id:1,height: 451, width:333 , positionWithSize: 'middleHexagonSmall'}
]

const Vector = () => { 

    const handleRender =(element) => {
        const {height, width, positionWithSize, id} = element
        return (
            <VectorSVG id={id} height={height} width={width} positionWithSize={positionWithSize}/>
        )
    }

    return (
        <div>
           {svgGeneration.map(element =>  handleRender(element))} 
        </div>
    ) 
}

export default Vector