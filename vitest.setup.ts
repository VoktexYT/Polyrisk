import { vi, beforeAll } from 'vitest';
import { TextEncoder, TextDecoder } from 'util';
import { createCanvas } from 'canvas';

// Mock Phaser3-spectorjs
// Remove error : Error: Cannot find module 'phaser3spectorjs'
vi.mock('phaser3spectorjs', () => ({}));

// Mock WebGLRenderer
// WebGL is a Browser-Specific API and These APIs are not available in a Node.js environment
// Remove error :
//      Error: Not implemented: HTMLCanvasElement.prototype.getContext
vi.mock('phaser/src/renderer/webgl/WebGLRenderer', () => ({
    WebGLRenderer: class MockWebGLRenderer {}
}));

// Canvas polyfill
// Remove : Error: Not implemented: HTMLCanvasElement.prototype.getContext
// 
global.HTMLCanvasElement = class {
    private _canvas = createCanvas(0, 0);
    getContext(type: string) {
        return type === '2d' ? this._canvas.getContext('2d') : null;
    }
} as any;

// Other polyfills
beforeAll(() => {
    Object.assign(global, {
        navigator: { userAgent: 'node.js' },
        requestAnimationFrame: (callback: Function) => setTimeout(callback, 0),
        performance: { now: () => Date.now() }
    });
});

// TextEncoder/Decoder polyfills
global.TextEncoder = TextEncoder as any;
global.TextDecoder = TextDecoder as any;