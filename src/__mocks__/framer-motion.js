import { createElement } from 'react'

const TAGS = [
  'div', 'section', 'span', 'p', 'h1', 'h2', 'h3', 'h4',
  'a', 'button', 'ul', 'li', 'article', 'header', 'footer', 'nav', 'main',
]

export const motion = new Proxy({}, {
  get: (_, tag) => {
    const Tag = TAGS.includes(String(tag)) ? String(tag) : 'div'
    return function MotionEl({ children, initial, animate, exit, whileInView, viewport, transition, ...props }) {
      return createElement(Tag, props, children)
    }
  },
})

export const AnimatePresence = ({ children }) => children
