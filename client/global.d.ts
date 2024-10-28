import { Options as PackageOptions } from '@hey-api/client-fetch';

declare global {
  type Options<T = unknown, R extends boolean = true> = PackageOptions<T, R>;
}

export {};
