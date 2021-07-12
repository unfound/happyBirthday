import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default ({ mode }) => {
  if (mode === 'development') {
    return defineConfig({
      plugins: [reactRefresh()]
    })
  }
  return defineConfig({
    plugins: [reactRefresh()],
    base: '/happyBirthdayForYou/',
    build: {
      outDir: 'happyBirthdayForYou'
    }
  })
}
