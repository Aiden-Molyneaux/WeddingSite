import useWindowSize from './useWindowState.js';

export default function useIsMobile() {
  const { width } = useWindowSize();
  const isMobile = width <= 750;

  return isMobile;
}