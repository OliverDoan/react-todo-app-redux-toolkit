import '@assets/scss/styles.scss'
import TodoList from '@components/TodoList'
import { Typography } from 'antd'
const { Title } = Typography

function App() {
  return (
    <div
      style={{
        width: 500,

        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 30,

        height: '80vh',
      }}
    >
      <TodoList />
    </div>
  )
}

export default App
