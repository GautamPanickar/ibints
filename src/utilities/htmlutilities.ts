class HTMLUtilities {
	// Returns a unique key.
	public static get UID(): string{
		return Math.random().toString(36).substr(2, 9);
	}
}

export = HTMLUtilities;