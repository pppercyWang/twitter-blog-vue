import Vue from 'vue'
import MessageTmp from './Message.vue'
const MessageConstruct = Vue.extend(MessageTmp) // 创建的是一个组件构造器，不是实例
const Message = {
  install: (options, type, duration) => {
    if (options === undefined || options === null) {
      options = {
        content: ''
      }
    } else if (typeof options === 'string' || typeof options === 'number') {
      options = {
        content: options
      }
      if (type != undefined && options != null) {
        options.type = type;
      }
    }
    let instance = new MessageConstruct({
      data: options
    }).$mount()
    document.body.appendChild(instance.$el) // 添加dom元素
    Vue.nextTick(() => { // dom元素渲染完成后执行回调
      instance.visible = true
    })
  }
}
Vue.prototype.$message = Message.install;
['success', 'error'].forEach(type => {
  Vue.prototype.$message[type] = (content) => {
    return Vue.prototype.$message(content, type)
  }
})
export default Message