import RepoCard from "./components/RepoCard";
import { repositories } from "./data/repositories";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.avatar}>
          <img
            src="https://github.com/Steveguile.png"
            alt="GitHub avatar"
            width={80}
            height={80}
          />
        </div>
        <div>
          <h1 className={styles.title}>Steveguile</h1>
          <p className={styles.subtitle}>A collection of my GitHub projects</p>
        </div>
      </header>

      <main className={styles.grid}>
        {repositories.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </main>
    </div>
  );
}
