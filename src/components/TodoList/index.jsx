import { Col, Row, Input, Button, Select, Tag } from 'antd'
import Todo from '../Todo'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from '../../redux/actions'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { todoListSelector } from '../../redux/selectors'

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [idUpdate, setIdUpdate] = useState(-1)

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

  const handleUpdate = (id, editName, editPriority) => {
    id &&
      dispatch(
        updateTodo({
          id,
          editName,
          editPriority,
        })
      )
  }

  return (
    <Row style={{ height: '100%' }}>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input
            value={todoName}
            onChange={(e) => {
              setTodoName(e.target.value)
            }}
          />
          <Select
            defaultValue='Medium'
            value={priority}
            onChange={(value) => {
              setPriority(value)
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
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo
            key={todo?.id}
            todo={todo}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            idUpdate={idUpdate}
            setIdUpdate={setIdUpdate}
          />
        ))}
      </Col>
    </Row>
  )
}
