export default [
	await import(`./eclipse~640@2x.avif`).then((m) => m.default.src),
	await import(`./eclipse~640@1x.avif`).then((m) => m.default.src),
	await import(`./eclipse~1280@2x.avif`).then((m) => m.default.src),
	await import(`./eclipse~1280@1x.avif`).then((m) => m.default.src),
	await import(`./eclipse@2x.avif`).then((m) => m.default.src),
	await import(`./eclipse@1x.avif`).then((m) => m.default.src),
	await import(`./eclipse~640@2x.webp`).then((m) => m.default.src),
	await import(`./eclipse~640@1x.webp`).then((m) => m.default.src),
	await import(`./eclipse~1280@2x.webp`).then((m) => m.default.src),
	await import(`./eclipse~1280@1x.webp`).then((m) => m.default.src),
	await import(`./eclipse@2x.webp`).then((m) => m.default.src),
	await import(`./eclipse@1x.webp`).then((m) => m.default.src),
]
