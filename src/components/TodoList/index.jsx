import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row, Select } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTodo, deleteTodo, updateTodo } from '../../redux/actions'
import { todoListRemainingSelector } from '../../redux/selectors'
import Filters from '../Filters'
import Todo from '../Todo'

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [idUpdate, setIdUpdate] = useState(-1)

  // const todoList = useSelector((state) => state.todoList)
  const todoList = useSelector(todoListRemainingSelector)

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
  const onAddTodo = (event) => {
    if (event.key === 'Enter' && todoName) {
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
  }
  return (
    <Row style={{ height: '80%' }}>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
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
          <Input
            value={todoName}
            onChange={(e) => {
              setTodoName(e.target.value)
            }}
            placeholder='Add a new task'
            onKeyPress={onAddTodo}
          />

          {/* <Button type='primary' onClick={handleAddButtonClick}>
            <PlusOutlined />
          </Button> */}
        </Input.Group>
      </Col>
      <Filters />
      <Col
        span={24}
        style={{ height: 'calc(100% - 40px)', overflowY: 'auto', marginTop: '10px' }}
        className='scroll'
      >
        <div className='scroll'>
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
        </div>
      </Col>
    </Row>
  )
}
