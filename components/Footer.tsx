export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-10 text-center text-xs tracking-wide text-slate-400">
        © {new Date().getFullYear()} ConnectX. All rights reserved.
      </div>
    </footer>
  );
}
