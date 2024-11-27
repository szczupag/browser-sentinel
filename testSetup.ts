import { vi } from 'vitest'

interface ChromeMock {
  runtime: {
    onMessage: {
      addListener: ReturnType<typeof vi.fn>
      removeListener: ReturnType<typeof vi.fn>
    }
    getURL: ReturnType<typeof vi.fn>
    getContexts: ReturnType<typeof vi.fn>
  }
  storage: {
    local: {
      set: ReturnType<typeof vi.fn>
      get: ReturnType<typeof vi.fn>
      remove: ReturnType<typeof vi.fn>
      onChanged: {
        addListener: ReturnType<typeof vi.fn>
        removeListener: ReturnType<typeof vi.fn>
      }
    }
  }
  tabs: {
    query: ReturnType<typeof vi.fn>
    onRemoved: {
      addListener: ReturnType<typeof vi.fn>
      removeListener: ReturnType<typeof vi.fn>
    }
  }
}

const mockChromeApi: ChromeMock = {
  runtime: {
    onMessage: {
      addListener: vi.fn(),
      removeListener: vi.fn(),
    },
    getURL: vi.fn(),
    getContexts: vi.fn(() => Promise.resolve([])),
  },
  storage: {
    local: {
      set: vi.fn(() => Promise.resolve()),
      get: vi.fn(() => Promise.resolve({ displayWarnings: true })),
      remove: vi.fn(() => Promise.resolve()),
      onChanged: {
        addListener: vi.fn(),
        removeListener: vi.fn(),
      },
    },
  },
  tabs: {
    query: vi.fn(() => Promise.resolve([{ id: 123 }])),
    onRemoved: {
      addListener: vi.fn(),
      removeListener: vi.fn(),
    },
  },
}

declare global {
  var chrome: ChromeMock
}

global.chrome = mockChromeApi
