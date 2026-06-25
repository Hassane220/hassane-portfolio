import '@testing-library/jest-dom'
import { vi } from 'vitest'

vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn().mockResolvedValue({ status: 200, text: 'OK' }) },
}))

global.IntersectionObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})

Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: () => ({
    scale: () => {},
    clearRect: () => {},
    beginPath: () => {},
    ellipse: () => {},
    arc: () => {},
    fill: () => {},
    stroke: () => {},
    moveTo: () => {},
    lineTo: () => {},
  }),
})

global.requestAnimationFrame = (cb) => setTimeout(cb, 16)
global.cancelAnimationFrame = (id) => clearTimeout(id)
global.fetch = vi.fn().mockResolvedValue({ ok: true })
