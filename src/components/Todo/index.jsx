// import { Row, Tag, Checkbox } from 'antd'
import { useState } from 'react'
import { Col, Row, Input, Button, Select, Tag, Checkbox } from 'antd'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
}

export default function Todo({ id, name, priority, handleDelete, update }) {
  const [checked, setChecked] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editTodo, setEditTodo] = useState(name)

  const toggleCheckbox = () => {
    setChecked(!checked)
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    update(id, editTodo)
    setIsEditing(false)
  }
  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      {isEditing ? (
        <>
          <form onSubmit={handleUpdate}>
            <input
              type='text'
              value={editTodo}
              onChange={(e) => {
                setEditTodo(e.target.value)
              }}
            />
            <button>Update</button>
          </form>
        </>
      ) : (
        <>
          <Checkbox checked={checked} onChange={toggleCheckbox} />
          <span>{name}</span>
          <button onClick={() => handleDelete(id)}>delete</button>
          <button onClick={() => setIsEditing(true)}>update</button>

          <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
            {priority}
          </Tag>
        </>
      )}
    </Row>
  )
}
