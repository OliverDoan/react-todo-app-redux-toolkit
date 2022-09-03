import { Col, Row, Input, Button, Select, Tag } from 'antd'
import Todo from '../Todo'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from '../../redux/actions'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { todoListSelector } from '../../redux/selectors'

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [updateTask, setUpdateTask] = useState('')
  const [priority, setPriority] = useState('Medium')
  // const todoList = useSelector((state) => state.todoList)
  const todoList = useSelector(todoListSelector)

  // dispatch là 1 function
  const dispatch = useDispatch()

  const handleAddButtonClick = () => {
    todoName &&
      dispatch(
        addTodo({
          id: uuidv4(),
          name: todoName,
          priority: priority,
          completed: false,
        })
      )

    setTodoName('')
    setPriority('Medium')
  }
  const handleDelete = (id) => {
    id &&
      dispatch(
        deleteTodo({
          id,
        })
      )
  }
  const handleUpdate = (id) => {
    id &&
      dispatch(
        updateTodo({
          id,
          updateTask,
        })
      )
  }
  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo
            key={todo?.id}
            id={todo?.id}
            name={todo?.name}
            priority={todo?.priority}
            completed={todo?.completed}
            handleDelete={handleDelete}
            update={handleUpdate}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue='Medium' value={priority} onChange={handlePriorityChange}>
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
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
