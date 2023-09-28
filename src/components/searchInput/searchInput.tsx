import AddSearchFilterButton from "../addSearchFilterButton/addSearchFilterButton"
import BreedsListSelect from "../breedsListSelect/breedsListSelect"
import './searchInput.css'
import { Row, Col } from "antd"

function SearchInput() {
    return (
        <Row justify={'space-between'} align={'middle'}>
            <Col className="title" xs={24} md={6} lg={3}>
                <h1>Dog-Ceo</h1>
            </Col>
            <Col xs={24} md={12}>
                <Row gutter={[8,8]} justify={'end'} className="search_input">
                    <Col xs={24} md={18}>
                        <BreedsListSelect/>
                    </Col>
                    <Col className={'addFilter_button'} xs={24} md={3} lg={2} >
                        <AddSearchFilterButton/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default SearchInput