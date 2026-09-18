import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function avatarUploadPlugin(): Plugin {
  return {
    name: 'avatar-upload-plugin',
    configureServer(server) {
      server.middlewares.use('/api/upload-avatar', (req, res) => {
        if (req.method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
          req.on('end', () => {
            try {
              const raw = Buffer.concat(chunks);
              let buffer: Buffer;
              const textSample = raw.toString('utf8', 0, 100);
              if (textSample.includes('base64,')) {
                const fullStr = raw.toString('utf8');
                const base64Data = fullStr.split('base64,')[1].replace(/["'}\s]/g, '');
                buffer = Buffer.from(base64Data, 'base64');
              } else if (textSample.startsWith('{') && textSample.includes('image')) {
                const parsed = JSON.parse(raw.toString('utf8'));
                const imgStr = parsed.image || parsed.data || '';
                const base64Data = imgStr.includes('base64,') ? imgStr.split('base64,')[1] : imgStr;
                buffer = Buffer.from(base64Data, 'base64');
              } else {
                buffer = raw;
              }

              const targetPublic = path.resolve(process.cwd(), 'public/images/osama-ayman.jpg');
              fs.writeFileSync(targetPublic, buffer);
              const distImages = path.resolve(process.cwd(), 'dist/images');
              if (fs.existsSync(distImages)) {
                fs.writeFileSync(path.resolve(distImages, 'osama-ayman.jpg'), buffer);
              }
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err?.message || String(err) }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), avatarUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
