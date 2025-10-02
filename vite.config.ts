
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Main alias for src directory
      '@': resolve(__dirname, './src'),
      
      // Radix UI aliases without versions
      '@radix-ui/react-accordion': '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog': '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio': '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar': '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox': '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible': '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu': '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog': '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu': '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card': '@radix-ui/react-hover-card',
      '@radix-ui/react-label': '@radix-ui/react-label',
      '@radix-ui/react-menubar': '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu': '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover': '@radix-ui/react-popover',
      '@radix-ui/react-progress': '@radix-ui/react-progress',
      '@radix-ui/react-radio-group': '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area': '@radix-ui/react-scroll-area',
      '@radix-ui/react-select': '@radix-ui/react-select',
      '@radix-ui/react-separator': '@radix-ui/react-separator',
      '@radix-ui/react-slider': '@radix-ui/react-slider',
      '@radix-ui/react-slot': '@radix-ui/react-slot',
      '@radix-ui/react-switch': '@radix-ui/react-switch',
      '@radix-ui/react-tabs': '@radix-ui/react-tabs',
      '@radix-ui/react-toggle': '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group': '@radix-ui/react-toggle-group',
      '@radix-ui/react-tooltip': '@radix-ui/react-tooltip',
      
      // Other libraries
      'lucide-react': 'lucide-react',
      'class-variance-authority': 'class-variance-authority',
      'cmdk': 'cmdk',
      'embla-carousel-react': 'embla-carousel-react',
      'input-otp': 'input-otp',
      'next-themes': 'next-themes',
      'react-day-picker': 'react-day-picker',
      'react-hook-form': 'react-hook-form',
      'react-resizable-panels': 'react-resizable-panels',
      'recharts': 'recharts',
      'sonner': 'sonner',
      'vaul': 'vaul',
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});