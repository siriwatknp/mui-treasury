export default function memoTheme(styleFn) {
  return function styleFromTheme(props) {
    return styleFn({ theme: props.theme });
  };
}
