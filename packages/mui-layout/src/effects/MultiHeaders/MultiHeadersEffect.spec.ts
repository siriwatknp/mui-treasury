import MultiHeadersEffect from './MultiHeadersEffect';

describe('Effect | MultiHeaderEffect', function() {
  describe('one header', () => {
    const headerConfigs = [
      {
        position: 'relative' as const,
        initialHeight: 64,
        clipped: true
      }
    ]
    const interaction = MultiHeadersEffect(headerConfigs).getSidebarInteraction('primarySidebar')
    it('should provide correct value', () => {
      expect(interaction).toEqual({
        isClipped: true,
        clippedHeight: '64px',
        relativeHeight: '64px',
        nonRelativeHeight: 0,
        maxHeightFromTop: 0,
        nonRelativeOffset: 'calc(0px - 0px)',
        maxOffset: 'calc(64px + calc(0px - 0px))',
      })
    })
  })

  describe('Complex headers', () => {
    const headerConfigs = [
      {
        position: 'fixed' as const,
        top: 32,
        clipped: true,
        layer: 1,
        initialHeight: 64,
      },
      {
        position: 'fixed' as const,
        clipped: true,
        initialHeight: 32,
        layer: 1,
      },
      {
        position: 'relative' as const,
        initialHeight: 56,
        clipped: {
          primarySidebar: true,
          tertiary: true,
        },
      }
    ]
    const interaction = MultiHeadersEffect(headerConfigs).getSidebarInteraction('primarySidebar')
    it('isClipped is provided', () => {
      expect(interaction.isClipped).toBeTruthy()
    })

    it('clippedHeight is the sum of clipped header\'s height', () => {
      expect(interaction.clippedHeight).toEqual('calc(64px + 32px + 56px)')
    })

    it('relativeHeight is the sum of relative headers', () => {
      expect(interaction.relativeHeight).toEqual('56px')
    })

    it('nonRelativeHeight is the sum of non-relative headers', () => {
      expect(interaction.nonRelativeHeight).toEqual('calc(64px + 32px)')
    })

    it('maxHeightFromTop is the maximum height (top + initialHeight) among non-relative headers', () => {
      expect(interaction.maxHeightFromTop).toEqual(`max(calc(32px + 64px), calc(32px))`)
    })

    it('nonRelativeOffset is the difference of total height and maxHeightFromTop among non-relative headers', () => {
      expect(interaction.nonRelativeOffset).toEqual(`calc(calc(64px + 32px) - max(calc(32px + 64px), calc(32px)))`)
    })

    it('maxOffset is the maximum that Offset can have', () => {
      expect(interaction.maxOffset).toEqual(`calc(56px + calc(calc(64px + 32px) - max(calc(32px + 64px), calc(32px))))`)
    })
  })
});
