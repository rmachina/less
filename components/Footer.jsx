'use client'

import Image from "next/image"
import Link from "next/link"
import { StarIcon } from "./icons";


const Footer = () => {
    return (
        <footer className="mt-44">
            <div className="bg-[#030e31] w-full">
                <div className="border-b-2 border-white py-6">
                    <p className="text-white font-medium text-center text-lg 15xl:text-base max-w-[1100px] mx-auto">Moneyback Ltd (which trades as Payback) Israeli company #515711653, is authorised and regulated in Israel and operates globally. In the UK, the company operates through a legal exclusion, which removes the need for Moneyback Ltd to be authorised and regulated by the FCA.</p>
                </div>
                <div className="max-w-[1100px] mx-auto py-9">
                    <div className="flex items-start justify-between flex-wrap gap-7 mt-12 px-5">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-3">Sitelinks</h3>
                            <ul className="flex flex-col items-start gap-2">
                                <li>
                                    <Link href={'/'}>
                                        <span className="text-gray-300 text-lg hover:text-white">Testimonials</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <span className="text-gray-300 text-lg hover:text-white">Contact us</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <span className="text-gray-300 text-lg hover:text-white">About Us</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <span className="text-gray-300 text-lg hover:text-white">FAQ</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <span className="text-gray-300 text-lg hover:text-white">Sitemap</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-3">Contact us</h3>
                            <ul className="flex flex-col items-start gap-2">
                                <li>
                                    <Link href={'/'}>
                                        <span className="text-gray-300 text-lg hover:text-white">IL +972-77-7408749</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <span className="text-gray-300 text-lg hover:text-white">US +1-718-473-3943</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <span className="text-gray-300 text-lg hover:text-white">AU +61-283-185-343</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <span className="text-gray-300 text-lg hover:text-white">SE +46-812-410-614</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-6">
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-3">Location</h3>
                                <ul className="flex flex-col items-start gap-2">
                                    <li>
                                        <span className="text-gray-300 text-lg hover:text-white">Hilazon 5, Ramat Gan, Israel, <br /> 5252269</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-3">Our office hours</h3>
                                <ul className="flex flex-col items-start gap-2">
                                    <li>
                                        <Link href={'/'}>
                                            <span className="text-gray-300 text-lg hover:text-white">Mon-Fr: 8:00-19:00 GMT</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <span className="text-gray-300 text-lg hover:text-white">Su: 8:00-14:00 GMT</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <span className="text-gray-300 text-lg hover:text-white">Sat: Closed</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <span className="text-gray-300 text-lg hover:text-white">SE +46-812-410-614</span>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-6">
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-3">Social</h3>
                                <ul className="flex flex-col items-start gap-2">
                                    <li>
                                        <Link href={'/'}>
                                            <span className="text-gray-300 text-lg hover:text-white">Facebook</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <span className="text-gray-300 text-lg hover:text-white">Twitter</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <span className="text-gray-300 text-lg hover:text-white">YouTube</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="98" height="24" viewBox="0 0 98 24" fill="none">
                                        <g clip-path="url(#clip0_1894_16047)">
                                            <path d="M25.6063 8.57031H35.472V10.4007H31.5928V20.6899H29.4597V10.4007H25.5977V8.57031H25.6063H25.6063ZM35.0506 11.9145H36.8741V13.608H36.9085C36.9687 13.3686 37.0805 13.1376 37.2439 12.9152C37.4073 12.6929 37.6052 12.479 37.8374 12.2994C38.0696 12.1113 38.3277 11.9659 38.6115 11.8461C38.8954 11.7349 39.1878 11.6751 39.4803 11.6751C39.7039 11.6751 39.8673 11.6836 39.9533 11.6922C40.0394 11.7007 40.1254 11.7178 40.22 11.7264V13.5909C40.0824 13.5653 39.9447 13.5482 39.7985 13.5311C39.6523 13.514 39.5147 13.5054 39.377 13.5054C39.0502 13.5054 38.7405 13.5738 38.4481 13.7021C38.1557 13.8304 37.9062 14.0271 37.6912 14.2752C37.4761 14.5318 37.3041 14.8397 37.1751 15.216C37.0461 15.5923 36.9859 16.02 36.9859 16.5075V20.6814H35.042V11.9145H35.0506V11.9145ZM49.1568 20.6899H47.2473V19.4669H47.2129C46.9721 19.9116 46.6194 20.2623 46.1463 20.5274C45.6733 20.7926 45.1916 20.9294 44.7013 20.9294C43.5401 20.9294 42.6972 20.6472 42.1811 20.0741C41.665 19.5011 41.407 18.6372 41.407 17.4826V11.9145H43.3509V17.2944C43.3509 18.0642 43.4971 18.6116 43.7982 18.928C44.0906 19.2445 44.5121 19.407 45.0454 19.407C45.4582 19.407 45.7937 19.3471 46.0689 19.2188C46.3442 19.0905 46.5678 18.928 46.7312 18.7142C46.9032 18.5089 47.0237 18.2523 47.1011 17.9615C47.1785 17.6707 47.2129 17.3543 47.2129 17.0121V11.9231H49.1568V20.6899V20.6899ZM52.4683 17.876C52.5285 18.4405 52.7436 18.8339 53.1134 19.0649C53.4919 19.2872 53.9392 19.407 54.4639 19.407C54.6445 19.407 54.8509 19.3899 55.0831 19.3642C55.3154 19.3386 55.539 19.2787 55.7369 19.2017C55.9433 19.1247 56.1067 19.005 56.2443 18.851C56.3734 18.6971 56.4336 18.5004 56.425 18.2523C56.4164 18.0043 56.3217 17.799 56.1497 17.6451C55.9777 17.4826 55.7627 17.3628 55.496 17.2602C55.2294 17.1661 54.9283 17.0806 54.5843 17.0121C54.2402 16.9437 53.8962 16.8667 53.5435 16.7898C53.1822 16.7128 52.8296 16.6101 52.4941 16.499C52.1587 16.3878 51.8576 16.2338 51.591 16.0371C51.3244 15.8489 51.1093 15.6009 50.9545 15.3015C50.7911 15.0022 50.7137 14.6344 50.7137 14.1896C50.7137 13.7107 50.8341 13.3172 51.0663 12.9922C51.2985 12.6672 51.5996 12.4106 51.9523 12.2139C52.3135 12.0172 52.7092 11.8803 53.1478 11.7948C53.5865 11.7178 54.008 11.6751 54.4036 11.6751C54.8595 11.6751 55.2982 11.7264 55.711 11.8205C56.1239 11.9145 56.5024 12.0685 56.8378 12.2909C57.1733 12.5047 57.4485 12.7869 57.6722 13.1291C57.8958 13.4712 58.0334 13.8903 58.0936 14.3778H56.0637C55.9691 13.9159 55.7627 13.5995 55.4272 13.4455C55.0918 13.283 54.7047 13.206 54.2746 13.206C54.137 13.206 53.9736 13.2146 53.7843 13.2403C53.5951 13.2659 53.4231 13.3087 53.2511 13.3686C53.0876 13.4284 52.95 13.5225 52.8296 13.6423C52.7178 13.762 52.6576 13.9159 52.6576 14.1127C52.6576 14.3522 52.7436 14.5403 52.907 14.6857C53.0704 14.8311 53.2855 14.9509 53.5521 15.0535C53.8187 15.1476 54.1198 15.2331 54.4639 15.3015C54.8079 15.37 55.1606 15.4469 55.5218 15.5239C55.8745 15.6009 56.2185 15.7035 56.5626 15.8147C56.9066 15.9259 57.2077 16.0799 57.4743 16.2766C57.741 16.4733 57.956 16.7128 58.1194 17.0036C58.2829 17.2944 58.3689 17.6622 58.3689 18.0898C58.3689 18.6116 58.2485 19.0478 58.0076 19.4155C57.7668 19.7748 57.4571 20.0741 57.0787 20.2965C56.7002 20.5189 56.2701 20.6899 55.8057 20.7926C55.3412 20.8952 54.8767 20.9465 54.4208 20.9465C53.8618 20.9465 53.3457 20.8867 52.8726 20.7584C52.3995 20.6301 51.9867 20.4419 51.6426 20.1939C51.2985 19.9373 51.0233 19.6208 50.8255 19.2445C50.6276 18.8681 50.5244 18.4148 50.5072 17.8931H52.4683V17.876ZM58.885 11.9145H60.3558V9.28021H62.2997V11.9145H64.0544V13.36H62.2997V18.0471C62.2997 18.2523 62.3083 18.4234 62.3255 18.5773C62.3427 18.7227 62.3857 18.851 62.4459 18.9537C62.5061 19.0563 62.6007 19.1333 62.7298 19.1846C62.8588 19.2359 63.0222 19.2616 63.2458 19.2616C63.3835 19.2616 63.5211 19.2616 63.6587 19.253C63.7963 19.2445 63.934 19.2274 64.0716 19.1932V20.6899C63.8565 20.7156 63.6415 20.7327 63.4437 20.7584C63.2372 20.784 63.0308 20.7926 62.8158 20.7926C62.2997 20.7926 61.8868 20.7413 61.5772 20.6472C61.2675 20.5531 61.0181 20.4077 60.8461 20.2195C60.6654 20.0314 60.5536 19.8004 60.4848 19.5182C60.4246 19.2359 60.3816 18.9109 60.373 18.5517V13.3771H58.9022V11.9145H58.885ZM65.4306 11.9145H67.2713V13.1034H67.3057C67.5809 12.5902 67.9594 12.231 68.4497 12.0086C68.94 11.7862 69.4646 11.6751 70.0409 11.6751C70.7376 11.6751 71.3397 11.7948 71.8558 12.0428C72.3719 12.2823 72.802 12.6159 73.146 13.0435C73.4901 13.4712 73.7395 13.9673 73.9115 14.5318C74.0836 15.0963 74.1696 15.7035 74.1696 16.345C74.1696 16.9352 74.0922 17.5082 73.9373 18.0556C73.7825 18.6116 73.5503 19.0991 73.2406 19.5267C72.931 19.9544 72.5353 20.2879 72.0537 20.5445C71.572 20.8011 71.0129 20.9294 70.3592 20.9294C70.0753 20.9294 69.7915 20.9038 69.5076 20.8524C69.2238 20.8011 68.9486 20.7156 68.6905 20.6044C68.4325 20.4932 68.183 20.3478 67.968 20.1682C67.7444 19.9886 67.5637 19.7833 67.4089 19.5524H67.3745V23.9315H65.4306V11.9145V11.9145ZM72.2257 16.3108C72.2257 15.9174 72.1741 15.5325 72.0709 15.1561C71.9676 14.7798 71.8128 14.4548 71.6064 14.164C71.3999 13.8732 71.1419 13.6423 70.8409 13.4712C70.5312 13.3001 70.1786 13.206 69.7829 13.206C68.9658 13.206 68.3465 13.4883 67.9336 14.0528C67.5207 14.6173 67.3143 15.37 67.3143 16.3108C67.3143 16.7555 67.3659 17.1661 67.4777 17.5424C67.5895 17.9188 67.7444 18.2438 67.968 18.5175C68.183 18.7912 68.4411 19.005 68.7421 19.1589C69.0432 19.3215 69.3958 19.3984 69.7915 19.3984C70.2388 19.3984 70.6086 19.3043 70.9183 19.1247C71.2279 18.9451 71.4774 18.7056 71.6752 18.4234C71.873 18.1326 72.0192 17.8076 72.1053 17.4398C72.1827 17.072 72.2257 16.6957 72.2257 16.3108ZM75.6576 8.57031H77.6015V10.4007H75.6576V8.57031V8.57031ZM75.6576 11.9145H77.6015V20.6899H75.6576V11.9145ZM79.339 8.57031H81.2829V20.6899H79.339V8.57031V8.57031ZM87.2437 20.9294C86.5384 20.9294 85.9105 20.8097 85.36 20.5787C84.8095 20.3478 84.345 20.0228 83.958 19.6208C83.5795 19.2103 83.287 18.7227 83.0892 18.1582C82.8914 17.5937 82.7882 16.9694 82.7882 16.2937C82.7882 15.6266 82.8914 15.0107 83.0892 14.4462C83.287 13.8817 83.5795 13.3942 83.9579 12.9837C84.3364 12.5731 84.8095 12.2567 85.36 12.0257C85.9105 11.7948 86.5384 11.6751 87.2437 11.6751C87.949 11.6751 88.5769 11.7948 89.1274 12.0257C89.6779 12.2567 90.1423 12.5817 90.5294 12.9837C90.9079 13.3942 91.2003 13.8817 91.3981 14.4462C91.596 15.0107 91.6992 15.6266 91.6992 16.2937C91.6992 16.9694 91.596 17.5937 91.3981 18.1582C91.2003 18.7227 90.9079 19.2103 90.5294 19.6208C90.1509 20.0314 89.6779 20.3478 89.1274 20.5787C88.5769 20.8097 87.949 20.9294 87.2437 20.9294ZM87.2437 19.3984C87.6737 19.3984 88.0522 19.3043 88.3704 19.1247C88.6887 18.9451 88.9467 18.7056 89.1532 18.4148C89.3596 18.124 89.5058 17.7905 89.609 17.4227C89.7037 17.0549 89.7553 16.6786 89.7553 16.2937C89.7553 15.9174 89.7037 15.5496 89.609 15.1732C89.5144 14.7969 89.3596 14.4719 89.1532 14.1811C88.9467 13.8903 88.6887 13.6594 88.3704 13.4797C88.0522 13.3001 87.6737 13.206 87.2437 13.206C86.8136 13.206 86.4351 13.3001 86.1169 13.4797C85.7986 13.6594 85.5406 13.8988 85.3342 14.1811C85.1277 14.4719 84.9815 14.7969 84.8783 15.1732C84.7837 15.5496 84.7321 15.9174 84.7321 16.2937C84.7321 16.6786 84.7837 17.0549 84.8783 17.4227C84.9729 17.7905 85.1277 18.124 85.3342 18.4148C85.5406 18.7056 85.7986 18.9451 86.1169 19.1247C86.4351 19.3129 86.8136 19.3984 87.2437 19.3984ZM92.2669 11.9145H93.7377V9.28021H95.6816V11.9145H97.4363V13.36H95.6816V18.0471C95.6816 18.2523 95.6902 18.4234 95.7074 18.5773C95.7246 18.7227 95.7676 18.851 95.8278 18.9537C95.888 19.0563 95.9827 19.1333 96.1117 19.1846C96.2407 19.2359 96.4041 19.2616 96.6278 19.2616C96.7654 19.2616 96.903 19.2616 97.0406 19.253C97.1782 19.2445 97.3159 19.2274 97.4535 19.1932V20.6899C97.2385 20.7156 97.0234 20.7327 96.8256 20.7584C96.6192 20.784 96.4127 20.7926 96.1977 20.7926C95.6816 20.7926 95.2687 20.7413 94.9591 20.6472C94.6494 20.5531 94.4 20.4077 94.228 20.2195C94.0474 20.0314 93.9355 19.8004 93.8667 19.5182C93.8065 19.2359 93.7635 18.9109 93.7549 18.5517V13.3771H92.2841V11.9145H92.2669V11.9145Z" fill="#EDF2FF" />
                                            <path d="M23.3355 8.56999H14.4245L11.6721 0.136719L8.91102 8.56999L0 8.56144L7.21655 13.7788L4.45551 22.2035L11.6721 16.9947L18.88 22.2035L16.1276 13.7788L23.3355 8.56999V8.56999Z" fill="#00B67A" />
                                            <path d="M16.7469 15.6847L16.1276 13.7773L11.6721 16.9933L16.7469 15.6847Z" fill="#005128" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1894_16047">
                                                <rect width="97.5484" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <div className="flex items-center gap-[2px] h-9">
                                        <span className="p-1 text-lg text-white bg-green-600">{StarIcon}</span>
                                        <span className="p-1 text-lg text-white bg-green-600">{StarIcon}</span>
                                        <span className="p-1 text-lg text-white bg-green-600">{StarIcon}</span>
                                        <span className="p-1 text-lg text-white bg-green-600">{StarIcon}</span>
                                        <span className="p-1 text-lg text-white bg-green-600">{StarIcon}</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-sm">TrustScore 4.9 | 1442 Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 mt-12 border-t-2 border-white">
                        <div className="flex items-center justify-between flex-wrap px-5">
                            <div className="flex items-center gap-9 py-4 flex-wrap 15xl:gap-5">
                                <Link href={'/'} className="text-lg font-medium text-gray-300 hover:text-white">Terms & Conditions</Link>
                                <Link href={'/'} className="text-lg font-medium text-gray-300 hover:text-white">Privacy Policy</Link>
                                <Link href={'/'} className="text-lg font-medium text-gray-300 hover:text-white">Legal</Link>
                            </div>
                            <div className="flex items-center gap-5">
                                <span className="text-white block text-lg font-medium">© Pay Back Ltd</span>
                                <Image className='block' src={'/fd.webp'} width={150} height={50} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#112152]">
                <div className="mx-auto max-w-[1000px] text-center py-12c">
                    <p className="text-gray-300 text-lg 15xl:text-base py-3">Disclaimer: Payback Ltd offers each new client a free consultation. Funds Recovery or other services that will be subsequently commissioned will incur fees and/or commissions, based on the service and the complexity of each individual case. Payback Ltd doesn’t offer any investments, financial services, or advice.</p><br />
                    <p className="text-gray-300 text-lg 15xl:text-base py-3">At Payback we do not initiate calls without request. We only call clients that reached out to us.</p>
                    <p className="text-gray-300 text-lg 15xl:text-base py-3">The Company cannot accept prohibited payment methods.</p>
                    <p className="text-gray-300 text-lg 15xl:text-base py-3">Every payment received by the company is secure under the PCI-DSS protocol.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer