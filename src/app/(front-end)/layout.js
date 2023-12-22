export const metadata = {
  title: "Eval Mate",
  description: "Evaluate yourself",
};

export default function FrontPageLayout({ children }) {
  return (
    <main>
      <div className="bg-gray-50 text-slate-900 dark:bg-slate-950 dark:text-slate-400 dark:bg-hero-pattern min-h-screen">
        {children}
      </div>
    </main>
  );
}
