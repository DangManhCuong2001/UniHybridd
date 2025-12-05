import Header from 'src/components/layout/header/header';
import { Jersey_10 } from 'next/font/google';
import { BgContainerText } from 'src/assets/icons/Bg_Container_text';
import { Button } from 'shadcn/button';
import { MoveRight } from 'lucide-react';
import Container from 'src/components/container/container';
import { LandingpageIcon1 } from 'src/assets/icons/Landingpage_Icon_1';
import { LandingpageIcon2 } from 'src/assets/icons/Landingpage_Icon_2';
import { LandingpageIcon3 } from 'src/assets/icons/Landingpage_Icon_3';
import Image from 'next/image';
import { LOGO_TECH_1TX, STAR_1, STAR_2, TOKEN_PIXEL_1 } from 'src/constants/ImagePath';
import Footer from 'src/components/layout/footer/footer';

const jersey = Jersey_10({ subsets: ['latin'], weight: '400' });

export default function Home() {
    return (
        <div className="relative mt-[20px] lg:mt-50">
            <div className="w-full flex justify-center mt-[130px]">
                <div className="max-w-[600px] relative text-center ">
                    <Image alt="star1" src={STAR_1} className="absolute top-12" />
                    <Image alt="star2" src={STAR_2} className="absolute -top-20 -right-6" />

                    <div className="flex justify-center w-full">
                        <BgContainerText className="lg:h-[120px] lg:w-[500px] h-[60px] w-[220px]" />
                    </div>
                    <p className={`text-[60px] lg:text-[140px] ${jersey.className} absolute top-0 left-1/2 -translate-x-1/2 leading-[60px] lg:leading-[120px]`}>UniHybrid</p>
                    <p className="text-[14px] lg:text-2xl font-bold">Where best price meets instant liquidity</p>
                    <Button className="my-6 lg:h-[60px] lg:px-[32px!important] lg:py-[16px!important] font-bold shadow-[0_2px_2px_2px_rgba(0,0,0,0.10),0_-4px_0_0_rgba(0,0,0,0.20)_inset,0_6px_10px_4px_rgba(255,255,255,0.40)_inset,0_16px_160px_0_rgba(208,38,112,0.75)]">
                        Launch App
                        <MoveRight />
                    </Button>
                    <p className="lg:text-[20px] text-[14px]">
                        UniHybrid combines on-chain limit orders with AMM liquidity to deliver the best possible execution for every trade - slippage-minimized, atomically, and MEV-resistant.
                    </p>
                </div>
            </div>

            <div className="text-center mt-30 ">
                <p className="font-bold text-[36px] lg:text-[45px] mb-10">Why UniHybrid?</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="relative w-[400px] h-[400px] rounded-2xl mt-2">
                        <div
                            className="absolute inset-0 rounded-2xl pointer-events-none left-0 top-0 z-2"
                            style={{
                                padding: '5px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(255,126,182,0) 35%, rgba(255,126,182,0) 67%, rgba(255,126,182,0.8) 100%)',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                            }}
                        ></div>
                        <div
                            className="relative lex-1 max-w-[400px] min-h-[400px] h-fit rounded-2xl backdrop-blur-[3.5px] shadow-[0px_12px_0px_#621838] z-1"
                            style={{
                                border: '10px solid transparent',
                                background:
                                    'linear-gradient(rgba(10,10,10,0.85), rgba(10,10,10,0.85)) padding-box, linear-gradient(to bottom, #ff7eb650 0%, #ff7eb600 26%, #ff7eb600 86%, #FFC2DC 100%) border-box',
                                backgroundClip: 'padding-box, border-box',
                                backgroundOrigin: 'padding-box, border-box',
                            }}
                        >
                            <div className="text-left p-4 lg:p-8 ">
                                <p className="text-2xl font-bold mb-1">Optimized Price Execution</p>
                                <span className="font-medium text-secondary">
                                    Automatically secures the best rates by matching against top limit orders (KyberSwap, 1inch) before routing to <span className="text-foreground">Uniswap V4</span>.
                                </span>
                                <p className="text-primary font-medium">Zero config. Zero complexity.</p>
                            </div>
                            <div className="absolute bottom-0 w-full py-8 flex justify-center rounded-[6px] bg-[linear-gradient(to_bottom,#CB196600_0%,#CB196699_100%)]">
                                <LandingpageIcon1 className="w-[316px]" />
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[400px] h-[400px] rounded-2xl mt-2">
                        <div
                            className="absolute inset-0 rounded-2xl pointer-events-none left-0 top-0 z-2"
                            style={{
                                padding: '5px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(255,126,182,0) 35%, rgba(255,126,182,0) 67%, rgba(255,126,182,0.8) 100%)',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                            }}
                        ></div>
                        <div
                            className="relative lex-1 max-w-[400px] min-h-[400px] h-fit rounded-2xl backdrop-blur-[3.5px] shadow-[0px_12px_0px_#621838] z-1"
                            style={{
                                border: '10px solid transparent',
                                background:
                                    'linear-gradient(rgba(10,10,10,0.85), rgba(10,10,10,0.85)) padding-box, linear-gradient(to bottom, #ff7eb650 0%, #ff7eb600 26%, #ff7eb600 86%, #FFC2DC 100%) border-box',
                                backgroundClip: 'padding-box, border-box',
                                backgroundOrigin: 'padding-box, border-box',
                            }}
                        >
                            <div className="text-left p-4 lg:p-8">
                                <p className="text-2xl font-bold mb-1">Seamless Hybrid Routing</p>
                                <span className="font-medium text-secondary">
                                    Combines the best of both worlds: limit orders for price, AMMs for liquidity. Everything happens in a single, atomic transaction.
                                </span>
                                <p className="text-primary font-medium">One click. Best outcome.</p>
                            </div>
                            <div className="absolute bottom-0 w-full py-8 flex rounded-[6px] justify-center bg-[linear-gradient(to_bottom,#CB196600_0%,#CB196699_100%)]">
                                <LandingpageIcon2 className="w-[316px]" />
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[400px] h-[400px] rounded-2xl mt-2">
                        <div
                            className="absolute inset-0 rounded-2xl pointer-events-none left-0 top-0 z-2"
                            style={{
                                padding: '5px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(255,126,182,0) 35%, rgba(255,126,182,0) 67%, rgba(255,126,182,0.8) 100%)',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                            }}
                        ></div>
                        <div
                            className="relative lex-1 max-w-[400px] min-h-[400px] h-fit rounded-2xl backdrop-blur-[3.5px] shadow-[0px_12px_0px_#621838] z-1"
                            style={{
                                border: '10px solid transparent',
                                background:
                                    'linear-gradient(rgba(10,10,10,0.85), rgba(10,10,10,0.85)) padding-box, linear-gradient(to bottom, #ff7eb650 0%, #ff7eb600 26%, #ff7eb600 86%, #FFC2DC 100%) border-box',
                                backgroundClip: 'padding-box, border-box',
                                backgroundOrigin: 'padding-box, border-box',
                            }}
                        >
                            <div className="text-left p-4 lg:p-8">
                                <p className="text-2xl font-bold mb-1">Built-in MEV Shield</p>
                                <span className="font-medium text-secondary">
                                    Direct matching against limit orders minimizes exposure to the AMM, protecting you from <span className="text-foreground">sandwich attacks</span> and toxic
                                    arbitrage.
                                </span>
                                <p className="text-primary font-medium">Safer for Swappers. Healthier for LPs.</p>
                            </div>
                            <div className="absolute bottom-0 w-full pb-8 rounded-[6px] flex justify-center bg-[linear-gradient(to_bottom,#CB196600_0%,#CB196699_100%)]">
                                <LandingpageIcon3 className="w-[240px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-50 mb-30">
                <div className="text-center mb-10">
                    <span className="text-[45px] font-bold ">
                        AMM & Orderbook <span className="text-primary">in 1tx</span>
                    </span>
                </div>
                <div className="flex justify-center">
                    <Image src={LOGO_TECH_1TX} alt="logo_1tx" title="logo trufy" width={1280} height={668} priority sizes="1280px" className="w-[1280px] h-auto object-contain" />
                </div>
            </div>
            <Footer />
        </div>
    );
}
