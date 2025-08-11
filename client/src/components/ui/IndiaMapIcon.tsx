// This component renders an SVG of India's map.
// Using an SVG allows it to scale perfectly and inherit color via Tailwind's `text-` utilities.
export function IndiaMapIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57.6 64"
      className={className}
      fill="currentColor" // This makes the SVG take the color of the parent's text
    >
      <path d="M56.2,21.8c-1.3-1.6-3.5-2.2-5.4-1.4L44,23.5l-2.1-5.7c-0.6-1.7-2-3-3.8-3.3L21.5,11c-1.8-0.3-3.6,0.6-4.6,2.1 l-5.2,7.7L4.3,18.5c-1.5-1-3.5-0.9-4.8,0.3s-1.7,3.1-0.7,4.6l5.9,8.5l-4,3.7C-0.7,37-0.6,39,0.7,40.3l11.4,11.9 c1.3,1.4,3.5,1.5,4.9,0.2l5.1-4.7l2.8,4.5c0.8,1.3,2.2,2.1,3.7,2.1h13c1.8,0,3.4-1.1,4.1-2.7l5.2-11.7l3.9,2.1 c1.7,0.9,3.8,0.3,4.8-1.4L57.4,27C58.4,25.4,57.7,23.3,56.2,21.8z" />
    </svg>
  );
}