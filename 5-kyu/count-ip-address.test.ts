import { ipsBetween } from './count-ip-address';

describe('Testing Count IP Addresses', () => {
  test('should return 1', () => {
    expect(ipsBetween('150.0.0.0', '150.0.0.1')).toStrictEqual(1);
  });
  test('should return 50', () => {
    expect(ipsBetween('10.0.0.0', '10.0.0.50')).toStrictEqual(50);
  });
  test('should return 246', () => {
    expect(ipsBetween('20.0.0.10', '20.0.1.0')).toStrictEqual(246);
  });
  test('should return 243', () => {
    expect(ipsBetween('10.11.12.13', '10.11.13.0')).toStrictEqual(243);
  });
  test('should return 256', () => {
    expect(ipsBetween('160.0.0.0', '160.0.1.0')).toStrictEqual(256);
  });
  test('should return 65536', () => {
    expect(ipsBetween('170.0.0.0', '170.1.0.0')).toStrictEqual(65536);
  });
  test('should return 65793', () => {
    expect(ipsBetween('50.0.0.0', '50.1.1.1')).toStrictEqual(65793);
  });
  test('should return 16777216', () => {
    expect(ipsBetween('180.0.0.0', '181.0.0.0')).toStrictEqual(16777216);
  });
  test('should return 67372036', () => {
    expect(ipsBetween('1.2.3.4', '5.6.7.8')).toStrictEqual(67372036);
  });
  test('should return 4294967295', () => {
    expect(ipsBetween('0.0.0.0', '255.255.255.255')).toStrictEqual(2 ** 32 - 1);
  });
});
