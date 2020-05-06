const isNil = <T>(value: T): value is null | undefined => {
  return value === null || typeof value === "undefined"
}

export default isNil;
