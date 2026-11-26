import styles from "./AppCard.module.scss";

export type AppCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Any other props (`id`, `aria-*`, `data-*`, ...) are passed to the `<div>`. */
  [key: string]: unknown;
};

/**
 * A panel with a background, rounded corners and a shadow. Stacks its children in a centered column.
 *
 * @example
 * ```tsx
 * <AppSection width="medium" height="auto">
 *   <AppCard>
 *     <h3>Title</h3>
 *     <p>Content</p>
 *   </AppCard>
 * </AppSection>
 * ```
 */
export default function AppCard({ children, className = "", ...props }: AppCardProps) {
  return (
    <div className={`${styles.appcard} ${className}`} {...props}>
      {children}
    </div>
  );
}
