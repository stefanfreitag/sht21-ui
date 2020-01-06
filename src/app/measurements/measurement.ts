interface Measurement {
	/**
	 * The measured value.
	 */
	value: number;
	unit: string;
	/**
	 * Measurement was taken at this timestamp. The timezone is UTC.
	 */
	measuredAt: number;
}
