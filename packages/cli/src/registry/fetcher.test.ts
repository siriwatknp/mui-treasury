import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { clearCache, fetchRegistryItem, fetchRegistryItemByUrl } from "./fetcher";

const REGISTRY_URL = "https://test-registry.com/r";

const mockItem = {
  name: "test-component",
  type: "registry:item",
  title: "Test Component",
  dependencies: ["@mui/material"],
  registryDependencies: [],
  files: [
    {
      path: "components/test-component/test-component.tsx",
      target: "src/mui-treasury/components/test-component/test-component.tsx",
      content: 'export const TestComponent = () => <div>Test</div>;',
      type: "registry:item",
    },
    {
      path: "components/test-component/index.ts",
      target: "src/mui-treasury/components/test-component/index.ts",
      content: "export * from './test-component';",
      type: "registry:item",
    },
  ],
};

const server = setupServer(
  http.get(`${REGISTRY_URL}/test-component.json`, () => {
    return HttpResponse.json(mockItem);
  }),
  http.get(`${REGISTRY_URL}/not-found.json`, () => {
    return new HttpResponse(null, { status: 404 });
  }),
  http.get(`${REGISTRY_URL}/server-error.json`, () => {
    return new HttpResponse(null, { status: 500 });
  }),
  http.get(`${REGISTRY_URL}/invalid-json.json`, () => {
    return HttpResponse.json({ invalid: true });
  }),
  http.get("https://external.com/r/external-component.json", () => {
    return HttpResponse.json({ ...mockItem, name: "external-component" });
  }),
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  clearCache();
});
afterAll(() => server.close());

describe("fetchRegistryItem", () => {
  it("fetches and parses a registry item", async () => {
    const item = await fetchRegistryItem("test-component", REGISTRY_URL);

    expect(item.name).toBe("test-component");
    expect(item.dependencies).toEqual(["@mui/material"]);
    expect(item.files).toHaveLength(2);
    expect(item.files[0].target).toContain("src/mui-treasury/components/");
  });

  it("throws RegistryNotFoundError for 404", async () => {
    await expect(
      fetchRegistryItem("not-found", REGISTRY_URL),
    ).rejects.toThrow("was not found");
  });

  it("throws RegistryFetchError for 500", async () => {
    await expect(
      fetchRegistryItem("server-error", REGISTRY_URL),
    ).rejects.toThrow("Failed to fetch from registry (500)");
  });

  it("throws RegistryParseError for invalid schema", async () => {
    await expect(
      fetchRegistryItem("invalid-json", REGISTRY_URL),
    ).rejects.toThrow("Failed to parse registry item");
  });

  it("caches repeated requests", async () => {
    let fetchCount = 0;
    server.use(
      http.get(`${REGISTRY_URL}/cached.json`, () => {
        fetchCount++;
        return HttpResponse.json({ ...mockItem, name: "cached" });
      }),
    );

    const [result1, result2] = await Promise.all([
      fetchRegistryItem("cached", REGISTRY_URL),
      fetchRegistryItem("cached", REGISTRY_URL),
    ]);

    expect(result1.name).toBe("cached");
    expect(result2.name).toBe("cached");
    expect(fetchCount).toBe(1);
  });
});

describe("fetchRegistryItemByUrl", () => {
  it("fetches by full URL", async () => {
    const item = await fetchRegistryItemByUrl(
      "https://external.com/r/external-component.json",
    );

    expect(item.name).toBe("external-component");
  });

  it("caches by URL", async () => {
    const item1 = await fetchRegistryItemByUrl(
      "https://external.com/r/external-component.json",
    );
    const item2 = await fetchRegistryItemByUrl(
      "https://external.com/r/external-component.json",
    );

    expect(item1).toBe(item2);
  });
});
