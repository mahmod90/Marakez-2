 
import styles from './HomeVideo.module.css'

export default function HomeVideo() {

    return (
        <main className={styles.main}>
                <div>
                    <video
                        src="./Marakez.mp4 "
                        autoPlay
                        muted
                        loop
                        className={styles.video}
                    />
                </div>
           
        </main>
    );
}