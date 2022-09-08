import { Button } from 'antd'
import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteAllTodo,
  priorityFilterChange,
  searchFilterChange,
  statusFilterChange,
} from '../../redux/actions'

const { Search } = Input

export default function Filters() {
  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterPriorities, setFilterPriorities] = useState([])

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    dispatch(searchFilterChange(e.target.value))
  }

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }

  const handlePriorityChange = (value) => {
    setFilterPriorities(value)
    dispatch(priorityFilterChange(value))
  }
  const handleDeleteAllClick = () => {
    console.log('handleDeleteAllClick run')
    dispatch(deleteAllTodo())
  }
  return (
    <Row justify='center' style={{ marginTop: '10px', marginBottom: '10px', width: '100%' }}>
      {/* <Col span={24}>
        <Search
          placeholder='input search text'
          onChange={handleSearchTextChange}
          value={searchText}
        />
      </Col> */}
      <Col
        sm={24}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Todo'>To do</Radio>
          <Radio value='Completed'>Completed</Radio>
        </Radio.Group>
        <Button type='primary' onClick={handleDeleteAllClick}>
          Clear All
        </Button>
      </Col>
      {/* <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriorities}
          onChange={handlePriorityChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col> */}
    </Row>
  )
}
