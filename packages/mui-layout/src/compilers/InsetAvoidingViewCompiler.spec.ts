import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import InsetSidebarBuilder from '../builders/InsetSidebar';
import InsetAvoidingViewCompiler from './InsetAvoidingViewCompiler';

const breakpoints = createBreakpoints({});

describe('InsetAvoidingViewModel', () => {
  it('return correct styles for fixed inset sidebar', () => {
    const builder = InsetSidebarBuilder();

    builder
      .create('primarySidebar', { anchor: 'right' })
      .registerFixedConfig('md', {
        width: 256,
      });

    const compiler = InsetAvoidingViewCompiler(builder.getData());
    expect(compiler.getMediaQueryStyle(breakpoints)).toStrictEqual({
      '@media (min-width:960px) and (max-width:1279.95px)': {
        marginRight: 256,
      },
      '@media (min-width:1280px) and (max-width:1919.95px)': {
        marginRight: 256,
      },
      '@media (min-width:1920px)': {
        marginRight: 256,
      },
    });
  });
  it('mixed anchor return correct styles', () => {
    const builder = InsetSidebarBuilder();

    builder
      .create('primarySidebar', { anchor: 'left' })
      .registerFixedConfig('sm', {
        width: 256,
      })
      .registerFixedConfig('lg', {
        width: 300,
      });

    builder
      .create('secondarySidebar', { anchor: 'right' })
      .registerFixedConfig('sm', {
        width: '5rem',
      })
      .registerStickyConfig('lg', {
        width: 256,
        top: 0,
      });

    const compiler = InsetAvoidingViewCompiler(builder.getData());
    expect(compiler.getMediaQueryStyle(breakpoints)).toStrictEqual({
      '@media (min-width:1280px) and (max-width:1919.95px)': {
        marginLeft: 300,
      },
      '@media (min-width:1920px)': {
        marginLeft: 300,
      },
      '@media (min-width:600px) and (max-width:959.95px)': {
        marginLeft: 256,
        marginRight: '5rem',
      },
      '@media (min-width:960px) and (max-width:1279.95px)': {
        marginLeft: 256,
        marginRight: '5rem',
      },
    });
  });
  it('return nothing if hidden', () => {
    const builder = InsetSidebarBuilder();

    builder
      .create('primarySidebar', { anchor: 'right' })
      .registerFixedConfig('md', {
        width: 256,
      });
    builder.hide('primarySidebar', true);

    const compiler = InsetAvoidingViewCompiler(builder.getData());
    expect(compiler.getMediaQueryStyle(breakpoints)).toStrictEqual({
      '@media (min-width:960px) and (max-width:1279.95px)': {},
      '@media (min-width:1280px) and (max-width:1919.95px)': {},
      '@media (min-width:1920px)': {},
    });
  });
});
