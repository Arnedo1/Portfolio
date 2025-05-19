import { RevealOnScroll } from "../RevealOnScroll"

RevealOnScroll
export const About = () => {
    const frontendSkills = [
        'Html',
        'Css',
        'Tailwind',
        'Javascript',
        'React',
    ]
    const backendSkills = [
        'Nodejs',
        'Sqlite',
    ]
    return (
        <section  id="about" className="min-h-screen flex items-center justify-center py-20">
           <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="mb-6 text-gray-300">
                        Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl text-c font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                { frontendSkills.map( ( tech, index ) => (
                                    <span key={ index } className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{ tech }</span>
                                ) ) }
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                { backendSkills.map( ( tech, index ) => (
                                    <span key={ index } className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{ tech }</span>
                                ) ) }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>B.S. in Computer Science</strong> - Open Univesity</li>
                            <li>
                                Relevant coursework: Data Structures, Web Development, Cloud Computing...
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experiance</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>Freelance web Development:</strong> Developed custom responsive websites for small businesses and organizations, delivering complete solutions from design to deployment. </li>
                            <li>
                            Created and maintained several web applications to solve personal needs, gaining hands-on experience with full-stack development.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}