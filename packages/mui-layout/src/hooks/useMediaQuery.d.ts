interface Options {
  defaultMatches?: boolean;
  noSsr?: boolean;
  ssrMatchMedia?: Window['matchMedia'];
}

declare function useMediaQuery(queryInput: string, options?: Options): boolean;

export default useMediaQuery;
