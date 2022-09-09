import { Col, Input, Row, Select } from 'antd'
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
  const [isExist, setIsExist] = useState(false)

  // const todoList = useSelector((state) => state.todoList)
  const todoList = useSelector(todoListRemainingSelector)
  console.log('🚀 ~ file: index.jsx ~ line 18 ~ TodoList ~ todoList', todoList)

  // dispatch là 1 function
  const dispatch = useDispatch()

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

  const handleAddButtonClick = (event) => {
    const isFound = todoList.some((todo) => todo.name === todoName)
    console.log('🚀 ~ file: index.jsx ~ line 46 ~ handleAddButtonClick ~ isFound', isFound)
    setIsExist(isFound)
    if (event.key === 'Enter' && todoName && !isFound) {
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
            onKeyPress={handleAddButtonClick}
          />

          {/* <Button type='primary' onClick={handleAddButtonClick}>
            <PlusOutlined />
          </Button> */}
        </Input.Group>
        {isExist ? (
          <p className='error' style={{ marginBottom: '0' }}>
            A task already exists
          </p>
        ) : (
          ''
        )}
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
