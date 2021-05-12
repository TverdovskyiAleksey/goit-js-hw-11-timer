const refs = {
    daysEl: document.querySelector('[data-value="days"]'),
    hoursEl: document.querySelector('[data-value="hours"]'),
    minsEl: document.querySelector('[data-value="mins"]'),
    secsEl: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer {
    constructor({targetDate}) {
        this.targetDate = targetDate;
    }

    start() {
        const targetDate = Date.parse(this.targetDate);

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.updateClockface(time);
        }, 1000);
    }

    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
    }
    
    pad(value) {
    return String(value).padStart(2, '0');
    }

    updateClockface({days, hours, mins, secs}) {
    refs.daysEl.textContent = `${days}`;
    refs.hoursEl.textContent = `${hours}`;
    refs.minsEl.textContent = `${mins}`;
    refs.secsEl.textContent = `${secs}`;
}
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 9, 2021'),
});

timer.start();
