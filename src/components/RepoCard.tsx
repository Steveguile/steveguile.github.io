import type { Repository } from "../types";
import styles from "./RepoCard.module.css";

interface RepoCardProps {
  repo: Repository;
}

export default function RepoCard({ repo }: RepoCardProps) {
  const handleClick = () => {
    window.open(repo.repoUrl, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={styles.wrapper}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`Open ${repo.name} repository on GitHub`}
    >
      <div className={styles.card}>
        <img
          src={`${repo.repoUrl.replace("https://github.com/", "https://raw.githubusercontent.com/")}/refs/heads/main/card.png`}
          alt={repo.name}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay}>
          <span className={styles.overlayText}>View on GitHub →</span>
        </div>
      </div>

      <div className={styles.meta}>
        <span className={styles.name}>{repo.name}</span>
        {repo.language !== undefined && (
          <span className={styles.language}>{repo.language}</span>
        )}
      </div>
    </div>
  );
}
