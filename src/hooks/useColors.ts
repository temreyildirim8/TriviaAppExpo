import { useMemo } from 'react';
import colors from '../utils/colors';

const useColors = () => {
  return useMemo(() => colors, []);
};

export default useColors;
