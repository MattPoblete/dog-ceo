import {  useSelector } from "react-redux"
import { Row, Col, Image } from "antd"
import { filter } from "../../constants";
import './dogsImagesDisplay.css'

function DogsImagesDisplay() {
    const filters = useSelector((state: any)=>state.filters.currentFilters)

    return (
        <Row className='image_container' gutter={[16,16]} justify={'center'}>
            {filters.map((filter: filter, index: number)=>(
            <Col className='image_container__col' xs={24} md={12} lg={6} key={index}>
                <Image alt="dog-image" className="dog_image" key={index} src={filter.src}/>
            </Col>
            ))}
        </Row>
    )
}

export default DogsImagesDisplay