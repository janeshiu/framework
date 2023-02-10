import { Breakpoints } from '@/enums/style';
import useWindowDimensions from './useDimensions';

const useBreakpoints = () => {
	const { width } = useWindowDimensions();

	return {
		isMobile: width && width < Breakpoints.sm,
		isTablet: width && width < Breakpoints.md,
		isNotebook: width && width < Breakpoints.lg,
		isDesktop: width && width < Breakpoints.xl,
		isDesktop_lg: width && width < Breakpoints['2xl'],
	};
};

export default useBreakpoints;
