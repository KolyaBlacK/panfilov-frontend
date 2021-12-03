import Vue from 'vue'
import Intersect from './intersect'

const intersectMap = new Map()

const bind = (el, binding, vnode, oldVnode) => {
  const intersect = new Intersect(vnode.context)
  intersectMap.set(el, intersect)
  intersect.bind(el, binding)
}

const unbind = (el, binding, vnode, oldVnode) => {
  const intersect = intersectMap.get(el)
  if (intersect) {
    intersect.unbind(el, binding)
  }
}

const IntersectDirective = {
  bind,
  unbind,
}

Vue.directive('intersect', IntersectDirective)
