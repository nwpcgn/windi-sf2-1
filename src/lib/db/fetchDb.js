export const fetchDb = (url) =>
		fetch(url)
			.then((r) => r.json())
			.then((d) => d)
			.catch((e) => e)

      export default fetchDb