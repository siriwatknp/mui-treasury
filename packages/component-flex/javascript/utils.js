let isSupported;
// https://ishadeed.com/article/flexbox-gap/
export function checkFlexGap() {
  // Use the cached value if it has been defined
  if (isSupported !== undefined) {
    return isSupported;
  }
  if (typeof document !== "undefined") {
    // create flex container with row-gap set
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
    // create two, elements inside it
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
    // append to the DOM (needed to obtain scrollHeight)
    document.body.appendChild(flex);
    isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
    if (flex.parentNode) {
      flex.parentNode.removeChild(flex);
    }
    return isSupported;
  }
}
function halveValue(value, negative) {
  if (typeof value === "number") {
    return (Number(value) * (negative ? -1 : 1)) / 2;
  }
  if (typeof value === "string") {
    const math = value.match(/(?<value>[0-9]+)(?<unit>.*)/) || {
      groups: { value: "", unit: "" },
    };
    return `${negative ? "-" : ""}${Number(math.groups?.value) / 2}${
      math.groups?.unit
    }`;
  }
  return value;
}
export const halveGap = (gap, negative) => {
  if (!gap) return gap;
  if (typeof gap === "number" || typeof gap === "string") {
    return halveValue(gap, negative);
  }
  if (Array.isArray(gap)) {
    return gap.map((value) => halveValue(value, negative));
  }
  return Object.entries(gap).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: halveValue(value, negative),
    }),
    {}
  );
};
