class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(call => call.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection = [...this.alarmCollection, {callback: callback, time: time, canCall: true}];
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(x => x.time !== time);
    }

    getCurrentFormattedTime() {
       return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    onTimer() {
        const now = this.getCurrentFormattedTime();

        this.alarmCollection
            .filter(timer => timer.canCall && timer.time === now)
            .forEach(timer => {
                timer.canCall = false;
                timer.callback();
            });
    }


    start() {
        if (this.intervalId) {
            return;
        }

        this.onTimer();
        this.intervalId = setInterval(() => this.onTimer(), 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(call => call.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

