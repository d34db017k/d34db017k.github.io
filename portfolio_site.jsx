export default function PortfolioSite() {
    const navigationItems = [
        { id: 'home', label: 'Home'},
        { id: 'analysis', label: 'Analysis'},
        { id: 'mp1', label: 'MP1'},
        { id: 'mp2', label: 'MP2'},
        { id: 'mp3', label: 'MP3'},
        { id: 'professional', label: 'Professional Work'},
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justfy-between px-6 py-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">LMC 3403 Portfolio</p>
                        <h1 className="text-xl font-semibold">Kellen Madigan</h1>
                    </div>
                    <nav className="hidden gap-3 md:fkex">
                        {navigationItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition hover:border-neutral-500 hover:bg-neutral-900"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
            </div>
        </header>

        <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-12">
            <section id="home" className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Technical Communication in Practice</p>
                    <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                        Building clearer communication for games, teams, and technical communities.
                    </h2>
                    <p className="max-w-2xl text-lg leading-8 text-neutral-300">
                        I am a Georgia Tech student focused on computer science, game development, and design. In LMC 3403,
                        I used this semester to strengthen the way I communicate technical work across professional, public,
                        and collaborative contexts. This portfolio brings together my career materials, crisis communication
                        research, community training work for CECHE, and outside projects that connect directly to my long-term
                        interests in interactive media and development.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => scrollToSection('analysis')}
                            className="rounded-2xl bg-cyan-300 px-5 py-3 font-medium text-neutral-950 transition hover:opacity-90"
                        >
                            Read Analysis
                        </button>
                        <button
                            onClick={() => scrollToSection('professional')}
                            className="rounded-2xl border border-neutral-700 px-5 py-3 font-medium transition hover:border-neutral-500 hover:bg-neutral-900"
                        >
                            View Projects
                        </button>
                    </div>
                </div>

                <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 shadow-2xl">
                    <div className="aspect-[4/5] rounded-2xl border border-dashed border-neutral-700 bg-neutral-900/60 p-6">
                        <div className="flex h-full flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
                            <div>
                                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Visual Placeholder</p>
                                <h3 className="mt-3 text-2xl font-semibold">Add a headshot, game screenshot, or personal graphic here</h3>
                            </div>
                            <p className="text-sm leading-6 text-neutral-400">
                                PLACE HOLDER - LANDING PAGE STUFFF
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="analysis" className="space-y-6">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Self-Assessment Analysis</p>
                    <h2 className="text-3xl font-bold md:text-4xl">Reflecting on growth across rhetoric, process, modes and media, and design</h2>
                </div>
                <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8 shadow-xl">
                    <div className="prose prose-invert max-w-none prose-p:leading-8 prose-headings:text-white prose-strong:text-white">
                        <p>
                            At the beginning of this course, one of my main goals was to become a stronger technical communicator in a way that would directly support my long-term interests in game development and game design. As someone who wants to work in spaces where technical ideas, creative direction, and collaboration constantly overlap, I wanted to improve at explaining complex work clearly, adapting communication for different audiences, and presenting technical material in a way that is usable rather than just informative. Over the course of the semester, I think my work in LMC 3403 helped me make clear progress toward that goal. Across my major projects, I became more aware of how communication choices shape the way people understand technical material, and I also became more intentional about revision, multimodality, and document design. Looking back at my portfolio as a whole, I believe my work shows growth in all four course outcomes: rhetoric, process, modes and media, and design.
                        </p>
                        <p>
                            The strongest area of growth for me was rhetoric. This course pushed me to think much more carefully about audience, purpose, and context, especially when discussing technical subjects that can easily become too broad, too dense, or too specialized. In Major Project 1, I had to frame my experience in a way that would make sense to an outside professional audience rather than only to professors or classmates. My resume and cover letter required me to make decisions about what to emphasize, how to describe technical work concisely, and how to connect my experiences to a specific role. Instead of just listing responsibilities, I had to present my work in a way that highlighted relevance, impact, and fit. That was especially important because many of my experiences, such as Unity development, sign language game prototyping, and teaching assistant leadership, involve technical details that could be described in many different ways. This project helped me practice translating technical experience into language that a hiring manager could quickly understand.
                        </p>
                        <p>
                            I also think Major Project 2 showed growth in rhetoric in a different way because it required me to communicate the same issue to different audiences. In the report on the No Man’s Sky launch crisis, I focused on a more analytical and evidence-based discussion of communication failure, credibility, and audience expectation. In the infographic, that same material had to be compressed into a more public-facing format that was much more visual and much more immediate. That shift helped me understand that good technical communication is not just about being correct. It is also about deciding what an audience actually needs, what level of explanation is useful, and what form will make the message most effective. Since I am interested in game development, this project especially mattered to me because it let me examine communication inside a field I care about while also showing how much public trust depends on clear messaging.
                        </p>
                        <p>
                            My progress in process is visible in how I approached drafting, revision, and feedback across the semester. Earlier in my academic work, I often treated writing as something that mostly happened once the ideas were already settled. In this class, I became much more aware that communication is iterative and that revision is not just polishing wording. It is often where the real problem-solving happens. In Major Project 1, revising my application materials made me think more critically about organization, clarity, and how much information a reader actually needs in each section. In Major Project 2, drafting and revising helped me narrow my focus and better connect evidence to my central claim about expectation, promotion, and trust in the video game industry. I had to move beyond just explaining what happened and instead make a stronger argument about why the communication surrounding the launch failed.
                        </p>
                        <p>
                            Major Project 3, which focused on developing training and communication materials for CECHE, also reflects growth in process because it required more sustained collaboration and planning than my earlier projects. Since our work for CECHE centers on training, onboarding, and clearer public-facing communication, the project naturally depends on thinking through usability, sequence, and how a new audience will move through the material step by step. That kind of work mirrors the kinds of communication challenges that come up in game development teams, where documentation, onboarding, and player-facing explanation all need to be clear and well organized. Working on this project in progress has reminded me that effective technical communication is rarely produced in isolation. It develops through discussion, testing, revision, and adjustment based on what actually works for users.
                        </p>
                        <p>
                            I also developed a lot in modes and media over the semester. One of the course goals is to create WOVEN communication, and this portfolio makes it clear to me that I worked across much more than just traditional written text. My projects included professional documents, analytical writing, visual communication, and collaborative training materials, all of which required different strengths. The infographic for Major Project 2 is one of the clearest examples of this because it forced me to rethink how information is communicated when the reader is scanning rather than reading line by line. In that context, layout, image choice, text density, and pacing all became part of the communication itself. Instead of assuming the writing would do all the work, I had to think about how visual structure would guide understanding.
                        </p>
                        <p>
                            This matters a lot for my own goals because game development is already a highly multimodal field. Designers and developers constantly communicate through pitch decks, documentation, interface mockups, tutorials, gameplay demonstrations, and presentations. Because of that, I found it useful that this class did not treat technical communication as only formal writing. It pushed me to think more broadly about how written, visual, oral, and digital elements work together. That is something I can directly apply to my future work, whether I am explaining a game mechanic, documenting a tool, presenting a prototype, or helping onboard collaborators onto a project.
                        </p>
                        <p>
                            Finally, I showed growth in design. Before this course, I mainly thought about design in terms of whether something looked polished. Over the semester, I started thinking more about design as a communication decision tied to clarity, accessibility, and usability. In my resume and cover letter, design choices affected readability and professionalism. In the infographic, design determined how quickly the audience could understand the timeline and the main claim. In Major Project 3, design is especially important because training materials succeed or fail based on whether users can navigate them easily and understand the information in the intended order. This course helped me see that effective design is not decoration. It is part of the argument. It influences emphasis, pacing, and user experience.
                        </p>
                        <p>
                            Overall, I think this course helped me make meaningful progress toward the goals I had for myself at the start of the semester. I wanted to strengthen my technical communication in a way that would support my interests in game development and game design, and I believe this portfolio shows that I did. Across these projects, I learned how to shape communication for different audiences, revise with greater purpose, work across multiple modes, and make stronger design decisions. More importantly, I now have a clearer understanding of why those skills matter. In game development, strong ideas are not enough on their own. Teams need clear documentation, thoughtful presentations, accessible training materials, and communication that builds trust with players, collaborators, and stakeholders. This course helped me grow in those areas, and I see that growth reflected throughout the work in this portfolio.
                        </p>
                    </div>
                </div>
            </section>

            <section id="mp1" className="space-y-6">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Major Project 1</p>
                    <h2 className="text-3xl font-bold">Career Materials</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
                    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8">
                        <p className="leading-8 text-neutral-300">
                            === 100 to 150 word introduction for MP1 ===
                        </p>
                    </div>
                    <div className="rounded-3xl border border-dashed border-neutral-700 bg-neutral-950/70 p-8">
                        <h3 className="text-xl font-semibold">Suggested assets</h3>
                        <ul className="mt-4 space-y-3 text-neutral-300">
                            <li>• Resume PDF embed or screenshot</li>
                            <li>• Cover letter excerpt</li>
                            <li>• Highlighted revision example</li>
                            <li>• A short note on how feedback changed the final draft</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="mp2" className="space-y-6">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Major Project 2</p>
                    <h2 className="text-3xl font-bold">Technical Crisis Report & Infographic</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
                    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8">
                        <p className="leading-8 text-neutral-300">
                            === Replace with 100 to 150 word introduction for MP2 ===
                        </p>
                    </div>
                    <div className="rounded-3xl border border-dashed border-neutral-700 bg-neutral-950/70 p-8">
                        <h3 className="text-xl font-semibold">Suggested assets</h3>
                        <ul className="mt-4 space-y-3 text-neutral-300">
                            <li>• Final report PDF</li>
                            <li>• Infographic image</li>
                            <li>• Quote or excerpt from the report</li>
                            <li>• Screenshot comparing draft and final layout</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="mp3" className="space-y-6">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Major Project 3</p>
                    <h2 className="text-3xl font-bold">Community Training Materials for CECHE</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
                    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8">
                        <p className="leading-8 text-neutral-300">
                            === Replace with 100 to 150 word intro for MP3 ===
                        </p>
                    </div>
                    <div className="rounded-3xl border border-dashed border-neutral-700 bg-neutral-950/70 p-8">
                        <h3 className="text-xl font-semibold">Suggested assets</h3>
                        <ul className="mt-4 space-y-3 text-neutral-300">
                            <li>• Website or guide screenshots</li>
                            <li>• Recommendation report draft excerpt</li>
                            <li>• Team planning artifacts or mockups</li>
                            <li>• Before and after revision examples</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="professional" className="space-y-10">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Professional Work</p>
                    <h2 className="text-3xl font-bold md:text-4xl">Projects beyond LMC 3403</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <article className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8">
                        <h3 className="text-2xl font-semibold">Project One Placeholder</h3>
                        <p className="mt-4 leading-8 text-neutral-300">
                            Replace with 100 to 150 word project introduction, probably for Quinn Signer development.
                        </p>
                        <div className="mt-6 rounded-2xl border border-dashed border-neutral-700 bg-neutral-950/70 p-6 text-neutral-400">
                            Add screenshots, a demo link, diagrams, or UI mockups here.
                        </div>
                    </article>

                    <article className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8">
                        <h3 className="text-2xl font-semibold">Project Two Placeholder</h3>
                        <p className="mt-4 leading-8 text-neutral-300">
                            Replace with 100 to 150 word project introduction, probably for leading 3 Sign Language Mobile Games.
                        </p>
                        <div className="mt-6 rounded-2xl border border-dashed border-neutral-700 bg-neutral-950/70 p-6 text-neutral-400">
                            Add visuals, links, documentation excerpts, or presentation images somewhere about her.
                        </div>
                    </article>
                </div>
            </section>
        </main>

        <footer className="border-t border-neutral-800 bg-neutral-950">
            <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-400">
                <p>LMC 3403 Final Portfolio - Webpage | Kellen Madigan | GTID: 903721181</p>
            </div>
        </footer>
    </div>
  );
}