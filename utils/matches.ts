export const shouldRunScript = () => {
	return /^\/git\/[^/]+\/[^/]+\/pullRequests\/[^/]+/.test(location.pathname);
};
