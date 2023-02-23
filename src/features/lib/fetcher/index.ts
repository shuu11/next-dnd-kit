// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetcher(url: string, init?: RequestInit): Promise<any> {
	return fetch(url, init).then((res) => res.json())
}

export { fetcher }
