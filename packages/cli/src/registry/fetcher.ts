import {
  RegistryFetchError,
  RegistryNotFoundError,
  RegistryParseError,
} from "@/registry/errors";
import { registryItemSchema, type RegistryItem } from "@/registry/schema";

const cache = new Map<string, Promise<RegistryItem>>();

export function clearCache() {
  cache.clear();
}

async function fetchAndParse(url: string): Promise<RegistryItem> {
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new RegistryNotFoundError(url);
    }
    throw new RegistryFetchError(url, response.status);
  }

  const json = await response.json();

  try {
    return registryItemSchema.parse(json);
  } catch (error) {
    throw new RegistryParseError(url, error);
  }
}

export async function fetchRegistryItem(
  name: string,
  registryUrl: string,
): Promise<RegistryItem> {
  const url = `${registryUrl}/${name}.json`;

  if (cache.has(url)) {
    return cache.get(url)!;
  }

  const promise = fetchAndParse(url);
  cache.set(url, promise);
  return promise;
}

export async function fetchRegistryItemByUrl(
  url: string,
): Promise<RegistryItem> {
  if (cache.has(url)) {
    return cache.get(url)!;
  }

  const promise = fetchAndParse(url);
  cache.set(url, promise);
  return promise;
}
