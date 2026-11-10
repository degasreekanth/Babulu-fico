import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SuccessModal({ open, onClose }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    buttonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previousFocus.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-navy-950/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
        aria-describedby="success-message"
        className="animate-modal-in w-full max-w-md rounded-2xl bg-white px-5 py-7 text-center shadow-2xl sm:rounded-3xl sm:px-8 sm:py-9"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 sm:h-24 sm:w-24">
          <svg
            viewBox="0 0 64 64"
            className="h-14 w-14 sm:h-16 sm:w-16"
            aria-hidden="true"
          >
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="animate-check-circle text-green-500"
            />
            <path
              d="M19 33.5l8.5 8.5L45 23.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-check-mark text-green-500"
            />
          </svg>
        </div>

        <h2
          id="success-title"
          className="mt-5 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl"
        >
          Thank You!
        </h2>
        <p
          id="success-message"
          className="mt-3 text-sm font-medium leading-relaxed text-slate-700 sm:text-base"
        >
          Your Free Demo Request Has Been Submitted Successfully.
        </p>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
          Our ERPWorld team will contact you shortly via WhatsApp or phone.
        </p>

        <p className="mt-6 rounded-xl border border-gold-200 bg-gold-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-gold-700 sm:text-sm">
          ERPWorld – SAP FICO Training Institute
        </p>

        <button
          ref={buttonRef}
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-navy-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 sm:text-base"
        >
          OK, Got It
        </button>
      </div>
    </div>
  );
}
