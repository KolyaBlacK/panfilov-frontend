export default class Intersect {
  constructor() {
    this.interSectionObserver = null
    this.el = null
    this.options = {}
    this.callback = null
  }

  bind(el, binding) {
    const observerOptions = { ...binding.value.observerOptions }
    this.interSectionObserver = new IntersectionObserver(this.onIntersectChange.bind(this), observerOptions)
    this.interSectionObserver.observe(el)
    this.el = el
    this.options = {
      in: binding.value.in,
      out: binding.value.out,
      disposeWhen: binding.value.disposeWhen,
    }
    this.callback = binding.value.onChange
  }

  unbind(el) {
    if (this.interSectionObserver) {
      this.interSectionObserver.unobserve(el)
    }
  }

  onIntersectChange(entries) {
    const entry = entries[0]
    if (!entry) return

    if (entry.isIntersecting) {
      if (this.options.in) this.addStyleOptions(this.options.in)
      if (this.options.out) this.removeStyleOptions(this.options.out)
    } else {
      if (this.options.in) this.removeStyleOptions(this.options.in)
      if (this.options.out) this.addStyleOptions(this.options.out)
    }

    if (this.callback) {
      this.callback(entry.isIntersecting, this.el, this.options)
    }

    const shouldDispose = entry.isIntersecting === (this.options.disposeWhen || true)
    if (shouldDispose) this.unbind(this.el)
  }

  addStyleOptions(options) {
    if (Array.isArray(options)) {
      this.el.classList.add(...options)
    } else {
      for (const prop of Object.keys(options)) {
        this.el.style[prop] = options[prop]
      }
    }
  }

  removeStyleOptions(options) {
    if (Array.isArray(options)) {
      this.el.classList.remove(...options)
    } else {
      for (const prop of Object.keys(options)) {
        this.el.style.removeProperty(prop)
      }
    }
  }
}
