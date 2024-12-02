type MovieInfoByGenre<T> = {
	[K in keyof T]: {
		name: T[K] | string;
		year: number;
		director: string;
	};
};
