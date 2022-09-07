// import { Row, Tag, Checkbox } from 'antd'
import { DeleteOutlined, FormOutlined } from '@ant-design/icons'
import { Button, Checkbox, Col, Divider, Input, Row, Select } from 'antd'
import { useState } from 'react'
const priorityColorMapping = {
  High: 'red',
  Medium: 'black',
  Low: 'gray',
}

export default function Todo({ todo, handleDelete, handleUpdate, idUpdate, setIdUpdate }) {
  const [checked, setChecked] = useState(todo.completed)
  const [editTodoName, setEditTodoName] = useState(todo.name)
  const [editTodoPriority, setEditTodoPriority] = useState(todo.priority)

  const toggleCheckbox = () => {
    setChecked(!checked)
  }
  const handleUpdateButtonClick = (e) => {
    e.preventDefault()
    handleUpdate(todo.id, editTodoName, editTodoPriority)
    setIdUpdate(-1)
  }

  return (
    <Row
      justify='space-between'
      align='middle'
      style={{
        marginTop: 15,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      {idUpdate === todo.id ? (
        <>
          <Col span={24}>
            <Input.Group style={{ display: 'flex' }} compact>
              <Input
                value={editTodoName}
                onChange={(e) => {
                  setEditTodoName(e.target.value)
                }}
              />
              <Select
                defaultValue='Medium'
                value={editTodoPriority}
                onChange={(value) => {
                  setEditTodoPriority(value)
                }}
              >
                <Select.Option value='High' label='High'>
                  <span>High</span>
                </Select.Option>
                <Select.Option value='Medium' label='Medium'>
                  <span>Medium</span>
                </Select.Option>
                <Select.Option value='Low' label='Low'>
                  <span>Low</span>
                </Select.Option>
              </Select>
              <Button type='primary' onClick={handleUpdateButtonClick}>
                Update
              </Button>
            </Input.Group>
          </Col>
        </>
      ) : (
        <>
          <Checkbox checked={checked} onChange={toggleCheckbox}>
            <span style={{ color: `${priorityColorMapping[todo.priority]}` }}>{todo.name}</span>
          </Checkbox>
          <div>
            <FormOutlined
              onClick={() => setIdUpdate(todo.id)}
              style={{ color: '#1890ff', marginRight: '15px' }}
            />
            <DeleteOutlined
              onClick={() => handleDelete(todo.id)}
              style={{ color: 'red', marginRight: '5px' }}
            />
          </div>
          <Divider style={{ margin: '10px 0' }} />
        </>
      )}
    </Row>
  )
}
