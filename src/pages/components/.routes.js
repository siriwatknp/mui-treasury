import ButtonPage from 'pages/components/ButtonPage';
import CardPage from 'pages/components/CardPage';
import TabsPage from 'pages/components/TabsPage';
import InputPage from 'pages/components/InputPage';
import TextFieldPage from 'pages/components/TextFieldPage';
import LayoutPage from 'pages/components/LayoutPage';
import ChatPage from 'pages/components/ChatPage';
import CarouselPage from 'pages/components/CarouselPage';
import SlidePage from 'pages/components/SlidePage';
import ArrowPage from 'pages/components/ArrowPage';
import IndicatorPage from 'pages/components/IndicatorPage';
import TagPage from 'pages/components/TagPage';

/**
 * id: [String] optional
 * path: [String] must be unique from other paths
 * primaryText: [String] text in the navigator of the site
 * Page: [React Component] a page that will show in this route
 */
export default [
  {
    id: 'button',
    path: '/components/button',
    primaryText: 'Button',
    secondaryText: `${ButtonPage.components.length} items`,
    Page: ButtonPage,
  },
  {
    id: 'card',
    path: '/components/card',
    primaryText: 'Card',
    secondaryText: `${CardPage.components.length} items`,
    Page: CardPage,
  },
  {
    id: 'carousel',
    path: '/components/carousel',
    primaryText: 'Carousel',
    secondaryText: `${CarouselPage.components.length} items`,
    Page: CarouselPage,
    children: [
      {
        id: 'slide',
        path: '/components/carousel/slide',
        primaryText: 'Slide',
        secondaryText: `${SlidePage.components.length} items`,
        Page: SlidePage,
      },
      {
        id: 'arrow',
        path: '/components/carousel/arrow',
        primaryText: 'Arrow',
        secondaryText: `${ArrowPage.components.length} items`,
        Page: ArrowPage,
      },
      {
        id: 'indicator',
        path: '/components/carousel/indicator',
        primaryText: 'Indicator',
        secondaryText: `${IndicatorPage.components.length} items`,
        Page: IndicatorPage,
      },
    ],
  },
  {
    id: 'chat',
    path: '/components/chat',
    primaryText: 'Chat',
    secondaryText: `${ChatPage.components.length} items`,
    Page: ChatPage,
  },
  {
    id: 'inputs',
    path: '/components/inputs',
    primaryText: 'Input',
    secondaryText: `${InputPage.components.length} items`,
    Page: InputPage,
  },
  {
    id: 'layout',
    path: '/components/layout',
    primaryText: 'Layout',
    // secondaryText: `${LayoutPage.components.length} items`,
    Page: LayoutPage,
  },
  {
    id: 'tags',
    path: '/components/tags',
    primaryText: 'Tags',
    secondaryText: `${TagPage.components.length} items`,
    Page: TagPage,
  },
  {
    id: 'tabs',
    path: '/components/tabs',
    primaryText: 'Tabs',
    secondaryText: `${TabsPage.components.length} items`,
    Page: TabsPage,
  },
  {
    id: 'text-fields',
    path: '/components/text-fields',
    primaryText: 'Text Field',
    secondaryText: `${TextFieldPage.components.length} items`,
    Page: TextFieldPage,
  },
];
