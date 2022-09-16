import '@assets/scss/styles.scss'
import TodoList from '@components/TodoList'
import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd'

const { Search } = Input
function App() {
  return (
    <div className='app__container'>
      <div className='info-container'></div>
      <div className='feature-container'>
        <Row justify='center'>
          <Col span={24}>
            <Input.Group style={{ display: 'flex' }} compact className='input-container'>
              <Input />
              <Select defaultValue='Medium'>
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
              {/* <Button type='primary'>Add</Button> */}
            </Input.Group>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App
