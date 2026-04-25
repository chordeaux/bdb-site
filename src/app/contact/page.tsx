import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Contacts, BogeClassReps, ProgramAmbassadors, Member } from "@/data/contact"

function ContactCard({ member, showPhone = false }: { member: Member; showPhone?: boolean }) {
    const initials = member.name
        .toString()
        .split(" ")
        .map((n) => n[0])
        .join("");

    return (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-brand-blue/10 text-brand-blue text-2xl font-semibold tracking-wide">
                {initials}
            </div>
            <div className="text-center">
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{member.name}</p>
                {member.title && <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{member.title}</p>}
            </div>
            <a
                href={`mailto:${member.email}`}
                className="text-sm text-brand-blue hover:underline break-all"
            >
                {member.email}
            </a>
            {showPhone && member.phone && (
                <a
                    href={`tel:${member.phone}`}
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-blue"
                >
                    {member.phone}
                </a>
            )}
        </div>
    );
}

const colsClass: Record<number, string> = {
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

function Section({ title, members, cols = 3, showPhone = false }: { title: string; members: Member[]; cols?: number; showPhone?: boolean }) {
    return (
        <section className="border-b border-zinc-200 dark:border-zinc-800 last:border-b-0">
            <div className="mx-auto max-w-5xl px-6 py-16">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">{title}</h2>
                {members.length === 0 ? (
                    <p className="text-sm text-zinc-400 dark:text-zinc-500 text-center">Coming soon.</p>
                ) : (
                    <div className={`grid gap-6 ${colsClass[cols] ?? colsClass[3]}`}>
                        {members.map((member) => (
                            <ContactCard key={member.email.toString()} member={member} showPhone={showPhone} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default function Contact() {
    const bdbReps = Contacts.filter((m) =>
        ["President", "Secretary General", "VP Sponsors"].includes(m.title?.toString() ?? "")
    );

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950">
            <Navbar />

            <div className="header-gradient">
                <div className="mx-auto max-w-4xl px-6 py-16">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-orange">
                        Get in touch
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Contact
                    </h1>
                </div>
            </div>

            <Section title="BDB Representatives" members={bdbReps} showPhone />
            <Section title="BoGE Class Representatives" members={BogeClassReps} cols={4} />
            <Section title="Program Ambassadors" members={ProgramAmbassadors} />

            <Footer />
        </div>
    );
}
