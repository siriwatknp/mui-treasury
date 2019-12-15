import { useRouter } from '../contexts/router';

const createQueryParams = location => {
  const { search = '' } = location || {};
  const params = search.replace('?', '').split('&');
  return params.reduce((result, str) => {
    const variables = str.split('=');
    return {
      ...result,
      [variables[0]]: (() => {
        try {
          return decodeURIComponent(variables[1]);
        } catch (e) {
          console.log('e', e);
        }
        return undefined;
      })(),
    };
  }, {});
};

export default () => {
  const router = useRouter();
  return createQueryParams(router.location);
};
