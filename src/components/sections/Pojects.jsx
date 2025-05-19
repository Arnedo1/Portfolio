import newImage from '../../assets/new.png';
import new2Image from '../../assets/new2.png'
import { RevealOnScroll } from '../RevealOnScroll'
import imgSoppinglistMob from '../../assets/ShoppingList-Mobile.png'
import imgCurrencytMob from '../../assets/CurrencyCalculator-mob.png'
import imgMealFinder from '../../assets/Frame.Meal-finder.png'
import imgOroDItalia from "../../assets/Frame.Oro.d.italia.png"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project Card */}
                    <div className="bg-gray-800/50  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition hover:scale-101 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                        <h3 className="text-xl font-bold mb-2">Schildersbedrijf Arnedo</h3>
                        <img src={newImage} alt="Schildersbedrijf Arnedo website preview" className="w-full h-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Small Business Website</h3>
                        <p className="text-gray-300 mb-4">
                            This is an 8-page responsive small business website for a local painting company
                        </p>
                        <div className="flex justify-around items-center">
                            <div className="flex flex-wrap max-w-[300px] gap-2">
                                {['HTML', 'CSS', 'JavaScript'].map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-blue-500/10 text-blue-500 h-8 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition inline-flex items-center"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <a href="https://www.schildersbedrijf-arnedo.nl" className="bg-blue-500 text-white h-8 px-4 rounded font-medium transition inline-flex items-center relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Website</a>
                                {/* <a href="#" className="border border-blue-500/50 text-blue-500 h-8 px-4 rounded font-medium inline-flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">GitHub</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800/50 transition hover:scale-101  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                        <h3 className="text-xl font-bold mb-2">Damo Schildersbedrijf</h3>
                        <img src={new2Image} alt="Damo Schildersbedrijf website preview" className="w-full h-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Small Business Website</h3>
                        <p className="text-gray-300 mb-4">
                            This is an 8-page responsive small business website for a local painting company
                        </p>
                        <div className="flex justify-around items-center">
                            <div className="flex flex-wrap gap-2">
                                {['HTML', 'CSS', 'JavaScript'].map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-blue-500/10 text-blue-500 h-8 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition inline-flex items-center"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <a href="https://damoschildersbedrijf.nl/" className="bg-blue-500 text-white h-8 px-4 rounded font-medium transition inline-flex items-center relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Website</a>
                                {/* <a href="#" className="border border-blue-500/50 text-blue-500 h-8 px-4 rounded font-medium inline-flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">GitHub</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800/50 transition hover:scale-101  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                        <h3 className="text-xl text-center font-bold mb-2">My Shopping List</h3>
                        <img src={imgSoppinglistMob} alt="My ShoppingList app preview" className="w-2/4 mx-auto h-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Small and effective shoppinglist</h3>
                        <p className="text-gray-300 mb-4">
                            This is a small but handy shopping list for day to day use. You can add, remove, edit ans check when completed. 
                        </p>
                        <div className="flex justify-around items-center">
                            <div className="flex flex-wrap max-w-[300px] gap-2">
                                {['HTML', 'CSS', 'JavaScript'].map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-blue-500/10 text-blue-500 h-8 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition inline-flex items-center"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2 items-center ">
                                <a href="https://arnedoschildersbedrijf.nl/" className="bg-blue-500 text-white h-8 px-4 rounded font-medium transition inline-flex items-center relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Website</a>
                                {/* <a href="#" className="border border-blue-500/50 text-blue-500 h-8 px-4 rounded font-medium inline-flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">GitHub</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800/50 transition hover:scale-101  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                        <h3 className="text-xl text-center font-bold mb-2">My Currency Calculator</h3>
                        <img src={imgCurrencytMob} alt="My ShoppingList app preview" className="w-2/4 mx-auto h-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Global Exchange Rate Converter</h3>
                        <p className="text-gray-300 mb-4">
                            This is a nice little currency calculator where you when you register can save your favorite currencys.
                        </p>
                        <div className="flex justify-around items-center">
                            <div className="flex flex-wrap max-w-[300px] gap-2">
                                {['HTML', 'CSS', 'Python', 'Flask', 'BootStrap', 'Sqlite'].map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-blue-500/10 text-blue-500 h-8 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition inline-flex items-center"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2 items-center">
                                <a href="https://currency-0d338f3b7007.herokuapp.com/" className="bg-blue-500 text-white h-8 px-4 rounded font-medium transition inline-flex items-center relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Website</a>
                                {/* <a href="#" className="border border-blue-500/50 text-blue-500 h-8 px-4 rounded font-medium inline-flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">GitHub</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800/50  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition hover:scale-101 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                        <h3 className="text-xl font-bold mb-2">Schildersbedrijf Arnedo</h3>
                        <img src={imgOroDItalia} alt="Schildersbedrijf Arnedo website preview" className="w-full h-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Italian Restaurant website</h3>
                        <p className="text-gray-300 mb-4">
                            Responsive and beautiful website for a local italian restaurant. With a home page, menu menu page and a reservation page.
                        </p>
                        <div className="flex justify-around items-center">
                            <div className="flex flex-wrap max-w-[300px] gap-2">
                                {['HTML', 'CSS', 'JavaScript'].map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-blue-500/10 text-blue-500 h-8 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition inline-flex items-center"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <a href="https://www.schildersbedrijf-arnedo.nl" className="bg-blue-500 text-white h-8 px-4 rounded font-medium transition inline-flex items-center relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Website</a>
                                {/* <a href="#" className="border border-blue-500/50 text-blue-500 h-8 px-4 rounded font-medium inline-flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">GitHub</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800/50  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition hover:scale-101 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                        <h3 className="text-xl font-bold mb-2">SuperCook Recipe Finder</h3>
                        <img src={imgMealFinder} alt="SuperCook Recipe Finder" className="w-full h-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Responsive recipes finder application</h3>
                        <p className="text-gray-300 mb-4">
                        SuperCook is a sleek React app that lets you discover, search, and save recipes with an intuitive interface, complete with ingredients, cooking instructions, and easy favorites management.
                        </p>
                        <div className="flex justify-around items-center">
                            <div className="flex flex-wrap max-w-[300px] gap-2">
                                {['HTML', 'CSS', 'JavaScript','React', 'Tailwind'].map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-blue-500/10 text-blue-500 h-8 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition inline-flex items-center"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <a href="https://www.schildersbedrijf-arnedo.nl" className="bg-blue-500 text-white h-8 px-4 rounded font-medium transition inline-flex items-center relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Website</a>
                                {/* <a href="#" className="border border-blue-500/50 text-blue-500 h-8 px-4 rounded font-medium inline-flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">GitHub</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}