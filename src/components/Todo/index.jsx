import { Row, Tag, Checkbox } from 'antd'
import { useState } from 'react'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
}

export default function Todo({ id, name, priority, handleDeleteButtonClick }) {
  const [checked, setChecked] = useState(false)

  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <button onClick={() => handleDeleteButtonClick(id)}>hé lo</button>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  )
}
