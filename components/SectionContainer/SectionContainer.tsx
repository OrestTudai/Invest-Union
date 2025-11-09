import {ReactNode} from "react";

type Props = {
  children: ReactNode;
  className?: string;
}

export const SectionContainer = ({ children, className }: Props) => {
  return (
    <section className={`mx-auto max-w-[375px] md:max-w-[744px] xl:max-w-[1440px] ${className}`}>
      {children}
    </section>
  )
}