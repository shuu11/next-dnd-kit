import 'windi.css' // eslint-disable-line import/no-unresolved
import '@f/styles/styles.css'
// import { Roboto, Lora, Inter, Kenia, Dancing_Script } from '@next/font/google'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { SWRConfig } from 'swr'
import { fetcher } from '@f/lib/fetcher'

// font
// const roboto_normal = Roboto({ weight: '400', subsets: ['latin'] })
// const roboto_bold = Roboto({ weight: '700', subsets: ['latin'] })
// const lora = Lora({ subsets: ['latin'] })
// const inter = Inter({ subsets: ['latin'] })
// const dancing = Dancing_Script({ subsets: ['latin'] })
// const kenia = Kenia({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<SWRConfig
				value={{
					fetcher,
					refreshInterval: 3000,
				}}>
				<RecoilRoot>
					<Component {...pageProps} />
				</RecoilRoot>
			</SWRConfig>
		</>
	)
}

// 				{/* eslint-disable-next-line react/no-unknown-property */}
// <style jsx global>
// 	{`

// 	:root {
// 			--font-roboto-normal: ${roboto_normal.style.fontFamily};
// 			--font-roboto-bold: ${roboto_bold.style.fontFamily};
// 			--font-inter: ${inter.style.fontFamily};
// 			--font-lora: ${lora.style.fontFamily};
// 			--font-kenia: ${kenia.style.fontFamily};
// 			--font-dancing: ${dancing.style.fontFamily};
// 		}

// 		body {
// 			font-family: sans-serif , 'Roboto', var(--font-dancing));
// 			color: ${theme.color.white};
// 			background-color: ${theme.bgc.black};
// 		}

// 		a {
// 			background-color: ${theme.bgc.block};
// 		}

// 		a:hover {
// 			background-color: ${theme.bgc.blockHover};
// 		}

// 		button {
// 			background-color: ${theme.bgc.block};
// 		}

// 		button:hover {
// 			background-color: ${theme.bgc.blockHover};
// 		}
// 	`}
