import { Breakpoints } from '@/enums/style';
import useDimensions from '../useDimensions/useDimensions';

const useBreakpoints = () => {
	const { width } = useDimensions();

	return {
		isMobile: width ? width < Breakpoints.sm : false,
		isTablet: width ? width < Breakpoints.md : false,
		isNotebook: width ? width < Breakpoints.lg : false,
		isDesktop: width ? width < Breakpoints.xl : false,
		isDesktop_lg: width ? width < Breakpoints.xxl : false,
	};
};

export default useBreakpoints;
