import { vitest, it, describe, expect, beforeEach } from "vitest";
import { parsePromised, onReject, handlePromise } from '../exercises/e7.js';
import validJson from '../data/db.json';
const invalidJsonString = 'This is invalid json that will trigger an error';
const validJsonString = JSON.stringify(validJson);

describe('parsePromised', () => {
  it('Promise function should exist as a function', () => {
    expect(parsePromised).toBeInstanceOf(Object);
  });

  it('Promise function return value constructor should have a name of Promise', () => {
    expect(parsePromised(validJsonString).constructor.name).toEqual('Promise');
  });

  it('Promise function should throw an error when rejected', async () => {
    //parsePromised(invalidJsonString).catch(e => e);
    await expect(parsePromised(invalidJsonString)).rejects.toThrow(new Error('Unexpected token T in JSON at position 0'));
  });
})

describe('onReject function test', () => {
  it('Should log the error message Test 1', () => {
    const logSpy = vitest.spyOn(console, "log");
    onReject(new Error('OH NOES'));
    expect(logSpy).toBeCalledWith('OH NOES');
  });

  it('Shoule log the error message Test 2', () => {
    const logSpy = vitest.spyOn(console, "log");
    onReject(new Error('REJECTED'));
    expect(logSpy).toBeCalledWith('REJECTED');
  });
});

describe("handlePromise", () => {
  it("should exist", () => {
    expect(handlePromise).toBeInstanceOf(Function);
  });

  it('should return undefined if I pass in a promise that rejects', async () => {
    expect(await handlePromise(parsePromised(invalidJsonString))).toBe(undefined);
  });

  it('should log the error message if I pass in a promise that rejects', async () => {
    const logSpy = vitest.spyOn(console, "log");
    await handlePromise(parsePromised(invalidJsonString));
    expect(logSpy).toBeCalledWith('Unexpected token T in JSON at position 0');
  });

  it("should return a value that resolves to the resolved value of the promise I pass in", async () => {
    expect(
      await handlePromise(
        Promise.resolve("yoyoyo, I'm jon H and I'm ready to go")
      )
    ).toBe("yoyoyo, I'm jon H and I'm ready to go");
  });
});