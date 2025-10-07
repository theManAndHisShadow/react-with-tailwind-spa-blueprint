/**
 * Returns UUID v7 string.
 * @returns string
 */
export function generateUUIDv7() {
  const timestamp = Date.now();

  const timeBuf = new Uint8Array(6);
  timeBuf[0] = (timestamp / 2**40) & 0xFF;
  timeBuf[1] = (timestamp / 2**32) & 0xFF;
  timeBuf[2] = (timestamp / 2**24) & 0xFF;
  timeBuf[3] = (timestamp / 2**16) & 0xFF;
  timeBuf[4] = (timestamp / 2**8) & 0xFF;
  timeBuf[5] = timestamp & 0xFF;

  const randBuf = crypto.getRandomValues(new Uint8Array(16));
  randBuf.set(timeBuf, 0);

  randBuf[6] = (randBuf[6] & 0x0F) | 0x70;
  randBuf[8] = (randBuf[8] & 0x3F) | 0x80;

  const hex = Array.from(randBuf)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
