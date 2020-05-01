import isNil from "./isNil"

type Empty = ""

const isNilOrEmpty = <T>(value: T | ""): value is Empty => {
  return isNil(value) || value === ""
}

export default isNilOrEmpty
