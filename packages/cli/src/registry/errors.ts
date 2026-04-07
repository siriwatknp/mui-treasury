export class RegistryError extends Error {
  public readonly suggestion?: string;

  constructor(message: string, options?: { suggestion?: string }) {
    super(message);
    this.name = "RegistryError";
    this.suggestion = options?.suggestion;
  }
}

export class RegistryNotFoundError extends RegistryError {
  constructor(public readonly url: string) {
    super(`The item at ${url} was not found.`, {
      suggestion:
        "Check if the item name is correct and the registry URL is accessible.",
    });
    this.name = "RegistryNotFoundError";
  }
}

export class RegistryFetchError extends RegistryError {
  constructor(
    public readonly url: string,
    statusCode?: number,
  ) {
    super(
      statusCode
        ? `Failed to fetch from registry (${statusCode}): ${url}`
        : `Failed to fetch from registry: ${url}`,
      { suggestion: "Check your network connection and try again." },
    );
    this.name = "RegistryFetchError";
  }
}

export class RegistryParseError extends RegistryError {
  constructor(
    public readonly url: string,
    cause?: unknown,
  ) {
    super(`Failed to parse registry item: ${url}`, {
      suggestion: "The registry item may have an invalid format.",
    });
    this.name = "RegistryParseError";
  }
}
