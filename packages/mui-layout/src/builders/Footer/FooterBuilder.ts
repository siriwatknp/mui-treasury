import { IFooterBuilder } from "../../types"

export default (): IFooterBuilder => {
  let id: string
  return {
    create: function(footerId: string) {
      id = footerId
    },
    getData: () => ({
      id,
    }),
  }
}
