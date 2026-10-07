// browserslist names → web-features browser keys; others (samsung, opera, op_mini …) have no data there
const BROWSERS = { chrome: 'chrome', edge: 'edge', firefox: 'firefox', safari: 'safari', ios_saf: 'safari_ios', and_chr: 'chrome_android', and_ff: 'firefox_android' };

const parse = (v) => String(v).replace(/[^\d.].*$/, '').replace(/^[^\d]+/, '').split('.').map(Number);
const lower = (a, b) => {
  const [x, y] = [parse(a), parse(b)];
  for (let i = 0; i < Math.max(x.length, y.length); i += 1) {
    if ((x[i] ?? 0) !== (y[i] ?? 0)) {
      return (x[i] ?? 0) < (y[i] ?? 0);
    }
  }
  return false;
};

/** Each target browser against each web-features id: which targets block a feature (and the version it needs), which have no data. */
export async function supportOf(featureIds, browsers) {
  const { features } = await import('web-features');
  const blocking = [];
  const noData = new Set();
  for (const id of featureIds) {
    const feature = features[id];
    if (!feature) {
      throw new Error(`unknown web-features id: ${id}`);
    }
    const support = feature.status?.support ?? {};
    for (const target of browsers) {
      const [name, range] = target.split(' ');
      const key = BROWSERS[name];
      if (!key) {
        noData.add(name);
        continue;
      }
      // browserslist gives ranges for some (ios_saf 15.2-15.3): the lowest is what must work
      const version = range.split('-')[0];
      if (!support[key]) {
        blocking.push({ browser: target, feature: id, needs: 'not supported' });
      } else if (lower(version, support[key])) {
        blocking.push({ browser: target, feature: id, needs: `${name} ${support[key].replace(/^[^\d]+/, '')}` });
      }
    }
  }
  return { ok: !blocking.length, blocking, noData: [...noData] };
}
