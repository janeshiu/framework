import { Breakpoints } from '@/enums/style';
import useDimensions from '../useDimensions/useDimensions';

const useBreakpoints = () => {
	const { width } = useDimensions();

	return {
		isMobile: width && width < Breakpoints.sm,
		isTablet: width && width < Breakpoints.md,
		isNotebook: width && width < Breakpoints.lg,
		isDesktop: width && width < Breakpoints.xl,
		isDesktop_lg: width && width < Breakpoints.xxl,
	};
};

export default useBreakpoints;
