'use strict';

module.exports = {
  BigInt: true,
  AbortController: true,
  AbortSignal: true,
  DOMException: true,
  fetch: true,
  console: true,
  process: true,
  Buffer: true,
  Blob: true,
  TextDecoder: true,
  TextEncoder: true,
  WebSocket: true,
  window: true,
  setTimeout: true,
  setImmediate: true,
  setInterval: true,
  clearTimeout: true,
  clearImmediate: true,
  clearInterval: true,
  __dirname: true,
  __filename: true,
  Event: true,
  EventTarget: true,
  MessageChannel: true,
  MessageEvent: true,
  MessagePort: true,
  FormData: true,
  Headers: true,
  Response: true,
  Request: true,
  ByteLengthQueuingStrategy: true,
  URL: true,
  URLSearchParams: true,
  WebAssembly: true,
  queueMicrotask: true,
  BroadcastChannel: true,
  CountQueuingStrategy: true,
};

try {
  assign(module.exports, {
    //? Bunjs Not supported
    CompressionStream,
    DecompressionStream,
    TextDecoderStream,
    TextEncoderStream,
  });

  assign(module.exports, {
    //? Node18 (e)
    TransformStream,
    TransformStreamDefaultController,
    WritableStream,
    WritableStreamDefaultController,
    WritableStreamDefaultWriter,
    ReadableByteStreamController,
    ReadableStream,
    ReadableStreamBYOBReader,
    ReadableStreamBYOBRequest,
    ReadableStreamDefaultController,
    ReadableStreamDefaultReader,
  });

  assign(module.exports, {
    //? Node19
    SubtleCrypto,
    PerformanceEntry,
    PerformanceMark,
    PerformanceMeasure,
    PerformanceObserver,
    PerformanceObserverEntryList,
    PerformanceResourceTiming,
    performance,
    crypto,
    Crypto,
    CryptoKey,
    CustomEvent,
  });

  assign(module.exports, { File }); //? Node20
  assign(module.exports, { Navigator, navigator, WebSocket }); //? Node21
} catch {}

function assign(target, value) {
  const globals = Object.keys(value);
  const parsed = globals.reduce((acc, k) => ((acc[k] = true), acc), {});
  return Object.assign(target, parsed);
}
