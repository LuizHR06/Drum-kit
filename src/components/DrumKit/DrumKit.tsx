import { useEffect } from 'react';
import classes from './DrumKit.module.css'

export const DrumKit = () => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent): void => {
            const audio = document.querySelector(`audio[data-key="${e.key}"]`) as HTMLAudioElement;
            const key = document.querySelector(`.${classes.key}[data-key="${e.key}"]`) as HTMLDivElement;            

            if (!audio) return;
            audio.currentTime = 0;
            audio.play();            
            key.classList.add('playing');
        };

        const removeTransition = (e: TransitionEvent) => {
            const target = e.target as HTMLElement;
            if (e.propertyName !== 'transform' || !target.classList) return;
            target.classList.remove('playing');
        };  

        const keys = document.querySelectorAll(`.${classes.key}`);
        keys.forEach(key => key.addEventListener('transitionend', removeTransition as EventListener));

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            keys.forEach(key => key.removeEventListener('transitionend', removeTransition as EventListener));
        };
    }, []);


    return (
        <div className={classes.keysContainer}>
            <div data-key='a' className={classes.key}>
                <p>A</p>
                <p className={classes.sound}>CLAP</p>
            </div>
            <div data-key='s' className={classes.key}>
                <p>S</p>
                <p className={classes.sound}>HIHAT</p>
            </div>
            <div data-key='d' className={classes.key}>
                <p>D</p>
                <p className={classes.sound}>KICK</p>
            </div>
            <div data-key='f' className={classes.key}>
                <p>F</p>
                <p className={classes.sound}>OPENHAT</p>
            </div>
            <div data-key='g' className={classes.key}>
                <p>G</p>
                <p className={classes.sound}>BOOM</p>
            </div>
            <div data-key='h' className={classes.key}>
                <p>H</p>
                <p className={classes.sound}>RIDE</p>
            </div>
            <div data-key='j' className={classes.key}>
                <p>J</p>
                <p className={classes.sound}>SNARE</p>
            </div>
            <div data-key='k' className={classes.key}>
                <p>K</p>
                <p className={classes.sound}>TOM</p>
            </div>
            <div data-key='l' className={classes.key}>
                <p>L</p>
                <p className={classes.sound}>TINK</p>
            </div>

            <audio data-key="a" src="/sounds/clap.wav"></audio>
            <audio data-key="s" src="/sounds/hihat.wav"></audio>
            <audio data-key="d" src="/sounds/kick.wav"></audio>
            <audio data-key="f" src="/sounds/openhat.wav"></audio>
            <audio data-key="g" src="/sounds/boom.wav"></audio>
            <audio data-key="h" src="/sounds/ride.wav"></audio>
            <audio data-key="j" src="/sounds/snare.wav"></audio>
            <audio data-key="k" src="/sounds/tom.wav"></audio>
            <audio data-key="l" src="/sounds/tink.wav"></audio>
        </div>
    )
}