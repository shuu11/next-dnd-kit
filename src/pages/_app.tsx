import 'windi.css' // eslint-disable-line import/no-unresolved
import 'styles/styles.css'
import { theme } from 'themes'
import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

// font
const roboto_normal = Roboto({ weight: '400', subsets: ['latin'] })
const roboto_bold = Roboto({ weight: '700', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>

			{/* eslint-disable-next-line react/no-unknown-property */}
			<style jsx global>{`
				:root {
					--font-roboto-normal: ${roboto_normal.style.fontFamily};
					--font-roboto-bold: ${roboto_bold.style.fontFamily};
				}

				body {
					font-family: sans-serif, 'Roboto';
					color: ${theme.color.white};
					background-color: ${theme.bgc.black};
				}

				a {
					background-color: ${theme.bgc.block};
				}

				a:hover {
					background-color: ${theme.bgc.blockHover};
				}

				button {
					background-color: ${theme.bgc.block};
				}

				button:hover {
					background-color: ${theme.bgc.blockHover};
				}
			`}</style>
		</>
	)
}
