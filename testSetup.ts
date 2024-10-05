import { vi } from 'vitest'

export const chrome = {
  runtime: {
    lastError: null,
  },
  storage: {
    sync: {
      get: vi.fn(),
      set: vi.fn(),
    },
  },
}
;(global as any).chrome = chrome
