// import { Row, Tag, Checkbox } from 'antd'
import { useState } from 'react'
import { Col, Row, Input, Button, Select, Tag, Checkbox } from 'antd'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
}

export default function Todo({ id, name, priority, handleDelete, update, idUpdate, setIdUpdate }) {
  const [checked, setChecked] = useState(false)
  const [editTodo, setEditTodo] = useState(name)
  const [editTodoPriority, setEditTodoPriority] = useState(priority)

  const toggleCheckbox = () => {
    setChecked(!checked)
  }
  const handleUpdate = (e) => {
    console.log('handleUpdated run')
    e.preventDefault()
    update(id, editTodo, editTodoPriority)
    setIdUpdate(-1)
  }

  const handleGetIdUpdate = (id) => {
    setIdUpdate(id)
  }

  const handlePriorityChange = (value) => {
    setEditTodoPriority(value)
  }

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      {idUpdate == id ? (
        <>
          <Col span={24}>
            <Input.Group style={{ display: 'flex' }} compact>
              <Input
                value={editTodo}
                onChange={(e) => {
                  setEditTodo(e.target.value)
                }}
              />
              <Select
                defaultValue='Medium'
                value={editTodoPriority}
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
              <Button type='primary' onClick={handleUpdate}>
                Update
              </Button>
            </Input.Group>
          </Col>
        </>
      ) : (
        <>
          <Checkbox checked={checked} onChange={toggleCheckbox} />
          <span>{name}</span>
          <button onClick={() => handleDelete(id)}>delete</button>
          <button onClick={() => handleGetIdUpdate(id)}>update</button>

          <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
            {priority}
          </Tag>
        </>
      )}
    </Row>
  )
}
