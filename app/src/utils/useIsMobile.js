import useWindowSize from './useWindowState';

export default function useIsMobile() {
  const { width } = useWindowSize();
  const isMobile = width <= 750;

  return isMobile;
}