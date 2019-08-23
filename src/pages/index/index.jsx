import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import { View } from '@tarojs/components'
import Heros from '../../components/heros/heros'
import Tools from '../../components/tools/tools'
import Skills from '../../components/skills/skills'
import Main from '../../components/main/main'
import 'taro-ui/dist/style/index.scss'
import './index.less'

const tabList = [
  { title: '英雄', image: 'https://res.mizhidun.cn/picture/c5150712-9d07-48e4-9060-0cad2159c102.png', selectedImage: 'https://res.mizhidun.cn/picture/0b64b280-728e-4e8b-aeb5-5ef3115ce30b.png'},
  { title: '道具', image: 'https://res.mizhidun.cn/picture/1bb8ff0f-a6b6-473c-856d-adfdcc8ea23e.png', selectedImage: 'https://res.mizhidun.cn/picture/ef2ab649-cea8-4ce3-b0b1-7c3c7ac36205.png'},
  { title: '技能', image: 'https://res.mizhidun.cn/picture/4984bcf8-80bd-4cf7-b38a-5cb64f0ed447.png', selectedImage: 'https://res.mizhidun.cn/picture/714e1a50-534c-415e-b7fd-12625da4915a.png'},
  { title: '我的', image: 'https://res.mizhidun.cn/picture/804f8a6d-5a2f-4302-bfb5-5dd37a21d8ab.png', selectedImage: 'https://res.mizhidun.cn/picture/5dc38d94-deed-4454-a58f-a23f99c8703f.png'}
]

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount () { }

  componentDidMount () {
    Taro.setNavigationBarTitle({
      title: tabList[this.state.current].title
    })
  }

  componentDidUpdate () {
    Taro.setNavigationBarTitle({
      title: tabList[this.state.current].title
    })
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        {this.state.current===0 && <Heros />}
        {this.state.current===1 && <Tools />}
        {this.state.current===2 && <Skills />}
        {this.state.current===3 && <Main />}
        <View className='tabbar'>
          <AtTabBar fixed tabList={tabList} onClick={this.handleClick} current={this.state.current} />
        </View>
      </View>
    )
  }
}
