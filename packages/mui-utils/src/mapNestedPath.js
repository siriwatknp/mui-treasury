export default menus => {
  const result = {};
  const traverseItems = (items, parents) => {
    items.forEach(item => {
      const { key, subMenus } = item;

      parents.forEach(parent => {
        result[parent] = [...(result[parent] || []), key];
      });

      if (subMenus) {
        traverseItems(subMenus, [...parents, key]);
      } else {
        result[key] = [];
      }
    });
  };

  traverseItems(menus, []);

  return result;
};
