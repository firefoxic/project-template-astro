export default [
	await import(`./aurora~640@2x.avif`).then((m) => m.default.src),
	await import(`./aurora~640@1x.avif`).then((m) => m.default.src),
	await import(`./aurora~1280@2x.avif`).then((m) => m.default.src),
	await import(`./aurora~1280@1x.avif`).then((m) => m.default.src),
	await import(`./aurora@2x.avif`).then((m) => m.default.src),
	await import(`./aurora@1x.avif`).then((m) => m.default.src),
	await import(`./aurora~640@2x.webp`).then((m) => m.default.src),
	await import(`./aurora~640@1x.webp`).then((m) => m.default.src),
	await import(`./aurora~1280@2x.webp`).then((m) => m.default.src),
	await import(`./aurora~1280@1x.webp`).then((m) => m.default.src),
	await import(`./aurora@2x.webp`).then((m) => m.default.src),
	await import(`./aurora@1x.webp`).then((m) => m.default.src),
]
