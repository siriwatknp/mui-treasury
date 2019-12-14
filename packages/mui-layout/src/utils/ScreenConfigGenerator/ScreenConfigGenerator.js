import AddOnsGenerator from '../ConfigGenerator/AddOnsGenerator';
import ConfigGenerator from '../ConfigGenerator';

export default () => {
  const addOns = AddOnsGenerator();
  const allScreens = {};
  return {
    addOns,
    get: () => ({
      ...addOns.get(),
      ...Object.entries(allScreens).reduce(
        (result, [screen, config]) => ({
          ...result,
          [screen]: config.get(),
        }),
        {}
      ),
    }),
    add(screen, updater) {
      allScreens[screen] = ConfigGenerator();
      if (updater) {
        updater(allScreens[screen]);
      }
      return this;
    },
    adjust(screen, updater) {
      updater(allScreens[screen]);
      return this;
    },
    remove(screen) {
      delete allScreens[screen];
      return this;
    },
  };
};
