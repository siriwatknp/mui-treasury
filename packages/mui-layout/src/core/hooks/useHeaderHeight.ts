import { useWindow } from '../Context';

export const useHeaderHeight = (headerId: string) => {
  const { iDocument } = useWindow();
  const headerElm = iDocument
    ? iDocument.querySelector(`[mui-layout='${headerId}']`)
    : null;
  if (headerElm) {
    return headerElm.clientHeight;
  }
  return 0;
};

export default useHeaderHeight;
