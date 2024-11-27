import { vi } from 'vitest'

interface ChromeMock {
  storage: {
    local: {
      set: ReturnType<typeof vi.fn>
      get: ReturnType<typeof vi.fn>
      onChanged: {
        addListener: ReturnType<typeof vi.fn>
        removeListener: ReturnType<typeof vi.fn>
      }
    }
  }
  tabs: {
    query: ReturnType<typeof vi.fn>
  }
}

const mockChromeApi: ChromeMock = {
  storage: {
    local: {
      set: vi.fn(() => Promise.resolve()),
      get: vi.fn(() => Promise.resolve({ displayWarnings: true })),
      onChanged: {
        addListener: vi.fn(),
        removeListener: vi.fn(),
      },
    },
  },
  tabs: {
    query: vi.fn(() => Promise.resolve([{ id: 123 }])),
  },
}

declare global {
  var chrome: ChromeMock
}

global.chrome = mockChromeApi
