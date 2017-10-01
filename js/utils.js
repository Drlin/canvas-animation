/* 一些基础函数 */

let Utils = {
  getOffset(ele) {
    let mouse = {x: 0, y: 0}
    ele.addEventListener('mousemove', (e) => {
      mouse = Object.assign(mouse, this.eventWrapper(e))
    })
    return mouse
  },

  eventWrapper(e) {
    let { pageX, pageY, target } = e
    let { left, top } = target.getBoundingClientRect()
    return {
      x: pageX - left,
      y: pageY - top,
    }
  },
}

