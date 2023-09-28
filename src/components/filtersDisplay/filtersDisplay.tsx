import { Collapse } from "antd"
import type { CollapseProps } from "antd"
import FiltersList from "../filtersList/filtersList"
import './filtersDisplay.css'

function FiltersDisplay() {
    const item: CollapseProps['items'] = [
        {key: 1,
        label: 'Listado de filtros:',
        children: <FiltersList/>
        }
    ]
  return (
    <Collapse defaultActiveKey={1} accordion bordered={false} items={item}/>
  )
}

export default FiltersDisplay