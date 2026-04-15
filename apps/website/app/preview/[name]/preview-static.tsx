export function PreviewStatic({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`*, *::before, *::after {
        transition: none !important;
        animation: none !important;
        caret-color: transparent !important;
      }`}</style>
      {children}
    </>
  );
}
