import styles from "./AppCard.module.scss";

export type AppCardProps = {
  children: React.ReactNode;
  className?: string;
  // additional props like id, key
  [key: string]: unknown;
};

export default function AppCard({ children, className = "", ...props }: AppCardProps) {
  return (
    <div className={`${styles.appcard} ${className}`} {...props}>
      {children}
    </div>
  );
}
