import { getFieldById } from './getFieldById'

describe('Utils', () => {
  it('getFieldById', () => {
    const dataById = {
      test: {
        id: 'test',
        props: {
          name: 'jun',
          gender: 'male'
        },
        rpsConfig: {
          xs: {
            width: 200,
            collapsible: true,
          }
        }
      }
    }
    const propsById = getFieldById(dataById, 'props')
    expect(propsById).toStrictEqual({
      test: {
        name: 'jun',
        gender: 'male'
      }
    })

    const rpsConfigById = getFieldById(dataById, 'rpsConfig')
    expect(rpsConfigById).toStrictEqual({
      test: {
        xs: {
          width: 200,
          collapsible: true,
        }
      }
    })
  })
})
