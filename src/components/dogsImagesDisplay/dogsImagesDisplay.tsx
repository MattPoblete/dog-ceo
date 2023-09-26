import {  useSelector } from "react-redux"
import { Card, Row, Col } from "antd"

function DogsImagesDisplay() {
    const filters = useSelector((state: any)=>state.filters.currentFilters)
    const { Meta } = Card;

    return (
        <Row gutter={{sm:16, md: 21}}>
            {filters.map((filter :any, index: number)=>(
            <Col>
                <Card key={index} hoverable style={{ width: 240 }} cover={<img key={index} alt="dog-image" src={filter.src}/>}>
                    <Meta title={filter.breed}/>
                </Card>
            </Col>

            ))}
        </Row>
    )
}

export default DogsImagesDisplay