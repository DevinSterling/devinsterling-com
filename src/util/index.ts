function wrapIndex(i: number, len: number): number {
  return ((i % len) + len) % len;
}

export { wrapIndex };