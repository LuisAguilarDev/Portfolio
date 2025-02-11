import { ReactElement } from 'react'

export default function Section({
  title,
  children,
  id,
  className,
}: Readonly<{
  title: string;
  children: ReactElement;
  id: string;
  className?: string;
}>) {
  return (
    <section
      className={`w-full Project_Container ${className ? className : ''}`}
      id={id}
    >
      {title && <h2 className="Project_Title">{title}</h2>}
      {children}
    </section>
  );
}
